import React from 'react'

export default function Card(props) {
  return (
    <div>
      <h1>{props.cardNumber}</h1>
      <p>{props.cardName}</p>
      <hr />
    </div>
  )
}
