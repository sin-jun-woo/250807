// /Users/shin-junwoo/슈퍼코딩/코드 설명/250807/src/components/Payments/Expenses.js

// 1. React 라이브러리와 필요한 자식/UI 컴포넌트들을 가져옵니다.
import React from "react";
import ExpenseItem from "./ExpenseItem"; // 개별 지출 항목을 표시하는 컴포넌트
import Card from "../UI/Card"; // 스타일링을 위한 래퍼(wrapper) 컴포넌트
import "./Expenses.css"; // 이 컴포넌트에 적용될 CSS

// 2. 'Expenses' 함수형 컴포넌트를 정의합니다.
// 부모 컴포넌트(App.js)로부터 props를 통해 데이터를 전달받습니다.
// props 객체에는 'items' 배열과 'deleteExpenseItem' 함수가 포함됩니다.
const Expenses = (props) => {
  return (
    // 3. Card 컴포넌트를 사용하여 전체 목록을 감싸고 'expenses' 클래스를 적용해 스타일링합니다.
    <Card className="expenses">
      {/* 4. 부모로부터 받은 'items' 배열을 map() 메서드를 사용해 순회합니다. */}
      {/* 배열의 각 'item' 요소에 대해 'ExpenseItem' 컴포넌트를 하나씩 생성합니다. */}
      {props.items.map((item, index) => (
        // 5. ExpenseItem 컴포넌트를 렌더링하고 필요한 데이터와 함수를 props로 전달합니다.
        <ExpenseItem
          // 'key'는 React가 리스트의 각 항목을 식별하기 위한 필수 prop입니다.
          // 각 항목의 고유한 'id'를 사용하는 것이 가장 좋습니다.
          key={item.id}
          // 'id'와 'index'를 전달합니다. 현재는 index를 사용해 삭제 로직을 구현하고 있습니다.
          id={item.id}
          index={index}
          // 지출 항목의 제목, 금액, 날짜 데이터를 전달합니다.
          title={item.title}
          amount={item.amount}
          date={item.date}
          // 부모로부터 받은 삭제 함수를 그대로 자식에게 다시 전달합니다 (Prop Drilling).
          deleteExpenseItem={props.deleteExpenseItem}
        />
      ))}
    </Card>
  );
};

export default Expenses;
