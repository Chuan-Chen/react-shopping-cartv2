import {ReactComponent as Ham} from "../Icons/burger-menu-svgrepo-com.svg"

export default function Hamburger() {
    
    return (
        <div style = {{display: 'grid', justifyContent: 'center', alignContent: 'center'}}>
            <Ham style = {{height: '3rem', width: '3rem'}}/>
        </div>
    )
}

/**
 * https://www.svgrepo.com/svg/506800/burger-menu
 */