import { useState } from "react";
import Card from "./Card";
const cards=[{cardNumber: "1234",type:"بنکارت"},{cardNumber: "5678",type:"کارت معمولی"},{cardNumber: "9012",type:"اکسس کارت"}]
// const loadMore= ()=>{
//     alert("clicked")
// }
function CardList({}){
    const firstListOfCards=[{cardNumber:"123",type:"boncard"}] 
    const newcardList=[{cardNumber:"66666",type:"boncard"}] 
    const [cardsState,setCards]=useState(firstListOfCards)
   // const loadMore =() =>{setCards([{cardNumber:"000000",type:"boncard"}])}
    const loadMore =() =>{setCards([...firstListOfCards,...newcardList])}
    return(
    <div>
         {cardsState.map(
            (item)=>(
                <Card 
                cardNumber={item.cardNumber}
                type={item.type}/>
 
            )
        )}
        <button onClick={()=>loadMore()}>Load More</button>
    </div>
    )
}
export default CardList;