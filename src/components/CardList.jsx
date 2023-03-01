import { useState } from "react";
import Card from "./Card";


function CardList({ }) {

    const firstListOfCards = [
        {
            cardNumber: "00000000000", type: "بن کارت"
        }, {
            cardNumber: "11111111111", type: "کارت معمولی"
        }, {
            cardNumber: "22222222222", type: "بن کارت"
        }]
    const newCards = [
        {
            cardNumber: "3333", type: "بن کارت"
        }, {
            cardNumber: "44444", type: "کارت معمولی"
        }, {
            cardNumber: "55555", type: "بن کارت"
        }]

    const [cardsState, setCards] = useState(firstListOfCards)

    const loadMore = () => {
        setCards([...firstListOfCards, ...newCards])
    }

    return (
        <div>
            {
                cardsState.map(
                    (item,index) => (
                        <Card
                            key={index}
                            cardNumber={item.cardNumber}
                            type={item.type}
                        />)
                )
            }
            <button onClick={() => loadMore()}>Load More</button>
        </div>)
}
export default CardList;

