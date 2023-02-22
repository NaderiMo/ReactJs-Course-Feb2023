export function Course(props) {
    return (
        <div>
            <h1>Course Title:{props.title}</h1>
            <h2>Price : {props.price}</h2>
            <p>Description : {props.description}</p>
        </div>
    )
}

export default Course;