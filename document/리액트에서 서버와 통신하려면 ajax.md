- 서버에게 데이터를 요청할 때 정확한 규격에 맞춰서 서버에 요청을 해야 서버가 데이터를 반환해준다.
    1. 방법(GET, POST)
    2. 어떤자료(URL)

```
<button onClick={() => {
                    axios.get('https://codingapple1.github.io/shop/data2.json')
                        .then((data) => {
                            console.log(data)})
                        .catch(() => {
                            console.log('실패함')
                        })
                }}>버튼</button>
```
