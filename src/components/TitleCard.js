import styled from "styled-components"
const Title = styled.div`
    font-size: 20px;
    width: 100%;
    height: 3rem;
    overflow: hidden;
    text-overflow: ellipsis;
    font-weight: bold;
    white-space: nowrap;
`
const Price = styled.div`
    color: teal;
    display: grid;
    grid-auto-flow: column;
    grid-template-columns: .6fr 3fr;
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
    cursor: pointer;
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
    width: 100%;
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
    transition: background-color 0.3s linear;
    &:hover{
        box-shadow: 0px 15px 35px -5px rgba(23, 53, 87, 0.59);
        background: white;
        color: black;
        text-shadow: 0px 0px 10px white;
    }
`

export default function TitleCard({title, image, price, amount, addItem, subItem, object, detailHandler}){


    return (
        <Container>
            <ImageContainer>
            <Image title = {`${title} product page.`} src = {image} onClick={()=>{detailHandler(object); window.location.href='#top';}} ></Image>
            </ImageContainer>
            <DescriptionContainer>
                <Title title={title}>{title}</Title> 
                <Price>Price: <div style = {{fontSize: '1.2rem'}}>${price}</div></Price>
                <div style = {{display: 'grid', justifyItems: 'center', gap: '4px', gridAutoFlow: 'column'}}>
                    <Button onClick={()=>{ addItem([title, price, image, 1]);}}>+</Button>
                    
                    <Button onClick={()=>{ subItem([title, price, image, 1]);}}>-</Button>
                </div>
            </DescriptionContainer>
        </Container>
    )
}