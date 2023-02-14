import {useParams} from "react-router-dom";
import styled from "styled-components";

let YellowBtn = styled.button`
background : ${props => props.bg};
color : ${ props => props.bg == 'blue' ? 'white' : 'black'};
padding : 10px;
`

let Box = styled.div`
background : grey;
padding : 20px'
`
function Detail(props) {
    let {id} = useParams();

    return (
        <div className="container">

            <YellowBtn bg="blue">버튼</YellowBtn>
            <YellowBtn bg="orange">버튼</YellowBtn>

            <div className="row">
                <div className="col-md-6">
                    <img src={props.fruit[id].src} width="100%"/>
                </div>
                <div className="col-md-6 mt-4">
                    <h4 className="pt-5">{props.fruit[id].title}</h4>
                    <p>{props.fruit[id].content}</p>
                    <p>{props.fruit[id].price}원</p>
                    <button className="btn btn-danger">주문하기</button>
                </div>
            </div>
        </div>
    )
}

export default Detail;
