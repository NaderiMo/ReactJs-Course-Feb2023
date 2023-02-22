import React from "react";

class Teacher extends React.Component {
    render() {
        let {firstName, lastName} = this.props;
        return(
            <div>
                <h1> Teacher first name: {firstName}</h1>
                <h1> Teacher last name: {lastName}</h1>
            </div>
        )
    }
}

export default Teacher;