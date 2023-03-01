import { useState } from "react";
import Card from "./Card";

// let cards = [{ cardNumber: "0000000", type: "bon card" }, { cardNumber: "111111", type: "accessCard" }, { cardNumber: "222222", type: "oil card" }];

function CardList({ }) {
    const defCards = [{ cardNumber: "0000000", type: "bon card" }, { cardNumber: "111111", type: "accessCard" }, { cardNumber: "222222", type: "oil card" }];

    const loadMore = () => {
        alert("Clicked");
        setCards = [{ cardNumber: "0000000", type: "bon card" }];
        
    }
    
    const [cardState, setCards] = useState(defCards);

    console.log(defCards.length);
    return (
        <div>
                {defCards.map(
                    (item) => (
                        <Card cardNo={item.cardNumber} type={item.type} />
                   ))}
                
                   <button onClick={() => loadMore()}> Load More </button>
        </div>
    
    );
} export default CardList;