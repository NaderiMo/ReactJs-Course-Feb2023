
import React from "react";
class Teacher extends React.Component{
    render() {

        let {firstName,lastName} = this.props
        return(
            <div>
             <h1>{this.props.teacherName}</h1>
             <h1>{firstName}</h1>
            </div>
        )

    }
    }

    export default Teacher;