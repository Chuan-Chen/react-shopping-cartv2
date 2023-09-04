

import styled from "styled-components";

export default function ShoppingCartPage({display, displayHandler}){


const ShoppingSideBar = styled.div`
    position: fixed;
    z-index: 2;
    height: 100vh;
    width 25rem;
    background-color: #1B1F26;
    right: 0px;
    display: grid;
    grid-template-rows: 4fr 1fr;
    justify-items: center;
    align-items; center;
`

const ShoppingBarToggle = styled.div`
    position: fixed;
    z-index; 1rem;
    height: 100vh;
    width: 100vw;
    backdrop-filter: blur(10px);
`

const ShoppingXButton = styled.button`
    background: white;
    height: 2rem;
    width: 2rem;
    border-radius: 4px;
    border: 1px solid;
`

const ShoppingCartPage = styled.div`
  display: ${props => (props.display ? "block" : "none")};
`

    return (
    <ShoppingCartPage display={display}>
        <ShoppingBarToggle onClick={displayHandler}></ShoppingBarToggle>
            <ShoppingSideBar>
                <div></div>
                <ShoppingXButton onClick={displayHandler}>X</ShoppingXButton>
            </ShoppingSideBar>
      </ShoppingCartPage>
    );
}