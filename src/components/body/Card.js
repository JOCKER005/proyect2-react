

export default function Card(props) {

    return(
            <div className="col col-sm-4 col-md-3 ">
                <img src={props.image} alt={props.title} className="card-img-top" />
                <div className="card-body">
                    <h5 className="card-title">{props.h5text}</h5>
                    <p className="card-text">{props.ptext}</p>
                    <a href="/" className="btn btn-danger">Detalles</a>
                </div>
            </div>
    )
}