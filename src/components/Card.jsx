function Card({ cardNo, type }) {
    return (
        <div>
            <h1>cardNo : {cardNo}</h1>
            <p>{type}</p>
            <hr />
        </div >)
}

export default Card;