

import styled from "styled-components";


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
    overflow: auto;
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

const Page = styled.div`
  display: ${props => (props.view ? "block" : "none")};
`


export default function ShoppingCartPage({display, displayHandler, cartItems}){



    return (
    <Page view={display}>
        <ShoppingBarToggle onClick={displayHandler}></ShoppingBarToggle>
            <ShoppingSideBar>
                <div>
                    {cartItems.map((item, count) => {
                    return (
                    <div key = {count++}>
                        <div>{item[0]}</div>
                        <div>{item[1]}</div>
                        <img src = {item[2]} style = {{height: '100px', width: '100px'}}></img>
                        <div>{item[3]}</div>
                    </div>
                    )})}
                </div>
                <ShoppingXButton onClick={displayHandler}>X</ShoppingXButton>
            </ShoppingSideBar>
      </Page>
    );
}