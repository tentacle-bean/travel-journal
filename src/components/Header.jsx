import globe from '../assets/globe.png'
import '../styles/Header.css'

export default function Header(){
    return(
        <header className="header">
            <h1 className="header-title">my travel journal.</h1>
            <img className="header-icon" src={globe}/>
        </header>
    )
}