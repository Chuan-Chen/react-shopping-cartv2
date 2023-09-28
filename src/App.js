import React, { useEffect, useState } from "react";
import {Routes, Route, Link } from "react-router-dom";
import Error from "./pages/error"
import Shop from "./pages/shop"
import Home from "./pages/home"
import About from "./pages/about"
import Details from "./pages/details"
import ShoppingCartPage from "./pages/ShoppingCartPage";
import HamburgerIcon from "./components/HamburgerIcon"
import Footer from "./components/Footer";
import styled from "styled-components";
import ShoppingCart from "./components/ShoppingCart";
import LogoIcon from "./Icons/logo1.svg"

const url = 'https://fakestoreapi.com/products';

const Page = styled.div`
  font-family: 'Lato', sans-serif;
  background-color: #f2f2f4;
  
`

const Logo = styled.div`
  height: 4rem;
  display: grid;
  align-items: center;
  width: 100%;
`

const Header = styled.div`
  display: grid;
  grid-template-columns: 3fr 1fr;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid #babab6;
  @media (max-width: 800px){
    
  }
`

const NavBar = styled.div`
  display: grid;
  grid-template-columns:  .5fr .5fr .5fr .2fr .5fr;
  gap: 10px;
  @media (max-width: 800px){
    display: grid;
    grid-auto-flow: column;
    grid-template-columns: 1fr .5fr 1fr;
  }
`

const NavItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  height: 45px;
  width: 100%;
  cursor: pointer;
  font-weight: bold;
  &:hover{
    color: #2a9d8f;
    border: 1px solid #2a9d8f
  }
  &:active{
    color: #228a7dt: bold;
    user-select: none;
    //box-shadow: 0px 15px 35px -5px rgba(50, 88, 130, 0.32);
  }

  @media(max-width: 800px){
    display: none;
  }
`

const PageBody = styled.div`
  height: 100%;
  width: 100%;
  display: ${props => props.d ? 'block' : 'none'};
`

const Divider = styled.div`
  background-color: #babab6;
  width: 2px;  
  justify-self: center;
`

const Wrapper = styled.div`
width: fit-content;
`

const Mobile = styled.div`
  >* {
    background-color: #b0d2e3;
    width: 95vw;
    height: 100%;
    display: grid;
    justify-content: center;
    align-items: center;
    font-weight: bold;
    :hover{
      background-color: #89a4b6; 
    }

  };
  height: ${props => props.height + "px;"};
  transition: height 0.3s linear;

  gap: 1px;
  margin: 10px;
  display: grid;
  align-items: center;
  justify-content: center;
  visibility: ${props => {if(props.height === 0){return "hidden"}else{return "visible"}}};
  @media(min-width: 800px){
    display: none;
  }
  
  
