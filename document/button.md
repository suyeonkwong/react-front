```java
import './App.css';
import {useState} from "react";

function App() {

    let post = '강남 우동 맛집';
    let [logo,setLogo] = useState('ReactBlog');
    let [글제목, b] = useState(['남자 코트 추천', '구두', '신발']);
    let [따봉, 따봉변경] = useState(0);

    function 함수() {
        console.log(1);
    }

  return (
    <div className="App">

        <div className="black-nav">
            <h4>{ logo }</h4>
        </div>

        <div className="list">
            <h4>{ 글제목[0] } <span onClick={ () => { 따봉변경(따봉+1) }}> 👍 </span> {따봉} </h4>
            <p>2월 17일 발행</p>
        </div>

        <div className="list">
            <h4>{ 글제목[1] }</h4>
            <p>2월 17일 발행</p>
        </div>

        <div className="list">
            <h4>{ 글제목[2] }</h4>
            <p>2월 17일 발행</p>
        </div>

    </div>
  );
}

export default App;
```

onClick이라는 이벤트 핸들러

state 변경하는 법.

state변경 함수 , 새로운 state

state변경하면 html자동으로 랜더링 됨.
