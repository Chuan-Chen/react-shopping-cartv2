import styled from "styled-components";
import {ReactComponent as ShopIcon} from "../Icons/shoppingCart.svg"

const Container = styled.div`
        display: grid;
        justify-items: center;
    `

    const Counter = styled.div`
        position: absolute;
        height: 100%;
        width: 100%;
        font: bold .9em 'Lato', sans-serif;
        user-select: none;



    `

    const ShopButton = styled.div`
        position: relative;
        justify-content: center;
        align-content: center;
        cursor: pointer;
    `

export default function ShoppingCart({clickManager, cartCounter}) {
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
                <Counter>{cartCounter}</Counter>
            </ShopButton>
        </Container>    
    )
}

/**
 * https://www.svgrepo.com/svg/506800/burger-menu
*/