import React, { useEffect, useState } from "react";
import TitleCard from "./components/TitleCard";

const url = 'https://api.escuelajs.co/api/v1/products';


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
    <div>
      {data.map(e => <TitleCard key = {e} title = {e.title} price = {e.price}/>)}  
    </div>
  );
}

export default App;
