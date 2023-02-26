import { useState } from "react";
import Card from "./Card";



function CardList()
{

    const[cardsState,setCards] = useState(firstListOfCards)


    const firstListOfCards= [{
        cardnumber:"0000000000",type:"بن کارت"
    },{
        cardnumber:"1111111111",type:"کارت معمولی"
    },{
        cardnumber:"2222222222",type:"بن کارت"
    }]

    

    const loadMore = () => {
        alert();
            const newCards =[{
                cardnumber:"1222224",type:"کارت معمولی"
            },{
                cardnumber:"3535555",type:"کارت معمولی"
            },{
                cardnumber:"7585888",type:"کارت معمولی"
            }]
             setCards([...firstListOfCards,...newCards])
    }

    

    return (
        <div>
        {
           cardsState.map(
            (item) => (
                <Card
                cardnumber={item.cardnumber}
                type={item.type}
                />)
            ) 

        
         }

         <button onClick={() =>loadMore()}>load more </button>
        </div>)
    
}
export default CardList;