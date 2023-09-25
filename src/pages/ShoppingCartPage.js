import styled from "styled-components";
import CartTitleCard from "../components/CartTitleCard";

const ShoppingSideBar = styled.div`
    position: fixed;
    z-index: 2;
    height: 100vh;
    width 25rem;
    background-color: #f3f2f4;
    right: 0px;
    display: grid;
    grid-template-rows: .5fr 6fr .5fr 1fr;
    justify-items: center;
    align-items; center;
    border: 1px solid black;
    @media(max-width: 800px){
        width: 100vw;
        height: 100%;
    }
`

const ShoppingBarToggle = styled.div`
    position: fixed;
    z-index: 1;
    height: 100vh;
    width: 100vw;
    backdrop-filter: blur(10px);
`

const ShoppingXButton = styled.button`
    background: white;
    justify-self: end;
    
    height: 2rem;
    width: 2rem;
    border: 1px solid;
    user-select: none;
    cursor: pointer;
    transition: background-color 0.3s linear;
    &:hover{
        box-shadow: 0px 15px 35px -5px rgba(23, 53, 87, 0.59);
        background: #1f202a;
        color: white;
        text-shadow: 0px 0px 10px white;
    }
`

const Page = styled.div`
  display: ${props => (props.view ? "block" : "none")};
  overflow-y: none;
`

const ShoppingList = styled.div`
    display: grid;
    overflow-y: scroll;
    grid-auto-flow; column;
    justify-items: center;
    align-items: center;
    gap: 30px;
    border-radius: 5px;
    margin-top: 20px;
    margin-bottom: 20px;
    border: 1px solid black;
    width: 360px;

`

const CheckOutBtn = styled.div`
    display: grid;
    justify-items: center;
    align-content: center;
    user-select: none;
    cursor: pointer;
    border: 1px solid black;
    height: 2rem;
    width: 100px;
    transition: background-color 0.3s linear;
    &:hover{
        box-shadow: 0px 15px 35px -5px rgba(23, 53, 87, 0.59);
        background: #1f202a;
        color: white;
        text-shadow: 0px 0px 10px white;
    }
`

const Top = styled.div`
    display: grid;
    grid-template-column: 1fr 1fr 1fr;
    grid-auto-flow: column;
    width: 100%;
    height: 100%;
    border-bottom: 1px solid black;
`

export default function ShoppingCartPage({display, displayHandler, cartItems, total, addItem, subItem}){
    return (
    <Page view={display}>
        <ShoppingBarToggle onClick={displayHandler}></ShoppingBarToggle>
            <ShoppingSideBar>
                <Top>
                    <div></div>
                    <div style = {{alignSelf: 'center', justifySelf: 'center', fontSize: '2rem', fontWeight: 'bold'}}>Cart</div>
                    <ShoppingXButton onClick={displayHandler}>X</ShoppingXButton>
               
                </Top>
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
                <div style = {{color: '#1e1e1e', justifySelf: 'center', alignSelf: 'center'}}>Total: ${total}</div>
                <CheckOutBtn>Checkout</CheckOutBtn>
            </ShoppingSideBar>
      </Page>
    );
}