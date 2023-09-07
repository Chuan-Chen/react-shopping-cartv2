import TitleCard from "../components/TitleCard"
import styled from "styled-components"

const Page = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    grid-auto-rows: 300px;
    gap: 30px;
    height: 100%;
    widht: 100%;
`

const Image = styled.img`
    height: 100%;
    width: auto;
    max-height: 26vh;
    
`

const Container = styled.div`
    height: 400px;
    width: 300px;
    
`

const Button = styled.button`

`

export default function shop({data, addItem, subItem}){
    return (
        <Page>
                {data.map((e, counter = 0) => 
                <Container key = {"container"+counter}>
                    <Image key = {"image"+ counter} src = {e.image}/>
                    <TitleCard key = {counter++} title = {e.title} price = {e.price}/>
                    <Button onClick={()=>{ addItem([e.title, e.price, e.image, 1]);}}>+</Button>
                    <Button onClick={()=>{ subItem([e.title, e.price, e.image, 1])}}>-</Button>
                </Container>
                )}
        </Page>
    )
}