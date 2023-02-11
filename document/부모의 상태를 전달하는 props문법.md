부모 → 자식 state전송하려면 props문법 쓰면 된다. App에서 자식만 되고 자식에서 부모로 자식끼리는 불가능하다.

```java
function App() {

    let [글제목, 글제목변경] = useState(['남자 코트 추천', '구두', '신발']);
    let [따봉, 따봉변경] = useState([0, 0, 0]);

    let [modal, setModal] = useState(false);

  return (
    <div className="App">

        {
            글제목.map(function(a, i) {
                return (
                    <div className="list" key={i}>
                        <h4 onClick={() => {setModal(true)}}>{ 글제목[i] } <span onClick={ () => {
                            let copy = [...따봉];
                            copy[i] = copy[i] + 1;
                            따봉변경(copy)
                        }}> 👍 </span> {따봉[i]} </h4>
                        <p>2월 17일 발행</p>
                    </div>
                )
            })
        }

        {
            modal == true ? <Modal color={'yellow'} 글제목={글제목} /> : null
        }

    </div>
  );
}

function Modal(props) { ---> 부모 App에서 자식 Modal로 props문법
    return (
        <>
            <div className="modal" style={{background : props.color}}>
                <h4>props.글제목[0]</h4>
                <p>날짜</p>
                <p>상세내용</p>
            </div>
        </>
    )
}
```

```java
import logo from './logo.svg';
import './App.css';
import {useState} from "react";

function App() {

    let [글제목, 글제목변경] = useState(['남자 코트 추천', '구두', '신발']);
    let [따봉, 따봉변경] = useState([0, 0, 0]);

    let [modal, setModal] = useState(false);
    let [title, setTitle] = useState(0);

  return (
    <div className="App">

        
        {
            글제목.map(function(a, i) {
                return (
                    <div className="list" key={i}>

												클릭 할 때 setTitle속성을 변경하면 
                        <h4 onClick={() => {setModal(true); setTitle(i)}}> { 글제목[i] } <span onClick={ () => {
                            let copy = [...따봉]; 
                            copy[i] = copy[i] + 1;
                            따봉변경(copy)
                        }}> 👍 </span> {따봉[i]} </h4>
                        <p>2월 17일 발행</p>
                    </div>
                )
            })
        }

        {
						모달 창이 true로 바뀌고 title을 모달이 전달 받음
            modal == true ? <Modal 글제목변경={글제목변경} color={'yellow'} 글제목={글제목} title={title}/> : null
        }

    </div>
  );
}

function Modal(props) {

    return (
        <>
            <div className="modal" style={{background : props.color}}>
                <h4>{props.글제목[props.title]}</h4>
                <p>날짜</p>
                <p>상세내용</p>
                <button onClick={() => {
                    props.글제목변경(['여자 코드 추천', '구두', '신발'])
                }}>글수정</button>
            </div>
        </>
    )
}

export default App;
```
