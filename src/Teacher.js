import React from "react"
class Teacher extends React.Component{
    render(){
        // let{teacherName}=this.props;
        let {lastName}=this.props;
        return(
        <div>
            <h1>{this.props.firstName}
            </h1>
            <h1>{lastName}
            </h1>
        </div>
        )
    }
}
export default Teacher;