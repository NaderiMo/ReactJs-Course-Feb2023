function Card({cardNumber, type}){
    return(
        <div>
            <h1>{cardNumber}</h1>
            <p>{type}</p>
            <hr />
        </div>
    )
}

export default Card;