import styled from "styled-components"
import Logo from "../Icons/icons8-hamburger-50.png"

const Hamburger = styled.img`
    justify-self: center;
    align-self: center;
    display: none;
    width: 2.7rem;
    height: 2.7rem;
    cursor: pointer;
    user-select: none;
    @media(max-width: 800px){
        display: block;
    }

    &:hover{
        background-color: #f2f2fA;
        border-radius: 5px;
    }

`

export default function HamburgerIcon({clickHandler}){



    return (
        <Hamburger onClick = {clickHandler} src = {Logo}>
          
        </Hamburger>
    )
}