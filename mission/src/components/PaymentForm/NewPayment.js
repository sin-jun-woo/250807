// 1. React 라이브러리를 가져옵니다. JSX 문법을 사용하기 위해 필수입니다.
import React from "react";

// 2. 자식 컴포넌트인 PaymentForm을 가져옵니다.
// PaymentForm은 실제 데이터 입력 필드와 제출 로직을 포함하고 있습니다.
import PaymentForm from "./PaymentForm";
// 3. 이 컴포넌트와 관련된 스타일을 정의한 CSS 파일을 가져옵니다.
import "./NewPayment.css";

// 4. NewPayment 함수형 컴포넌트를 정의합니다.
// 이 컴포넌트는 PaymentForm을 감싸는 역할을 하며,
// 폼을 페이지의 다른 부분과 구분하는 컨테이너를 제공합니다.
const NewPayment = () => {
  // 5. 컴포넌트가 화면에 렌더링할 내용을 반환합니다.
  return (
    // 6. 'new-payment'라는 CSS 클래스를 가진 div 요소입니다.
    // NewPayment.css (또는 PaymentForm.css) 파일에 정의된 스타일에 따라
    // 배경색, 여백, 그림자 등의 디자인이 적용됩니다.
    <div className="new-payment">
      {/* 7. 내부에 PaymentForm 컴포넌트를 렌더링합니다. */}
      {/* 🚨 개선 제안: PaymentForm이 필요로 하는 props를 전달해야 합니다. (아래 설명 참조) */}
      <PaymentForm />
    </div>
  );
};

// 8. NewPayment 컴포넌트를 다른 파일에서 import하여 사용할 수 있도록 내보냅니다.
export default NewPayment;
