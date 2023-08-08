import { useState } from "react"
import styled from "styled-components";


const Position = styled.div`
    z-index: 2;
    font-size: 1rem;
    font: bold;
   
`

export default function ItemCounter(prop){
    
    const [counter, setCounter] = useState(0);

    const clickHandler = (x=true) =>{
        if(x){
            setCounter(counter + 1);
            x = false;
        }else{
            setCounter(counter - 1);

        }
    }

    return (
        <Position>{counter}</Position>
    )
}