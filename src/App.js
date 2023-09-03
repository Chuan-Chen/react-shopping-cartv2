import React, { useEffect, useState } from "react";
import {Routes, Route, Link } from "react-router-dom";
import Error from "./pages/error"
import Shop from "./pages/shop"
import Home from "./pages/home"
import About from "./pages/about"
import Footer from "./components/Footer";
import styled from "styled-components";
import ShoppingCart from "./components/ShoppingCart";
import LogoIcon from "./Icons/logo1.svg"

const url = 'https://api.escuelajs.co/api/v1/products';

const Page = styled.div`
  font-family: 'Lato', sans-serif;
  background-color: #FFFFFE;

`

const ShoppingSideBar = styled.div`
position: fixed;
z-index: 2;
height: 100vh;
width 25rem;
background-color: #90adbb;
right: 0px;

`

const ShoppingBarToggle = styled.div`
position: fixed;
z-index; 1rem;
height: 100vh;
width: 100vw;

backdrop-filter: blur(10px);
`

const Logo = styled.div`
  height: 4rem;
  width: 100%;
  display: grid;
  align-items: center;
`

const Header = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  justify-content: center;
  align-items: center;
  border-bottom: 1.5px solid #edede9;
`

const NavBar = styled.div`
  display: grid;
  grid-template-columns: 1fr .5fr .5fr .5fr .2fr .5fr;
  gap: 10px;
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
  user-select: none;
  
  &:hover{
    color: #2a9d8f;
    border: 1px solid #2a9d8f
  }
  &:active{
    color: #228a7d;
  }

`

const PageBody = styled.div`
  height: 100%;
  width: 100%;
`

const Divider = styled.div`
  background-color: #edede9;
  width: 2px;  
  justify-self: center;
`

const ShoppingCartPage = styled.div`
  display: ${props => (props.display ? "block" : "none")};
`


function App() {

  const [data, setData] = useState([]);
  const [display, setDisplay] = useState(false);




  useEffect(() => {
    fetchData();
  }, []); 


  const displayHandler = () => {
    setDisplay(!display);
  }


  const fetchData = ()=>{
    fetch(url).then((res) => {
        res.json().then(
        result => {
            setData(result)
            console.log(result)
        }, 
        error => {
          setData('error')
        })
    })}

  return (
  
    <Page>
      <ShoppingCartPage display={display}>
        <ShoppingBarToggle onClick={displayHandler}></ShoppingBarToggle>
        <ShoppingSideBar>
          <button></button>
        </ShoppingSideBar>
      </ShoppingCartPage>
      <Header>
        <Link to = "/home">
        <Logo>
          <img src = {LogoIcon} style = {{height: '1.5rem', width: 'auto', marginLeft: '1rem'}} alt = 'logo'></img>
        </Logo>
        </Link>
        <NavBar>
          <div></div>
          <Link to = "/home" style = {{textDecoration: 'none', color: 'inherit'}}><NavItem>Home</NavItem></Link>
          <Link to = "/shop" style = {{textDecoration: 'none', color: 'inherit'}}><NavItem>Shop</NavItem></Link>
          <Link to = "/about"style = {{textDecoration: 'none', color: 'inherit'}}><NavItem>About</NavItem></Link>
          <Divider></Divider>
          <ShoppingCart clickManager = {displayHandler}></ShoppingCart>
        </NavBar>
      </Header>

    <PageBody>
    
      <Routes>
        <Route index element={<Home/>} />
        <Route path = "/shop" element={<Shop data = {data}/>}/>
        <Route path = "/about" element = {<About/>}/>
        <Route path = "/" element = {<Home/>}>
        <Route path = "*" element={<Error/>}/>
        </Route>
      </Routes>
    </PageBody>
    <Footer/>
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