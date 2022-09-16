import locationIcon from '../assets/location-icon.png'
import '../styles/Card.css'

export default function Card(props){
    return(
        <section className="card">
            <h2 className="card-name">{props.title}</h2>

            <div className="card-location">
                <img className="card-location-icon" src={locationIcon} />
                <p className="card-location-name">{props.location}</p>
            </div>
            
            <a className="card-link" href={props.googleMapsUrl}>View on Google Maps</a>

            <p className="card-duration">{props.startDate} - {props.endDate}</p>
            <p className="card-description">{props.description}</p>

            <img className="card-img" src={props.imageUrl}/>
        </section>
    )
}