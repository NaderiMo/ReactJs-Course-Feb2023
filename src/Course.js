//  function Course() {
//     return (
//         <div>
//             <h1>Title</h1> 
//             <h2>price</h2>
//             <p>Description</p> 
//         </div>
//     )
// } 


//  function Course(props) {
//     return (
//         <div>
//             <h1>{props.title}</h1>
//             <h2>{props.price}</h2>
//             <p>{props.description}</p>
//         </div>
//     )
// } 
function Course({ title, price, description }) {
    return (
        <div>
            <h1>{title}</h1>
            <h2>{price}</h2>
            <p>{description}</p>
        </div>
    )
}
export default Course;