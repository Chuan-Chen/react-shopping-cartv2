import styled from "styled-components"


const Item = styled.div`
    background-color: white;
    
`

const Button = styled.div`
    height: 20px;
    width: 20px;
    background-color; white;
    display: grid;
    justify-items: center;
    align-items: center;
    background-color: grey;
`

const Bottom = styled.div`
    display: flex;
`

export default function CartTitleCard({title, price, amount, image, addItem, subItem}){

    return (
        <Item>
            <img alt = "title" src = {image} style = {{height: '100px', width: '100px'}}></img>
            <div>{title}</div>
            <div>{price}</div>
            <Bottom>
                <Button onClick={()=>{ addItem([title, price, image, 1]);}}>+</Button>
                <div>{amount}</div>
                <Button onClick={()=>{ subItem([title, price, image, 1]);}}>-</Button>
            </Bottom>
           </Item>
    )
}