import Card from "./Card";
import {useState} from "react";

function CardList() {

    const cards =
        [{ cardNumber: "6104051246789865", cardType: "1بن کارت" },
        { cardNumber: "6104051246789887", cardType: "2بن کارت" },
        { cardNumber: "6104051246781235", cardType: "3بن کارت" }]

    const [cardState, setCards] = useState();

    const loadMore = () => {
        alert('clicked');
        setCards([{ cardNumber: "12121212", cardType: "3بن کارت" }]);
        console.log(cards)
    }
    return (
        <div>
            {
                cardState.map(
                    (item) => (
                        <Card
                            cardNumber={item.cardNumber}
                            cardType={item.cardType} />)
                )
            }
            <button onClick={() => loadMore()}>load more</button>
        </div>
    )
}
export default CardList;