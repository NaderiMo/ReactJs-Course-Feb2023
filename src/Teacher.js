import React from "react";

class Teacher extends React.Component {

    render() {
        let {firstName, lastName} = this.props
        return (
            <div>
                <h1>{this.props.firstName}</h1>
                <h1>{this.props.lastName}</h1>
                <h1>{lastName}</h1>
            </div>
        )

    }

}
export default Teacher;