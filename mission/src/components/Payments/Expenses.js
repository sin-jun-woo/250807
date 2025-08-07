// 1. React 라이브러리를 가져옵니다. JSX 문법을 사용하기 위해 필수적입니다.
import React from "react";

// 2. 개별 지출 항목을 렌더링할 `ExpenseItem` 컴포넌트를 가져옵니다.
import ExpenseItem from "./ExpenseItem";
// 3. 공통 UI 스타일을 제공하는 `Card` 래퍼 컴포넌트를 가져옵니다.
import Card from "../UI/Card";
// 4. 이 컴포넌트에 적용할 CSS 파일을 가져옵니다.
import "./Expenses.css";

// 5. `Expenses` 함수형 컴포넌트를 정의합니다.
// 부모 컴포넌트(App.js)로부터 `props` 객체를 통해 데이터를 전달받습니다.
// `props.items`는 지출 항목 객체들의 배열이고, `props.deleteExpenseItem`은 항목 삭제 함수입니다.
const Expenses = (props) => {
  // 6. 컴포넌트가 화면에 렌더링할 JSX를 반환합니다.
  return (
    // 7. `Card` 컴포넌트로 전체 목록을 감싸고, 'expenses' 클래스를 전달하여 목록 전체에 대한 스타일을 적용합니다.
    <Card className="expenses">
      {/* 8. `props.items` 배열을 `map` 함수를 사용하여 순회합니다.
          배열의 각 `item`과 그 `index`에 대해 `ExpenseItem` 컴포넌트를 생성합니다. */}
      {props.items.map((item, index) => (
        <ExpenseItem
          // 9. `key` prop: React가 목록의 각 항목을 효율적으로 식별하고 업데이트하기 위해 사용하는 고유한 값입니다.
          // 각 항목의 고유 `id`를 사용하는 것이 가장 좋습니다.
          key={item.id}
          // 10. `ExpenseItem` 컴포넌트에 필요한 모든 데이터를 props로 전달합니다.
          id={item.id}
          // 🚨 개선 제안: 현재 삭제 로직은 `index`를 사용하고 있습니다.
          // 하지만 목록이 정렬/필터링될 경우 버그가 발생할 수 있으므로,
          // `id`를 사용하여 삭제하는 것이 더 안정적입니다.
          // App.js의 deleteExpenseItem 함수를 `id`를 받도록 수정하고,
          // ExpenseItem의 onClick에서 `props.deleteExpenseItem(item.id)`를 호출하도록 변경하는 것을 권장합니다.
          index={index}
          title={item.title}
          amount={item.amount}
          date={item.date}
          radio={item.radio}
          checkbox={item.checkbox}
          color={item.color}
          // 11. 부모로부터 받은 삭제 함수를 그대로 자식에게 전달합니다(prop drilling).
          deleteExpenseItem={props.deleteExpenseItem}
        />
      ))}
    </Card>
  );
};

// 12. 다른 파일에서 이 `Expenses` 컴포넌트를 사용할 수 있도록 내보냅니다.
export default Expenses;
