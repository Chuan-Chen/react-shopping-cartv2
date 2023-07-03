import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Error from "./pages/error"
import Shop from "./pages/shop"
import Home from "./pages/home"
import Footer from "./components/Footer";
import styled from "styled-components";

const url = 'https://api.escuelajs.co/api/v1/products';

const Page = styled.div`
  font-family: 'Lato', sans-serif;
`

const Logo = styled.div`
  height: 100px;
  width: 100%;
  background-color: #2D898B;
`

const Nav = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
`
const NavItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #3587A4;
  height: 45px;
  width: 100%;
  cursor: pointer;
  &:hover{
    background-color: #3577B4
  }
`

const PageBody = styled.div`
  height: 100%;
  width: 100%;
  background-color: #C1DFF0;
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
      <Logo></Logo>
    <Nav>
      <NavItem><Link to = "/shop">Home</Link></NavItem>
      <NavItem>Shop</NavItem>
      <NavItem>About</NavItem>
    </Nav>
    <PageBody>
    <BrowserRouter>
      <Routes>
        <Route path = "/" element = {<Home/>}/>
        <Route path = "/shop" element={<Shop data ={data} />}/>
        <Route path = "*" element={<Error/>}/>
      </Routes>
    </BrowserRouter>
    </PageBody>
    <Footer/>
    </Page>
  );
}

export default App;