`

function App() {
  const [data, setData] = useState([]);
  const [display, setDisplay] = useState(false);
  const [cartCounter, setCartCounter] = useState(0);
  const [cartItems, setCartItems] = useState([]);
  const [total, setTotal] = useState(0);
  const [mobileMenu, setMobileMenu] = useState(0);
  const [detailDisplay, setDetailDisplay] = useState(false);
  const [detailObject, setDetailObject] = useState({});

  const changeDetailDisplay = (object) => {
    setDetailDisplay(!detailDisplay);
    setDetailObject(object);
    return detailDisplay;
  }

  const mobileMenuManager = () => {
    if(mobileMenu === 0){
      setMobileMenu(200);
    }else{
      setMobileMenu(0);
    }
  }


  const incrementCartCounter = () => {
    setCartCounter(cartCounter + 1);
  }
  const decrementCartCounter = () => {
    if(cartCounter !== 0)
    setCartCounter(cartCounter - 1);
  }
  

  const addItem = (Item) => {
    for(let i = 0; i < cartItems.length; i++){
      if(Item[0] === cartItems[i][0]){
        let a = [...cartItems];
        a[i][3] += 1;
        setCartItems(a);
        incrementCartCounter();
        setTotal(getTotal(a));
        return;
      }
    }
    setCartItems([...cartItems, Item])
    incrementCartCounter();
    setTotal(getTotal(cartItems));
  }

  const subItem = (Item) => {
    for(let i = 0; i < cartItems.length; i++){
      if(Item[0] === cartItems[i][0]){
        let a = [...cartItems];
        if(a[i][3] !== 0){
          a[i][3] -= 1;
          setCartItems(a);
          decrementCartCounter();
          setTotal(getTotal(a));
          return;
        }
        return;
      }
    }
  }

  const getTotal = (array) => {
    let sum = 0;
    for(let i = 0; i < array.length; i++){
      console.log(array[i][1] , array[i][3])
      sum += array[i][1] * array[i][3]; 
    }
    return sum.toFixed(2);
  }

  useEffect(() => {
    fetchData();
    setTotal(getTotal(cartItems));
  }, [cartItems]); 


  const displayHandler = () => {
    setDisplay(!display);
  }

  const fetchData = ()=>{
    try{
      fetch(url).then((res) => {
        res.json().then(
        result => {
            setData(result)
        }, 
        error => {
          setData('error')
        })
      })
      }catch(error){
        console.error(error)
      }
    }

  const exitDetailPage = () => {
    if(detailDisplay){
      setDetailDisplay(!detailDisplay);
    }
  }


  return (
  
    <Page>
      <a href = "#top" style = {{display: 'none'}}> </a>
      <ShoppingCartPage display = {display} displayHandler={displayHandler} cartItems = {cartItems} total = {total} addItem = {addItem} subItem = {subItem} detailDisplayHandler = {changeDetailDisplay}></ShoppingCartPage>
      <Header>
        <Wrapper>
            <Logo onClick={exitDetailPage}> 
            <Link to = "/home"><img src = {LogoIcon} style = {{height: '1.5rem', width: 'auto', marginLeft: '1rem'}} alt = 'logo'></img></Link>
            </Logo>
        </Wrapper>
        <NavBar>
          <NavItem onClick={exitDetailPage}><Link to = "/home" style = {{textDecoration: 'none', color: 'inherit'}}>Home</Link></NavItem>
          <NavItem onClick={exitDetailPage}><Link to = "/shop" style = {{textDecoration: 'none', color: 'inherit'}}>Shop</Link></NavItem>
          <NavItem onClick={exitDetailPage}><Link to = "/about"style = {{textDecoration: 'none', color: 'inherit'}}>About</Link></NavItem>
          <HamburgerIcon clickHandler = {mobileMenuManager}></HamburgerIcon>
          <Divider></Divider>
          <ShoppingCart cartCounter = {cartCounter} clickManager = {displayHandler}></ShoppingCart>
        </NavBar>
      </Header>
    <Mobile height = {mobileMenu}>
      <Link to = "/shop" style = {{textDecoration: 'none', color: 'inherit'}}>Shop</Link>
      <Link to = "/about"style = {{textDecoration: 'none', color: 'inherit'}}>About</Link>
      <Link to = "/home" style = {{textDecoration: 'none', color: 'inherit'}}>Home</Link>
    </Mobile>
    <Details isDisplayed = {detailDisplay} clickHandler = {changeDetailDisplay} object = {detailObject} addItem = {addItem} subItem = {subItem}/>
    <PageBody d = {!detailDisplay}>
      <Routes>
        <Route index element={<Home/>} />
        <Route path = "/shop" element={<Shop data = {data} add = {incrementCartCounter} sub = {decrementCartCounter} addItem = {addItem} subItem = {subItem} detailHandler = {changeDetailDisplay}/>}/>
        <Route path = "/about" element = {<About/>}/>
        <Route path = "/" element = {<Home/>}>
        <Route path = "*" element={<Error/>}/>
        </Route>
      </Routes>
    </PageBody>
     
    <Footer></Footer>
    </Page>
  
  );
}

export default App;


/**
 * #C1DBB3 tea green
 * #FFEED6 papaya whip
 * 84a59d cambridge blue
 * 
 * 
 */