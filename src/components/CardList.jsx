import { useState } from "react";
import Card from "./Card";



const loadMore = () => alert("clicked");

function CardList({ }) {
    const firstListOfCards = [{
        cardNumber: "0000000000000000", type: "بن کارت"
    }, {
        cardNumber: "1111111111111111", type: "اکسس کارت"
    }, {
        cardNumber: "2222222222222222", type: "ملت کارت"
    }];

    const [cardsState, setCards] = useState(firstListOfCards);

    const loadMore = () => {
        const newCards = [{
            cardNumber: "4444444444444", type: "بن کارت"
        }, {
            cardNumber: "5555555555555", type: "اکسس کارت"
        }, {
            cardNumber: "6666666666666", type: "ملت کارت"
        }];
        setCards([...firstListOfCards, ...newCards]);
    };

    return (
        <div>
            {
                cardsState.map(
                    (item) => (
                        <Card cardNumber={item.cardNumber} type={item.type} />
                    )
                )
            }

            <button onClick={() => loadMore()} >LoadMore</button>
        </div>
    )
}

export default CardList;