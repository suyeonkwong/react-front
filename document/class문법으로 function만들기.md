```java
class Modal2 extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            name : 'kim',
            age : 20
        }
    }
    render() {
        return(
            <div>안녕 {this.state.age}</div>
        )
    }
}

옛날 문법이긴 하나 봐도 당황하면 안됨. 근데 사용하면 'React' is not defined  no-undef 에러가 남.
```
