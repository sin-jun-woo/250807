// 1. 이미지 파일들을 컴포넌트로 가져옵니다(import).
// Create React App과 같은 번들러는 이 이미지들을 처리하여
// 웹 애플리케이션에서 사용할 수 있는 고유한 경로로 변환해줍니다.
import AlexaImage from "./images/alexa.png";
import SiriImage from "./images/siri.png";

// 2. 가져온 이미지 변수들이 어떤 값을 가지고 있는지 콘솔에 출력하여 확인합니다.
// 개발자 도구 콘솔에서 이 로그를 보면, 이미지의 실제 경로(예: /static/media/alexa.12345.png)를 알 수 있습니다.
console.log("AlexaImage", AlexaImage);
console.log("SiriImage", SiriImage);

// 3. 'App'이라는 이름의 리액트 함수 컴포넌트를 정의합니다.
function App() {
  // 4. 이 컴포넌트가 화면에 렌더링할 JSX(JavaScript XML)를 반환합니다.
  return (
    // 5. 모든 JSX 요소는 하나의 부모 요소로 감싸져야 합니다. 여기서는 <div>를 사용합니다.
    <div>
      <p>hello image</p>

      {/* 6. 첫 번째 이미지 표시 */}
      {/* src 속성에 import한 AlexaImage 변수를 전달하여 이미지를 렌더링합니다. */}
      {/* alt 속성은 이미지가 로드되지 않았을 때 표시될 대체 텍스트입니다. (웹 접근성에 중요) */}
      {/* width와 height 속성으로 이미지 크기를 직접 지정합니다. */}
      <img src={AlexaImage} alt="alexa" width={500} height={500} />

      {/* 7. 두 번째 이미지 표시 */}
      {/* style 속성을 사용하여 이미지 크기를 지정하는 다른 방법입니다. */}
      {/* JSX에서 style은 {{ key: 'value' }} 형태의 자바스크립트 객체로 전달해야 합니다. */}
      <img src={SiriImage} alt="siri" style={{ width: 500, height: 500 }} />
    </div>
  );
}

// 8. 다른 파일에서 이 App 컴포넌트를 사용할 수 있도록 내보냅니다(export).
// 이렇게 해야 index.js 같은 파일에서 <App /> 형태로 사용할 수 있습니다.
export default App;
