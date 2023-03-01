import { useState } from "react";
import Card from "./Card";




function CardList({}){

    const firstListofCards = [
        {cardNumber:"5022", type:"1"},
        {cardNumber:"5023", type:"1"},
        {cardNumber:"5024", type:"1"}
        ]

const [cardsState,setCards] = useState(firstListofCards)

const newCard =  [
    {cardNumber:"1212", type:"1"},
    {cardNumber:"2222", type:"1"},
    {cardNumber:"23434", type:"1"}
    ]
        const loadMore = ()=>{
            setCards([
                ...firstListofCards,...newCard
            ])
        }


    // console.log(cards.length);
    return (
    <div>
        {
        cardsState.map(
            (item,index)=>
            (
            <Card key={index}
        cardNamber={item.cardNumber}
        type={item.type} 
        ></Card>))}
        <button onClick={()=>loadMore()} >click for more</button>
    </div>)
}
export default CardList;