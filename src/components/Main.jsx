import Card from "./Card"
import data from "../data.js"
import '../styles/Main.css'

export default function Main(){
    const cards = data.map(item => <Card {...item}/>)

    return(
        <main className="main">
            {cards}
        </main>
    )
}