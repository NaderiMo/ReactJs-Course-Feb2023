import {useState} from "react"
import Card from "./Card"


// const cards=[{
//   cardNumber:"111",type:"بن کارت"
// },{
//   cardNumber:"2222",type:"کارت جاری"
// },{
//   cardNumber:"3333",type:"اکسس کارت"
// }]

// const [cardsState, setCards] = useState(firstList) 



function CardList({}) {
  const firstCardsList=[{
    cardNumber:"111",type:"بن کارت"
  },{
    cardNumber:"2222",type:"کارت جاری"
  },{
    cardNumber:"3333",type:"اکسس کارت"
  }]
  const newCardsList=[{
    cardNumber:"111",type:"بن کارت"
  },{
    cardNumber:"2222",type:"کارت جاری"
  },{
    cardNumber:"3333",type:"اکسس کارت"
  }]
  const[cardsState,setCards] = useState(firstCardsList)
  

  const loadMore=() => {
    setCards([...firstCardsList,...newCardsList])
  }


  
  return (<div>
    {
      cardsState.map(
        (item)=>(
        <Card
        cardNumber={item.cardNumber}
        type={item.type}
        />
      ))
    }
    <button onClick={()=>loadMore()}>Load More</button>
       
  </div>

  )
}
export default CardList;