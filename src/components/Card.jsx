import "./../css/Card.css"

export default function Card(props) {
    return (
        <div className="card" style={props.border}>
            <h3 className="title">{props.title}</h3>
            <p className="description">{props.description}</p>
            <div className="img-container">
                <img src={props.icon} alt={props.alt}/>
            </div>
        </div>
    )
}