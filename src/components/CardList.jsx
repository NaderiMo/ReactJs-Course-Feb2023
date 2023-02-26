import React, { useState } from 'react'
import Card from './Card'

export default function CardList() {

    let firstCards = [
        { cardNumber: "1", cardName: "بن کارت" }
        , { cardNumber: "2", cardName: "ملت کارت" }
        , { cardNumber: "3", cardName: "اکسس کارت" }
    ]

    const clickHandler = () => {
        const cards = [
            { cardNumber: "1", cardName: "بن کارت" }
            , { cardNumber: "2", cardName: "ملت کارت" }
        ]
        const newCards = [
            { cardNumber: "4", cardName: "بن کارت" }
            , { cardNumber: "5", cardName: "ملت کارت" }
            , { cardNumber: "6", cardName: "اکسس کارت" }]

        setState([...firstCards, ...newCards]);
    }

    const [state, setState] = useState(firstCards)

    return (
        <div>
            {
                state.map(
                    (item) => (<Card key={item.cardNumber} cardName={item.cardName} cardNumber={item.cardNumber} />)
                )
            }
            <button onClick={
                () =>
                    clickHandler()
            }>load more</button>
        </div>
    )
}
