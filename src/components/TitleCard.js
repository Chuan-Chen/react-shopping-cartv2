import styled from "styled-components"

const Title = styled.div`
    font-size: 20px;
    width: 100%;
    height: 3rem;
    text-overflow: ellipsis;


`
const Price = styled.div`
    color: teal;
`

const DescriptionContainer = styled.div`
    position: relative;
    margin: 30px;
    display: grid;
    grid-template-row: 1fr 1fr 1fr;
`

const Image = styled.img`
    height: 80%;
    width: 80%;
    max-height: 20vh;
    justify-self: center;
    object-fit: contain;
`

const ImageContainer = styled.div`
    display: grid;
    justify-items: center;
    align-items: center;
`

const Container = styled.div`
    height: 100%;
    width: 100%;
    border-radius: 10px;
    display: grid;
    grid-template-rows: 1fr 1fr;
    background-color: white;
    box-shadow: 0px 15px 35px -5px rgba(50, 88, 130, 0.32);
    overflow: hidden;
    
`
const Button = styled.div`
    width: 80%;
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

export default function TitleCard({title, image, price, amount, addItem, subItem}){


    return (
        <Container>
            <ImageContainer>
                <Image src = {image}></Image>
            </ImageContainer>
            <DescriptionContainer>
                <Title>{title}</Title> 
                <Price>${price}</Price>
                <div style = {{display: 'grid', justifyItems: 'center', gap: '2px', gridAutoFlow: 'column'}}>
                    <Button onClick={()=>{ addItem([title, price, image, 1]);}}>+</Button>
                    <div>{amount}</div>
                    <Button onClick={()=>{ subItem([title, price, image, 1]);}}>-</Button>
                </div>
            </DescriptionContainer>
        </Container>
    )
}