import logo from './logo.svg';
import './App.css';
import {Container, Nav, Navbar} from "react-bootstrap";
import {useState} from "react";
import data from './data';
import { Routes, Route, Link} from "react-router-dom";

function App() {

    let [fruit] = useState(data)

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

        <Link to="/">홈</Link>
        <Link to="detail">상세</Link>

        <Routes>
            <Route path="/detail" element={<div>상세페이지</div>} />
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

            </div>}/>
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
