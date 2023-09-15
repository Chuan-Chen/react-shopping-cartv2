import styled from "styled-components";
import CartTitleCard from "../components/CartTitleCard";

const ShoppingSideBar = styled.div`
    position: fixed;
    z-index: 2;
    height: 100vh;
    width 25rem;
    background-color: #878999;
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
  scroll: no;
`

const ShoppingList = styled.div`
    display: grid;
    overflow: hidden;
    grid-auto-flow; column;
    justify-items: center;
    align-items: center;
    gap: 10px;
    overflow: auto;
`

export default function ShoppingCartPage({display, displayHandler, cartItems, total, addItem, subItem}){
    return (
    <Page view={display}>
        <ShoppingBarToggle onClick={displayHandler}></ShoppingBarToggle>
            <ShoppingSideBar>
                <ShoppingList>
                    {
                    cartItems.map((item, count) => {
                    if(item[3] !== 0){
                        return (
                        <CartTitleCard key = {count++} title = {item[0]} price = {item[1]} amount = {item[3]} image = {item[2]} addItem={addItem} subItem={subItem}/>
                        )
                    }
                    return <></>
                    })}
                </ShoppingList>
                <ShoppingXButton onClick={displayHandler}>X</ShoppingXButton>
                <div>Total: ${total}</div>
            </ShoppingSideBar>
      </Page>
    );
}