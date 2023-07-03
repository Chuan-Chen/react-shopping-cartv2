import TitleCard from "../components/TitleCard"
import styled from "styled-components"

const Page = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-auto-rows: 100px;
`


export default function shop({data}){
    



    return (
        <Page>
                {data.map(e => <TitleCard key = {e} title = {e.title} price = {e.price}/>)} 
        </Page>
    )
}