import TitleCard from "../components/TitleCard"
import styled from "styled-components"

const Page = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    grid-auto-rows: 300px;
`


export default function shop({data}){
    return (
        <Page>
                {data.map((e, counter = 0) => <TitleCard key = {counter++} title = {e.title} price = {e.price}/>)} 
        </Page>
    )
}