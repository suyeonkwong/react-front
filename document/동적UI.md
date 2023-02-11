```java
import logo from './logo.svg';
import './App.css';
import {useState} from "react";

function App() {

    let post = '강남 우동 맛집';
    let [logo,setLogo] = useState('ReactBlog');
    let [글제목, 글제목변경] = useState(['남자 코트 추천', '구두', '신발']);
    let [따봉, 따봉변경] = useState(0);

    let [modal, setModal] = useState(false);

    function 함수() {
        console.log(1);
    }

  return (
    <div className="App">

        <div className="list">
            <h4 onClick={() => { modal == true ?  setModal(false) : setModal(true)}}>{ 글제목[2] }</h4>
            <p>2월 17일 발행</p>
        </div>

        {
            modal == true ? <Modal></Modal> : null  --> {} 자바스크립트 작성, 3항 연산자. modal이 true면 
								Modal컴포넌트가 보여짐. 아니면 안보이게 null

        }

    </div>
  );
}

function Modal() {
    return (
        <>
            <div className="modal">
                <h4>제목</h4>
                <p>날짜</p>
                <p>상세내용</p>
            </div>
        </>
    )
}

export default App;
```
