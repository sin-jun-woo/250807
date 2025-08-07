// 1. React와 `useState` 훅을 가져옵니다.
import React, { useState } from "react";

// 2. 이 컴포넌트의 스타일을 정의한 CSS 파일을 가져옵니다.
import "./PaymentForm.css";

// 3. PaymentForm 함수형 컴포넌트를 정의합니다.
// 부모 컴포넌트(App.js)로부터 `getPaymentFormData` 함수를 props로 받습니다.
const PaymentForm = ({ getPaymentFormData }) => {
  // 4. `useState`를 사용하여 폼의 모든 입력 값을 하나의 객체로 관리합니다.
  // 이렇게 하면 여러 개의 `useState`를 사용하는 대신, 관련된 상태를 하나로 묶을 수 있습니다.
  const [objectState, setObjectState] = useState({
    name: "",
    price: 0,
    today: "",
    radio: "",
    checkbox: [], // 체크박스는 여러 개 선택될 수 있으므로 배열로 초기화합니다.
    color: "#000000",
  });

  // 5. '이름' 입력 필드의 값이 변경될 때 호출되는 핸들러 함수입니다.
  const inputTextHandler = (event) => {
    // 6. `setObjectState`를 사용하여 상태를 업데이트합니다.
    // `(prev) => ({...})` 구문은 이전 상태(prev)를 기반으로 새로운 상태를 안전하게 업데이트하는 방법입니다.
    // `...prev`는 이전 상태 객체의 모든 속성을 복사하고, `name` 속성만 새로 들어온 값으로 덮어씁니다.
    setObjectState((prev) => ({ ...prev, name: event.target.value }));
  };

  // 7. '금액' 입력 필드의 값이 변경될 때 호출되는 핸들러 함수입니다.
  const inputNumberHandler = (event) => {
    setObjectState((prev) => ({ ...prev, price: event.target.value }));
  };

  // 8. '날짜' 입력 필드의 값이 변경될 때 호출되는 핸들러 함수입니다.
  const inputDateHandler = (event) => {
    setObjectState((prev) => ({ ...prev, today: event.target.value }));
  };

  // 9. '라디오 버튼'의 선택이 변경될 때 호출되는 핸들러 함수입니다.
  const inputRadioHandler = (event) => {
    setObjectState((prev) => ({ ...prev, radio: event.target.value }));
  };

  // 10. '체크박스'의 선택이 변경될 때 호출되는 핸들러 함수입니다.
  const inputCheckboxHandler = (event) => {
    // 11. 이벤트가 발생한 체크박스의 `value`와 `checked` 상태를 가져옵니다.
    const { value, checked } = event.target;
    setObjectState((prev) => {
      // 12. 체크박스가 선택되었는지(`checked`) 여부에 따라 분기합니다.
      const newCheckboxes = checked
        ? [...prev.checkbox, value] // 선택되었다면, 기존 배열에 새로운 값을 추가합니다.
        : prev.checkbox.filter((v) => v !== value); // 선택 해제되었다면, 기존 배열에서 해당 값을 제거합니다.
      // 13. 이전 상태를 복사한 후, `checkbox` 속성을 새로 계산된 배열로 업데이트합니다.
      return { ...prev, checkbox: newCheckboxes };
    });
  };

  // 14. '색상' 입력 필드의 값이 변경될 때 호출되는 핸들러 함수입니다.
  const inputColorHandler = (event) => {
    setObjectState((prev) => ({ ...prev, color: event.target.value }));
  };

  // 15. 폼 제출 버튼을 클릭했을 때 호출되는 핸들러 함수입니다.
  const buttonSubmitHandler = (event) => {
    // 16. 폼 제출 시 페이지가 새로고침되는 기본 동작을 막습니다.
    event.preventDefault();
    // 17. props로 받은 `getPaymentFormData` 함수를 호출하여, 현재 폼의 상태(`objectState`)를 부모 컴포넌트로 전달합니다.
    // 이를 "상태 끌어올리기(Lifting State Up)"라고 합니다.
    getPaymentFormData(objectState);
    // 18. 폼 제출 후, 모든 입력 필드를 초기값으로 리셋합니다.
    setObjectState({
      name: "",
      price: 0,
      today: "",
      radio: "",
      checkbox: [],
      color: "#000000",
    });
  };

  // 19. 컴포넌트가 화면에 렌더링할 JSX를 반환합니다.
  return (
    <div className="new-payment">
      {/* 20. form 태그의 `onSubmit` 이벤트에 제출 핸들러를 연결합니다. */}
      <form onSubmit={buttonSubmitHandler}>
        <div className="new-payment__controls">
          <div className="new-payment__control">
            <label>이름</label>
            {/* 21. 각 input은 "제어 컴포넌트(Controlled Component)"입니다.
                `value`는 React의 state와 연결되고, `onChange`는 state를 업데이트하는 함수와 연결됩니다. */}
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

          <div className="new-payment__control">
            <label>Radio</label>
            <br />
            {/* 22. 라디오 버튼들은 `name` 속성을 같게 하여 그룹으로 묶습니다.
                `checked` 속성을 통해 현재 state 값과 일치하는 버튼이 선택되도록 합니다. */}
            <label>
              <input
                type="radio"
                name="payMethod"
                value="card"
                checked={objectState.radio === "card"}
                onChange={inputRadioHandler}
              />
              카드
            </label>
            <label>
              <input
                type="radio"
                name="payMethod"
                value="cash"
                checked={objectState.radio === "cash"}
                onChange={inputRadioHandler}
              />
              현금
            </label>
          </div>

          <div className="new-payment__control">
            <label>Checkbox</label>
            <br />
            {/* 23. 체크박스는 `checked` 속성을 통해 현재 state 배열에 해당 값이 포함되어 있는지 여부로 선택 상태를 결정합니다. */}
            <label>
              <input
                type="checkbox"
                value="식비"
                checked={objectState.checkbox.includes("식비")}
                onChange={inputCheckboxHandler}
              />
              식비
            </label>
            <label>
              <input
                type="checkbox"
                value="교통"
                checked={objectState.checkbox.includes("교통")}
                onChange={inputCheckboxHandler}
              />
              교통
            </label>
            <label>
              <input
                type="checkbox"
                value="문화"
                checked={objectState.checkbox.includes("문화")}
                onChange={inputCheckboxHandler}
              />
              문화
            </label>
          </div>

          <div className="new-payment__control">
            <label>Color</label>
            <input
              type="color"
              value={objectState.color}
              onChange={inputColorHandler}
            />
          </div>
        </div>

        <div className="new-payment__actions">
          <button type="submit">결제 추가</button>
        </div>
      </form>
    </div>
  );
};

// 24. PaymentForm 컴포넌트를 다른 파일에서 import하여 사용할 수 있도록 내보냅니다.
export default PaymentForm;
