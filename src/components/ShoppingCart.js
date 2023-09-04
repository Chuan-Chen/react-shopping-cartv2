import styled from "styled-components";
import {ReactComponent as ShopIcon} from "../Icons/shoppingCart.svg"
import { useState } from "react"

export default function ShoppingCart({clickManager}) {


    const [counter, setCounter] = useState(0);

    const clickHandler = (x=true) =>{
        if(x){
            setCounter(counter + 1);
            x = false;
        }else{
            setCounter(counter - 1);

        }
    }

    

    const Container = styled.div`
        display: grid;

    `

    const Counter = styled.div`
        position: absolute;
        top: .6rem;
        left: .9rem;
        font: bold .9em 'Lato', sans-serif;
        user-select: none;
    `

    const ShopButton = styled.div`
        position: relative;
        justify-content: center;
        align-content: center;
    `
    


/**
 *         height: 'auto';
        width: 'auto';
        border: 'none';
        background: 'none';
        padding: '0px';
 */

    return (
        <Container>
             <ShopButton onClick= {clickManager}>
                <ShopIcon style = {{height: '2.7rem', width: '2.7rem'}}></ShopIcon>
                <Counter>{counter}</Counter>
            </ShopButton>
        </Container>    
    )
}

/**
 * https://www.svgrepo.com/svg/506800/burger-menu
*/