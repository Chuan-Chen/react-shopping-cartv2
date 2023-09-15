import styled, { keyframes } from "styled-components"
import Logo from '../Icons/homelogo.svg'
import {Link } from "react-router-dom";


const Page = styled.div`
height: 100vh;
width: 100%;
display: grid;
justify-items: center;
align-items: center;
`

const Hop = keyframes`
    0% {transform: translateY(0);}
    50% {transform: translateY(-5px);}
    100% {transform: translateY(0);}
`

const ExploreButton = styled.button`
    height: 3rem;
    width: 9rem;
    background-color: #fcfbff;
    border: none;
    border-radius: 4px;
    font-size: 1.4em;
    align-self: start;
    justify-self: center;
    cursor: pointer;  
    box-shadow: 0px 15px 35px -5px rgba(50, 88, 130, 0.32);
    animation: ${Hop} 2s infinite ease-in-out; 
    transition: background-color 0.3s linear;
    &:hover{
        box-shadow: 0px 15px 35px -5px rgba(23, 53, 87, 0.59);
        background: #1f202a;
        color: white;
        text-shadow: 0px 0px 10px white;
    }
`

const Divider = styled.div`
    width: 80%;
    height 1px;
    background-color: #babab6;

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