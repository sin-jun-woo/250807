// 1. React 라이브러리를 가져옵니다. JSX 문법을 사용하기 위해 필수적입니다.
import React from "react";

// 2. 날짜를 표시하는 'ExpenseDate' 자식 컴포넌트를 가져옵니다.
import ExpenseDate from "./ExpenseDate";
// 3. 공통 UI 스타일을 제공하는 'Card' 래퍼 컴포넌트를 가져옵니다.
import Card from "../UI/Card";
// 4. 이 컴포넌트에 적용할 CSS 파일을 가져옵니다.
import "./ExpenseItem.css";

// 5. 'ExpenseItem' 함수형 컴포넌트를 정의합니다.
// 이 컴포넌트는 개별 지출 항목 하나를 표시하는 역할을 합니다.
// 부모 컴포넌트(Expenses.js)로부터 props를 통해 데이터를 전달받습니다.
const ExpenseItem = (props) => {
  // 6. 컴포넌트가 화면에 렌더링할 JSX를 반환합니다.
  return (
    // 7. 'Card' 컴포넌트를 래퍼로 사용하여 공통적인 카드 스타일(그림자, 둥근 모서리 등)을 적용합니다.
    // 'expense-item' 클래스를 추가로 전달하여 이 컴포넌트만의 스타일을 지정합니다.
    <Card className="expense-item">
      {/* 8. 날짜 표시를 'ExpenseDate' 컴포넌트에 위임합니다.
          부모로부터 받은 'date' prop을 그대로 전달합니다. */}
      <ExpenseDate date={props.date} />
      {/* 9. 지출 항목의 상세 내용을 담는 컨테이너입니다. */}
      <div className="expense-item__description">
        {/* 10. 'props.title'을 h2 태그로 렌더링하여 지출 항목의 제목을 표시합니다. */}
        <h2>{props.title}</h2>
        {/* 11. 'props.amount'를 div 태그로 렌더링하여 지출 금액을 표시합니다. */}
        <div className="expense-item__price">${props.amount}</div>
        {/* 12. '삭제하기' 버튼입니다. */}
        {/* 🚨 개선 제안: 현재 삭제 로직은 배열의 'index'를 사용하고 있습니다.
            이는 목록이 정렬되거나 필터링될 때 예기치 않은 항목을 삭제하는 버그를 유발할 수 있습니다.
            'index' 대신 고유한 'id'를 사용하는 것이 훨씬 안정적입니다.
            따라서 `onClick={() => props.deleteExpenseItem(props.id)}`로 변경하는 것을 권장합니다.
            이를 위해서는 부모 컴포넌트(App.js)의 삭제 함수도 id를 기준으로 동작하도록 수정해야 합니다. */}
        <button onClick={() => props.deleteExpenseItem(props.index)}>
          삭제하기
        </button>
        {/* 13. 추가적인 데이터(radio, checkbox, color)를 화면에 표시합니다.
            이 부분은 예제 데이터 구조에 따라 추가된 것으로 보입니다. */}
        <div className="expense-item__radio">{props.radio}</div>
        <div className="expense-item__checkbox">{props.checkbox}</div>
        <div className="expense-item__color">{props.color}</div>
      </div>
    </Card>
  );
};

// 14. 다른 파일에서 이 'ExpenseItem' 컴포넌트를 사용할 수 있도록 내보냅니다.
export default ExpenseItem;
