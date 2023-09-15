import TitleCard from "../components/TitleCard"
import styled from "styled-components"

const Page = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    grid-auto-rows: 400px;
    gap: 40px;
    height: 100%;
    widht: 100%;
`

const Container = styled.div`
    height: 400px;
    width: 300px;
    margin: auto;
`

export default function shop({data, addItem, subItem}){
    return (
        <Page>
                {data.map((e, counter = 0) => 
                <Container key = {"container"+counter}>
                    <TitleCard key = {counter++} title = {e.title} price = {e.price} image = {e.image} addItem = {addItem} subItem = {subItem}/>
                </Container>
                )}
        </Page>
    )
}