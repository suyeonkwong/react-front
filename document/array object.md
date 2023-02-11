```java
import './App.css';
import {useState} from "react";

function App() {

    let post = '강남 우동 맛집';
    let [logo,setLogo] = useState('ReactBlog');
    let [글제목, 글제목변경] = useState(['남자 코트 추천', '구두', '신발']);
    let [따봉, 따봉변경] = useState(0);

    function 함수() {
        console.log(1);
    }

  return (
    <div className="App">

        <div className="black-nav">
            <h4>{ logo }</h4>
        </div>

        <button onClick={() => {

            let copy = [...글제목];     ----> state가 array/object면shallow copy만들어서 수정해야함. reference type으로
            copy[0] = '여자 코트 추천'
            글제목변경(copy);
        }}>글 수정</button>

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

버튼을 클리하면 제목이 바뀌게 했는데 원본데이터가 나중에 필요할 수도 있으니까 복사본을 만들어서 0번째 인덱스를 변경하도록 하면 변경이 안됨. 따라서 […]문법을 써서 화살표를 벗겨내고 복사 그 자체를 만들어내서 그것을 변경해야함.
