import { useState } from 'react';
import Card from './Card';



function CardList({}) {

    const firstListOfCards = [
        {cardNumber:"0000000", type:"بن کارت"},
        {cardNumber:"1111111", type:"کارت اعتباری"},
        {cardNumber:"2222222", type:"کارت هدیه"}]

        const [cardsState, setCards] = useState(firstListOfCards)

        const loadMore = () => {
            const newCards = [
                {cardNumber:"3333333", type:"بن کارت"},
                {cardNumber:"4444444", type:"کارت اعتباری"},
                {cardNumber:"5555555", type:"کارت هدیه"}]
            setCards([...firstListOfCards, ...newCards])
        }

    return(
        <div>{
            cardsState.map(
                (item) => (
                    <Card cardNumber={item.cardNumber} type={item.type}/>
                )
            )
            }
            <button onClick={() => loadMore()}>Load More</button>
            </div>
    )
}

export default CardList;