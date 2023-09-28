import styled from "styled-components"


const Item = styled.div`
    background-color: white;
    width: 300px;
    height: 200px;
    border-radius: 5px;
    display: grid;
    padding: 1rem;
`

const Image = styled.img`
    height: 100px;
    width: 100px;
    max-height: 20vh;
    justify-self: center;
    object-fit: contain;
`

const Button = styled.div`
    width: 6rem;
    height: 40px;
    color: white;
    background-color: #1e1e1e;    
    user-select: none;
    cursor: pointer;
    display: grid;
    justify-items: center;
    align-items: center;
    border-radius: 4px;
    font-size: 2rem;
`

const DWrapper = styled.div`
    padding-left: 1rem;
    padding-right: 1rem;
`

const Bottom = styled.div`
    display: grid;
    grid-template-columns: 2fr 1fr 2fr;
    justify-items: center;
    align-items: center;
`

export default function CartTitleCard({title, price, amount, image,object, addItem, subItem, detailDisplayHandler}){

    return (
        <Item>
            <Image src =  {image}></Image>
            <DWrapper>
                <div>{title}</div>
                <div>${price}</div>
            </DWrapper>
            <Bottom>
                <Button onClick={()=>{ addItem([title, price, image, 1]);}}>+</Button>
                <div>{amount}</div>
                <Button onClick={()=>{ subItem([title, price, image, 1]);}}>-</Button>
            </Bottom>
        </Item>
    )
}