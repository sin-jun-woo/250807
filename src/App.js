// /Users/shin-junwoo/슈퍼코딩/코드 설명/250807/src/App.js

// 1. 리액트의 `useState` 훅과 필요한 자식 컴포넌트들을 가져옵니다.
// - useState: 컴포넌트 내에서 상태(state)를 만들고 관리할 수 있게 해주는 함수입니다.
// - PaymentForm: 새로운 지출 내역을 입력받는 폼 컴포넌트입니다.
// - Expenses: 전체 지출 내역 목록을 화면에 보여주는 컴포넌트입니다.
import { useState } from "react";
import "./App.css";
import PaymentForm from "./components/PaymentForm/PaymentForm";
import Expenses from "./components/Payments/Expenses";

// 2. App 컴포넌트는 이 애플리케이션의 최상위(root) 컴포넌트입니다.
// 모든 데이터(지출 내역)와 그 데이터를 조작하는 함수들이 이곳에 정의되어 있습니다.
function App() {
  // 3. `useState`를 사용하여 지출 내역 목록을 상태로 관리합니다.
  // - `expenses`: 현재 지출 내역 데이터가 저장되는 배열입니다.
  // - `setExpenses`: `expenses` 배열을 업데이트할 때 사용하는 함수입니다.
  // - 초기값으로 '수건'이라는 항목이 담긴 객체 배열을 설정했습니다.
  const [expenses, setExpenses] = useState([
    {
      id: "e1",
      title: "수건",
      amount: 12.33,
      date: new Date(2025, 8, 14), // JS에서 월은 0부터 시작하므로 8은 9월을 의미합니다.
    },
  ]);

  // 4. `PaymentForm` 자식 컴포넌트에서 새로운 지출 데이터가 생성되었을 때 호출될 함수입니다.
  // 이 함수는 `props`를 통해 자식에게 전달됩니다.
  const getPaymentFormData = (data) => {
    // `console.log`를 통해 자식에게서 받은 데이터(data)와 현재 상태(expenses)를 확인합니다.
    console.log("data", data);
    console.log("expenses", expenses);

    // `setExpenses` 함수를 호출하여 상태를 업데이트합니다.
    setExpenses([
      // 새로 추가할 지출 객체를 만듭니다.
      {
        // id는 `Math.random()`을 사용해 임의의 숫자로 생성합니다.
        id: Math.random().toString(),
        title: data.name, // 자식에게서 받은 이름
        amount: data.price, // 자식에게서 받은 가격
        date: new Date(data.today), // 자식에게서 받은 날짜
      },
      // 스프레드 문법(...)을 사용해 기존 `expenses` 배열의 모든 항목을
      // 새 배열에 복사하여 뒤에 붙여넣습니다.
      // 결과적으로 새 항목이 배열의 맨 앞에 추가됩니다.
      ...expenses,
    ]);
  };

  // 5. 특정 지출 항목을 삭제하기 위해 호출될 함수입니다.
  // `Expenses` 컴포넌트를 통해 각 항목에 전달되며, 삭제할 항목의 `index`(배열 순서)를 인자로 받습니다.
  const deleteExpenseItem = (index) => {
    // 전달받은 index 값을 콘솔에 출력하여 확인합니다.
    console.log(index);

    // 주석으로 다른 삭제 방법(filter)이 고려되었음을 보여줍니다.
    // 1. filter: id 값을 기준으로 삭제하는 방법 (현재 사용되지 않음)
    // const newFilteredArray = expenses.filter((item) => item.id !== id);
    // setExpenses(newFilteredArray);

    // 현재 사용 중인 삭제 방법입니다.
    // 2. slice: 배열의 index를 기준으로 삭제하는 방법
    // [0, 1, 2, 3, ... , index, index + 1, ..., n - 1]
    // [0, 1, 2, 3, ... , index - 1, index + 1, ..., n-1]
    // [0, 1, 2, ... , index] [index + 1, ..., n-1]
    // `slice(startIndex, endIndex)`는 원본 배열을 변경하지 않고 새로운 배열을 반환합니다.
    // 삭제할 index를 기준으로 그 앞부분과 뒷부분을 각각 잘라내어 두 개의 새 배열을 만듭니다.
    const beforeArray = expenses.slice(0, index); // 0번부터 삭제할 index 직전까지
    const afterArray = expenses.slice(index + 1); // 삭제할 index 다음부터 끝까지

    // 두 배열을 스프레드 문법으로 합쳐서 새로운 배열을 만듭니다.
    // 결과적으로 `index`에 해당하는 항목만 제외된 새 배열이 생성됩니다.
    setExpenses([...beforeArray, ...afterArray]);
  };

  // 6. 화면에 렌더링할 JSX(UI 구조)를 반환합니다.
  return (
    // `<>`는 React Fragment로, 불필요한 div 태그 없이 여러 컴포넌트를 묶어줍니다.
    <>
      {/* PaymentForm 컴포넌트를 렌더링합니다.
          - `getPaymentFormData` 라는 이름의 prop으로 위에서 정의한 함수를 전달합니다.
            자식 컴포넌트는 이 prop을 호출하여 부모에게 데이터를 보낼 수 있습니다. */}
      <PaymentForm getPaymentFormData={getPaymentFormData} />

      {/* Expenses 컴포넌트를 렌더링합니다.
          - `items` prop으로 현재 지출 내역 상태(`expenses` 배열)를 전달합니다.
          - `deleteExpenseItem` prop으로 위에서 정의한 삭제 함수를 전달합니다. */}
      <Expenses items={expenses} deleteExpenseItem={deleteExpenseItem} />
    </>
  );
}

// 7. App 컴포넌트를 다른 파일에서 `import`하여 사용할 수 있도록 내보냅니다.
export default App;
