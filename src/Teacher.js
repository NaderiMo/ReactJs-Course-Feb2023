import React from 'react'
class Teacher extends React.Component
{
    render()
    {
        return(
            <div>
                <h1>Class Example</h1>
                <h4>{this.props.name}</h4>
            </div>
        )
    }
}
export default Teacher;