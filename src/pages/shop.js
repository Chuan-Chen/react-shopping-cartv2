import TitleCard from "../components/TitleCard"


export default function shop({data}){
    
    return (
        <div>
                {data.map(e => <TitleCard key = {e} title = {e.title} price = {e.price}/>)} 
        </div>
    )
}