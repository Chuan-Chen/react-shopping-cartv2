import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Error from "./pages/error"
import Shop from "./pages/shop"
import Footer from "./components/Footer";
import styled from "styled-components";

const url = 'https://api.escuelajs.co/api/v1/products';

const Page = styled.div`
  font-family: 'Lato', sans-serif;
`
const Nav = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
`
const NavItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
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
      <div>LOGO</div>
    <Nav>
      <NavItem>Home</NavItem>
      <NavItem>Shop</NavItem>
      <NavItem>About</NavItem>
    </Nav>

    <BrowserRouter>
      <Routes>
        <Route path = "/" element={<Shop data ={data} />}/>
        <Route path = "*" element={<Error/>}/>
      </Routes>
    </BrowserRouter>
    <Footer/>
    </Page>
  );
}

export default App;
