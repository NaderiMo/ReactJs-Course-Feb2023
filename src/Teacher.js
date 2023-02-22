// import React from "react"  6.9k (gzipped: 2.7k)
import React from "react";

class Teacher extends React.Component {
  render() {
    let { teacherName } = this.props;
    return (
      <div>
        <h1> {teacherName}</h1>
      </div>
    );
  }
}
export default Teacher;
