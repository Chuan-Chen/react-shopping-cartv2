import styled from "styled-components"

const Title = styled.div`
    font-size: 20px;
`
const Price = styled.div`
    color: teal;
`

export default function TitleCard(props){


    return (
        <div>
            <Title>{props.title}</Title> 
            <Price>${props.price}</Price>
        </div>
    )
}