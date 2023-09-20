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
    cursor: pointer;  
    justify-self: start;
    align-self: center;
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
const HomeLogo = styled.img`
    align-self: end;
    border-radius: 4px;
    height: auto; 
    width: 40vw;
    box-shadow: 0px 15px 35px -5px rgba(144, 173, 187, 0.49);
`

export default function home(){

    return (
        <Page>
            <HomeLogo src = {Logo} alt = "homepage logo"></HomeLogo>
            <Divider></Divider>
            
            <div style = {{height: '100%', width: '100%', display: 'grid', justifyContent: 'center', alignContent: 'start', gridAutoFlow: 'column'}}>
                <Link to = "/shop" style = {{textDecoration: 'none'}}><ExploreButton>Explore</ExploreButton></Link>
            </div>
        </Page>
    )
}