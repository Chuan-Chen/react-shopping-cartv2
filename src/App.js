import React, { useEffect, useState } from "react";
import {Routes, Route, Link } from "react-router-dom";
import Error from "./pages/error"
import Shop from "./pages/shop"
import Home from "./pages/home"
import About from "./pages/about"
import Footer from "./components/Footer";
import styled from "styled-components";
import Hamburger from "./components/Hamburger";

const url = 'https://api.escuelajs.co/api/v1/products';

const Page = styled.div`
  font-family: 'Lato', sans-serif;
  background-color: #FFEED6;
`

const Logo = styled.div`
  height: 80px;
  width: 100%;
  
`

const Header = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  justify-content: center;
  align-items: center;
`

const NavBar = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr .5fr;
  gap: 10px;
`
const NavItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 20px;
  height: 45px;
  width: 100%;
  cursor: pointer;
  border: 2px solid;
  
  &:hover{
    background-color: #FFEEDF;
  };

`

const PageBody = styled.div`
  height: 100%;
  width: 100%;
`

function App() {

  const [data, setData] = useState([])

  useEffect(() => {
    fetchData();
  }, []); 

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
      <Header>
        <Logo></Logo>
        <NavBar>
          <Link to = "/home" style = {{textDecoration: 'none', color: 'inherit'}}><NavItem>Home</NavItem></Link>
          <Link to = "/shop" style = {{textDecoration: 'none', color: 'inherit'}}><NavItem>Shop</NavItem></Link>
          <Link to = "/about"style = {{textDecoration: 'none', color: 'inherit'}}><NavItem>About</NavItem></Link>
          <Hamburger></Hamburger>
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