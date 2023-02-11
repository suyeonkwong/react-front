return안에 문장을 다 끝내야함.

자료를 잠깐 저장할 땐 변수. let, const, var 도 되지만 state써도 됨.

Destructuring 문법

```java
let num = [1, 2];
    
let a = num[0];
let c = num[1];
```

왜쓰냐면 state쓰면 html전체가 자동으로 재 랜덩링 됨.

```java
function App() {

    let post = '강남 우동 맛집';
    let [글제목, b] = useState('남자 코트 추천');
    let [logo,setLogo] = useState('ReactBlog');

  return (
    <div className="App">
        <div className="black-nav">
            <h4>{ logo }</h4>
        </div>
        <div className="list">
            <h4>{ 글제목 }</h4>
            <p>2월 17일 발행</p>
        </div>
    </div>
  );
}
```

인덱싱 해도 됨.

```java
function App() {

    let post = '강남 우동 맛집';
    let [logo,setLogo] = useState('ReactBlog');
    let [글제목, b] = useState(['남자 코트 추천', '구두', '신발']);

  return (
    <div className="App">

        <div className="black-nav">
            <h4>{ logo }</h4>
        </div>

        <div className="list">
            <h4>{ 글제목[0] }</h4>
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
```
