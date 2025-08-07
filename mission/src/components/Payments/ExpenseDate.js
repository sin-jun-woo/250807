// 1. React 라이브러리를 가져옵니다. JSX 문법을 사용하기 위해 필수적입니다.
import React from "react";

// 2. 이 컴포넌트에 적용할 CSS 파일을 가져옵니다.
import "./ExpenseDate.css";

// 3. 'ExpenseDate'라는 이름의 함수형 컴포넌트를 정의합니다.
// 부모 컴포넌트(ExpenseItem.js)로부터 'props'를 통해 데이터를 전달받습니다.
// 여기서는 props.date에 JavaScript의 Date 객체가 담겨 올 것으로 예상됩니다.
const ExpenseDate = (props) => {
  // 4. toLocaleString() 메서드를 사용하여 날짜를 지역화된 문자열로 변환합니다.
  // 'ko-KR' 로케일을 기준으로 '월'을 긴 형식(예: "9월")으로 가져옵니다.
  const month = props.date.toLocaleString("ko-KR", { month: "long" });
  // 'ko-KR' 로케일을 기준으로 '일'을 2자리 숫자(예: "01", "14")로 가져옵니다.
  const day = props.date.toLocaleString("ko-KR", { day: "2-digit" });
  // getFullYear() 메서드를 사용하여 4자리 연도(예: 2025)를 가져옵니다.
  const year = props.date.getFullYear();

  // 5. 컴포넌트가 렌더링할 JSX를 반환합니다.
  return (
    // 6. 전체 날짜 요소를 감싸는 div입니다. 'expense-date' 클래스를 적용하여 스타일링합니다.
    <div className="expense-date">
      {/* 7. 위에서 형식화한 '월', '년', '일' 변수를 각각의 div에 넣어 화면에 표시합니다. */}
      <div className="expense-date__month">{month}</div>
      <div className="expense-date__year">{year}</div>
      <div className="expense-date__day">{day}</div>
    </div>
  );
};

// 8. 다른 파일에서 이 ExpenseDate 컴포넌트를 사용할 수 있도록 내보냅니다.
export default ExpenseDate;
