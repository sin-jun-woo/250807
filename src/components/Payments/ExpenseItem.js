// /Users/shin-junwoo/슈퍼코딩/코드 설명/250807/src/components/Payments/ExpenseItem.js

// 1. React 라이브러리를 가져옵니다. JSX 문법을 사용하기 위해 필수적입니다.
import React from "react";

// 2. 이 컴포넌트를 구성하는 다른 자식 컴포넌트들을 가져옵니다.
import ExpenseDate from "./ExpenseDate"; // 날짜를 표시하는 컴포넌트
import Card from "../UI/Card"; // UI의 일관된 스타일(그림자, 둥근 모서리 등)을 제공하는 래퍼 컴포넌트
import "./ExpenseItem.css"; // 이 컴포넌트에만 적용될 스타일시트

// 3. 'ExpenseItem'이라는 이름의 함수형 컴포넌트를 정의합니다.
// 부모 컴포넌트(Expenses.js)로부터 'props' 객체를 통해 데이터를 전달받습니다.
// props에는 title, amount, date, index, deleteExpenseItem 등이 포함됩니다.
const ExpenseItem = (props) => {
  // 4. 컴포넌트가 렌더링할 JSX를 반환합니다.
  return (
    // 5. Card 컴포넌트를 사용하여 전체 항목을 감쌉니다.
    // 'expense-item' 클래스를 전달하여 이 항목에 맞는 스타일을 적용합니다.
    <Card className="expense-item">
      {/* 6. ExpenseDate 컴포넌트를 렌더링하고, 부모로부터 받은 'date' prop을 전달합니다. */}
      <ExpenseDate date={props.date} />

      {/* 7. 지출 항목의 제목, 금액, 삭제 버튼을 담는 컨테이너 div 입니다. */}
      <div className="expense-item__description">
        {/* 8. 부모로부터 받은 'title' prop을 h2 태그 안에 표시합니다. */}
        <h2>{props.title}</h2>
        {/* 9. 부모로부터 받은 'amount' prop을 div 태그 안에 달러($) 기호와 함께 표시합니다. */}
        <div className="expense-item__price">${props.amount}</div>
        {/* 10. '삭제하기' 버튼입니다. */}
        {/* onClick 이벤트가 발생하면, 부모로부터 받은 'deleteExpenseItem' 함수를 호출합니다. */}
        {/* 이때, 이 항목의 배열 인덱스(props.index)를 인자로 전달하여 어떤 항목을 삭제할지 알려줍니다. */}
        <button onClick={() => props.deleteExpenseItem(props.index)}>
          삭제하기
        </button>
      </div>
    </Card>
  );
};

// 11. 다른 파일에서 이 ExpenseItem 컴포넌트를 사용할 수 있도록 내보냅니다.
export default ExpenseItem;
