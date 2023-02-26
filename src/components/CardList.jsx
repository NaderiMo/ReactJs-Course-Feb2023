import { useState } from "react";
import Card from "./Card";


// const cards = [{
//     cardNumber: "111", type: "بن کارت"
// }, {
//     cardNumber: "222", type: "اکسس کارت"
// }, {
//     cardNumber: "333", type: "کارت مجازی"
// }]
const loadMore = () => {
    alert("Click")
}
function CardList() {
    const fisrtCardList = [{
        cardNumber: "111", type: "بن کارت"
    }, {
        cardNumber: "222", type: "اکسس کارت"
    }, {
        cardNumber: "333", type: "کارت مجازی"
    }]

    const newCardList = [{
        cardNumber: "111", type: "بن کارت"
    }, {
        cardNumber: "222", type: "اکسس کارت"
    }, {
        cardNumber: "333", type: "کارت مجازی"
    }]
    
    const [cardsState, setCards] = useState(fisrtCardList);

    const loadMore = () => {
        setCards([...fisrtCardList,...newCardList])
    }
    return (

        <div>
            {/* <Card cardNumber="100000" type="بن کارت"/> */}
            {cardsState.map((item) => (<Card
                cardNumber={item.cardNumber}
                type={item.type} />))}

            <button onClick={() => loadMore()}>Load More</button>
        </div>

    )
}

export default CardList;