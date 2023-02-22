function Course(props) {
    return(
        <div>
            <h1>Course title: {props.title}</h1>
            <h2>Price: {props.price}</h2>
            <p>description: {props.description}</p>
        </div>
    )
}

export default Course;