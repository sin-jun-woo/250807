// 1. React 라이브러리를 가져옵니다. JSX 문법을 사용하기 위해 필수적입니다.
import React from "react";

// 2. Card 컴포넌트에 적용할 CSS 파일을 가져옵니다.
// 이 CSS 파일에는 'card' 클래스에 대한 스타일(예: 배경색, 테두리, 그림자 등)이 정의되어 있을 것입니다.
import "./Card.css";

// 3. 'Card'라는 이름의 함수형 컴포넌트를 정의합니다.
// 'props'는 부모 컴포넌트로부터 전달받는 속성들을 담고 있는 객체입니다.
const Card = (props) => {
  // 4. CSS 클래스를 동적으로 조합합니다.
  // 기본적으로 'card'라는 클래스를 적용하고,
  // 이 Card 컴포넌트를 사용하는 부모로부터 'className'이라는 prop으로 추가적인 클래스명을 받으면
  // 그것도 함께 문자열로 합쳐줍니다.
  // 예: <Card className="expense-item"> 이라고 사용하면, classes 변수는 "card expense-item"이 됩니다.
  const classes = "card " + props.className;

  // 5. JSX를 반환하여 화면에 렌더링합니다.
  // <div className={classes}>: 위에서 조합한 클래스 이름을 div에 적용합니다.
  // {props.children}: 이 부분이 이 컴포넌트의 핵심입니다. 'children'은 React가 제공하는 특별한 prop으로,
  // <Card>...</Card> 태그 사이에 있는 모든 자식 요소들을 가리킵니다.
  // 이 코드를 통해 Card 컴포넌트가 감싸고 있는 내용물이 이 div 안에 그대로 렌더링됩니다.
  return <div className={classes}>{props.children}</div>;
};

// 6. 다른 파일에서 Card 컴포넌트를 import하여 사용할 수 있도록 내보냅니다.
export default Card;
