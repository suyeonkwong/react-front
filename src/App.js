import {useState} from "react";
import {Container, Nav, Navbar} from "react-bootstrap";
import './App.css';
import data from './data.js';
import {Routes, Route, Link, useParams} from "react-router-dom";
import Detail from './Detail.js'
import axios from "axios";

function App() {

    let [fruit, setFruit] = useState(data);

  return (
    <div className="App">

        <Navbar bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="#home">Navbar</Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#features">Features</Nav.Link>
                    <Nav.Link href="#pricing">Pricing</Nav.Link>
                </Nav>
            </Container>
        </Navbar>

        <Routes>
            <Route path="/" element={<div>

                <div className = "main-bg"></div>

                <div className="container">
                    <div className="row">
                        {
                            fruit.map(function(a, i) {
                                return (
                                    <Fruit fruit={fruit[i]}></Fruit>
                                )
                            })
                        }
                    </div>
                </div>
                <button onClick={() => {
                    axios.get('https://codingapple1.github.io/shop/data2.json')
                        .then((data) => {
                            let copy = [...fruit, ...data.data];
                            setFruit(copy);
                        })
                        .catch(() => {
                            console.log('실패함')
                        })
                }}>더보기</button>
            </div>}/>
            <Route path="/detail/:id" element={<Detail fruit={fruit}/>} />
        </Routes>

    </div>
  );
}

function Fruit(props) {
    return (
        <div className="col-md-4">
            <img src={process.env.PUBLIC_URL + props.fruit.src} width="80%"/>
            <h4>{props.fruit.title}</h4>
            <h4>{props.fruit.price}</h4>
        </div>
    )
}

export default App;
