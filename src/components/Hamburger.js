import {ReactComponent as Ham} from "../Icons/shoppingCart.svg"
import ItemCounter from "./ItemCounter"

export default function Hamburger() {
    
    return (
        <div style = {{display: 'grid'}}>
            <button style = {{height: 'auto', width: 'auto', border: 'none', background: 'none', padding: '0px', justifyContent: 'center', alignContent: 'center'}} onClick= {()=>{console.log('clicked')}}>
                <Ham style = {{height: '2.7rem', width: '2.7rem'}}></Ham>
               
            </button>
        </div>
    )
}

/**
 * https://www.svgrepo.com/svg/506800/burger-menu
*/