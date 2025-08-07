// /Users/shin-junwoo/슈퍼코딩/코드 설명/250807/src/components/PaymentForm/PaymentForm.js

// 1. React 라이브러리와 'useState' 훅을 가져옵니다.
// useState: 컴포넌트 내에서 동적으로 변하는 값(상태)을 관리하기 위해 사용됩니다.
import React, { useState } from "react";

// 2. 이 컴포넌트에 적용될 CSS 스타일을 가져옵니다.
import "./PaymentForm.css";

// 3. PaymentForm 함수형 컴포넌트를 정의합니다.
// 부모 컴포넌트(App.js)로부터 'getPaymentFormData' 함수를 props로 전달받습니다.
// 이 함수는 자식(PaymentForm)에서 부모(App)로 데이터를 전달하는 통로 역할을 합니다.
const PaymentForm = ({ getPaymentFormData }) => {
  // 4. useState를 사용하여 폼의 모든 입력 값을 하나의 객체로 관리합니다.
  // - name: 지출 항목 이름 (문자열)
  // - price: 지출 금액 (숫자)
  // - today: 지출 날짜 (Date 객체)
  const [objectState, setObjectState] = useState({
    name: "",
    price: 0,
    today: new Date(),
  });

  // 5. '이름' 입력 필드의 값이 변경될 때마다 호출되는 핸들러 함수입니다.
  const inputTextHandler = (event) => {
    // 함수형 업데이트: 이전 상태(prevState)를 기반으로 새 상태를 계산합니다.
    // 이렇게 하면 여러 상태 업데이트가 비동기적으로 처리될 때 발생할 수 있는 문제를 방지할 수 있습니다.
    // '...prevState'를 통해 기존 상태 객체를 복사하고, 'name' 속성만 새로운 값으로 덮어씁니다.
    setObjectState((prevState) => ({ ...prevState, name: event.target.value }));
  };

  // 6. '금액' 입력 필드의 값이 변경될 때마다 호출되는 핸들러 함수입니다.
  const inputNumberHandler = (event) => {
    setObjectState((prevState) => ({
      ...prevState,
      price: event.target.value, // 🚨 주의: event.target.value는 항상 문자열입니다.
    }));
  };

  // 7. '날짜' 입력 필드의 값이 변경될 때마다 호출되는 핸들러 함수입니다.
  const inputDateHandler = (event) => {
    setObjectState((prevState) => ({
      ...prevState,
      today: event.target.value,
    }));
  };

  // 8. '결제 추가' 버튼을 클릭하거나 폼을 제출할 때 호출되는 핸들러 함수입니다.
  const buttonSubmitHandler = (event) => {
    // event.preventDefault(): 폼 제출 시 발생하는 브라우저의 기본 동작(페이지 새로고침)을 막습니다.
    event.preventDefault();

    // 부모로부터 받은 getPaymentFormData 함수를 호출하여, 현재 폼의 상태(objectState)를 인자로 전달합니다.
    getPaymentFormData(objectState);

    // 폼 제출 후, 입력 필드들을 초기 상태로 리셋합니다.
    setObjectState({
      name: "",
      price: 0,
      today: new Date(),
    });
  };

  // 9. 컴포넌트가 화면에 렌더링할 JSX를 반환합니다.
  return (
    <div className="new-payment">
      {/* 10. form 태그의 onSubmit 이벤트에 제출 핸들러를 연결합니다. */}
      <form onSubmit={buttonSubmitHandler}>
        <div className="new-payment__controls">
          <div className="new-payment__control">
            <label>이름</label>
            {/* 11. '이름' 입력 필드입니다. (Controlled Component) */}
            {/* - value: 입력 필드의 값을 항상 objectState.name으로 설정합니다. */}
            {/* - onChange: 값이 변경될 때마다 inputTextHandler를 호출합니다. */}
            <input
              type="text"
              value={objectState.name}
              onChange={inputTextHandler}
            />
          </div>
          <div className="new-payment__control">
            <label>금액</label>
            <input
              type="number"
              min="0.01"
              step="0.01"
              value={objectState.price}
              onChange={inputNumberHandler}
            />
          </div>
          <div className="new-payment__control">
            <label>날짜</label>
            <input
              type="date"
              value={objectState.today}
              onChange={inputDateHandler}
            />
          </div>
        </div>
        <div className="new-payment__actions">
          {/* 12. type="submit" 버튼은 클릭 시 form의 onSubmit 이벤트를 발생시킵니다. */}
          <button type="submit">결제 추가</button>
        </div>
      </form>
    </div>
  );
};

export default PaymentForm;
