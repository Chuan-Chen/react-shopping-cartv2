import styled from "styled-components"
import Logo from '../Icons/homelogo.svg'
import {Link } from "react-router-dom";


const Page = styled.div`
height: 100vh;
width: 100%;
display: grid;
justify-items: center;
align-items: center;
`

const ExploreButton = styled.button`
    height: 3rem;
    width: 9rem;
    background: none;
    border: 1px solid;
    border-radius: 4px;
    font-size: 1.4em;
    align-self: start;
    justify-self: center;
    
`

const Divider = styled.div`
    width: 80%;
    height 1px;
    background-color: #edede9;

`

export default function home(){

    return (
        <Page>
            <img src = {Logo} style = {{alignSelf: 'end'}} alt = "homepage logo"></img>
            <Divider></Divider>
            <Link to = "/shop" style = {{display: 'grid', height: '100%', width: '100%', textDecoration: 'none'}}><ExploreButton>Explore</ExploreButton></Link>
        </Page>
    )
}