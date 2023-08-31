import styled from "styled-components";
import {ReactComponent as Ham} from "../Icons/shoppingCart.svg"
import { useState } from "react"

export default function Hamburger(props) {
    


    const [counter, setCounter] = useState(0);

    const clickHandler = (x=true) =>{
        if(x){
            setCounter(counter + 1);
            x = false;
        }else{
            setCounter(counter - 1);

        }
    }

    props.clickManager(clickHandler);

    const Container = styled.div`
        display: grid;

    `

    const Counter = styled.div`
        position: absolute;
        top: 1.2rem;
        right: 3rem;
    `

    const ShopButton = styled.div`
        position: 'absolute';
        height: 'auto';
        width: 'auto';
        border: 'none';
        background: 'none';
        padding: '0px';
        justify-content: 'center';
        align-content: 'center';
    `


    return (
        <Container>
             <ShopButton onClick= {()=>{console.log('clicked')}}>
                <Ham style = {{height: '2.7rem', width: '2.7rem'}}></Ham>
                <Counter>{counter}</Counter>
            </ShopButton>
        </Container>    
    )
}

/**
 * https://www.svgrepo.com/svg/506800/burger-menu
*/