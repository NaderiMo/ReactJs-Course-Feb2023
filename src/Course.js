function Course(props){
    
    return(
        <div>
            <h1>{props.title}</h1>
            <h2>{props.price}</h2>
            <p>{props.description}</p>
            <h1></h1>
        </div>
    )
}
export default Course;