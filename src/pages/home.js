import styled from "styled-components"
import {ReactComponent as Logo} from '../Icons/homelogo.svg'

const Page = styled.div`
height: 100vh;
width: 100%;
display: grid;
`


export default function home(){

    return (
        <Page>
            <Logo style = {{justifySelf: 'center', alignSelf: 'center'}}></Logo>
        </Page>
    )
}