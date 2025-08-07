// 1. React의 `useState` 훅을 가져옵니다. `useState`는 함수형 컴포넌트에서 상태(state)를 관리할 수 있게 해줍니다.
import { useState } from "react";
// 2. App 컴포넌트의 스타일을 정의한 CSS 파일을 가져옵니다.
import "./App.css";
// 3. 자식 컴포넌트인 `PaymentForm`을 가져옵니다. 이 컴포넌트는 새로운 지출 항목을 입력받는 폼입니다.
import PaymentForm from "./components/PaymentForm/PaymentForm";
// 4. 자식 컴포넌트인 `Expenses`를 가져옵니다. 이 컴포넌트는 지출 항목 목록을 화면에 표시합니다.
import Expenses from "./components/Payments/Expenses";

// 5. App 컴포넌트를 정의합니다. 이 컴포넌트는 애플리케이션의 최상위 컴포넌트 역할을 합니다.
function App() {
  // 6. `useState`를 사용하여 `expenses`라는 상태 변수를 선언합니다.
  // `expenses`는 지출 항목들의 배열을 저장하고, `setExpenses`는 이 배열을 업데이트하는 함수입니다.
  // 초기값으로 하나의 지출 항목 객체를 가진 배열을 설정합니다.
  const [expenses, setExpenses] = useState([
    {
      id: "e1",
      title: "수건",
      amount: 12.33,
      date: new Date(2025, 8, 14), // JavaScript에서 월은 0부터 시작하므로 8은 9월을 의미합니다.
      radio: "cash",
      checkbox: "식비",
      color: "#f1f1f1",
    },
  ]);

  // 7. `PaymentForm` 컴포넌트에서 새로운 지출 데이터가 생성되었을 때 호출될 함수입니다.
  // 자식 컴포넌트로부터 `data` 객체를 인자로 받습니다.
  const getPaymentFormData = (data) => {
    // 8. 디버깅을 위해 전달받은 데이터와 현재 지출 목록을 콘솔에 출력합니다.
    console.log("data", data);
    console.log("expenses", expenses);
    // 9. `setExpenses` 함수를 호출하여 상태를 업데이트합니다.
    // 새로운 지출 항목 객체를 생성하고, 기존 `expenses` 배열의 맨 앞에 추가합니다. (스프레드 연산자 `...` 사용)
    // id는 중복되지 않도록 `Math.random()`을 사용해 임의의 값으로 설정합니다. (더 나은 방법은 UUID 라이브러리 사용)
    setExpenses([
      {
        id: Math.random().toString(),
        title: data.name,
        amount: data.price,
        date: new Date(data.today),
        radio: data.radio,
        checkbox: data.checkbox,
        color: data.color,
      },
      ...expenses, // 기존 배열의 모든 항목을 새 배열에 복사
    ]);
  };

  // 10. `Expenses` 컴포넌트에서 특정 항목을 삭제할 때 호출될 함수입니다.
  // 삭제할 항목의 배열 인덱스(`index`)를 인자로 받습니다.
  const deleteExpenseItem = (index) => {
    // 11. 디버깅을 위해 삭제할 항목의 인덱스를 콘솔에 출력합니다.
    console.log(index);

    // 삭제하는 기능에는 여러 방법이 있습니다.

    // 방법 1: `filter` 사용 (주석 처리됨)
    // `filter`는 특정 조건을 만족하는 요소만 모아 새로운 배열을 만듭니다.
    // 여기서는 삭제할 id와 다른 id를 가진 항목들만 남겨 새 배열을 만듭니다.
    // 이 방법은 `id`를 인자로 받아야 더 직관적입니다.
    // const newFilteredArray = expenses.filter((item) => item.id !== id);
    // setExpenses(newFilteredArray);

    // 방법 2: `slice` 사용 (현재 사용 중인 방법)
    // `slice`는 배열의 특정 부분을 잘라내어 새로운 배열을 만듭니다.
    // 삭제할 인덱스를 기준으로 배열을 두 부분으로 나눕니다.
    // `beforeArray`: 0번 인덱스부터 삭제할 인덱스 전까지
    const beforeArray = expenses.slice(0, index);
    // `afterArray`: 삭제할 인덱스 다음부터 배열의 끝까지
    const afterArray = expenses.slice(index + 1);
    // 12. 두 배열을 합쳐서(스프레드 연산자 사용) 삭제할 항목이 제외된 새로운 배열을 만들고, 상태를 업데이트합니다.
    setExpenses([...beforeArray, ...afterArray]);
  };

  // 13. App 컴포넌트가 화면에 렌더링할 JSX를 반환합니다.
  return (
    // 14. `<>`는 React Fragment로, 불필요한 div 태그 없이 여러 요소를 그룹화할 때 사용합니다.
    <>
      {/* 15. `PaymentForm` 컴포넌트를 렌더링합니다.
          `getPaymentFormData` 함수를 `getPaymentFormData`라는 이름의 prop으로 전달합니다.
          이를 통해 자식 컴포넌트에서 부모 컴포넌트의 상태를 변경할 수 있습니다. */}
      <PaymentForm getPaymentFormData={getPaymentFormData} />
      {/* 16. `Expenses` 컴포넌트를 렌더링합니다.
          `expenses` 배열을 `items`라는 prop으로 전달하고,
          `deleteExpenseItem` 함수를 `deleteExpenseItem` prop으로 전달합니다. */}
      <Expenses items={expenses} deleteExpenseItem={deleteExpenseItem} />
    </>
  );
}

// 17. App 컴포넌트를 다른 파일에서 import하여 사용할 수 있도록 내보냅니다.
export default App;
