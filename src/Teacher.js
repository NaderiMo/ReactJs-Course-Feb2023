import React from "react";

// class Teacher extends React.Component {
//     render() {
//         return (
//             <div>
//                 <h1>
//                     Teacher Name
//                 </h1>
//             </div>
//         );
//     }
// }



// class Teacher extends React.Component {
//     render() {
//         return (
//             <div>
//                 <h1>
//                     Teacher : {this.props.teacherName}
//                 </h1>
//             </div>
//         );
//     }
// }


class Teacher extends React.Component {
    render() {
        let {teacherName,family}=this.props;
        return (
            <div>
                <h1>
                    Teacher : {teacherName}
                    Teacher family : {family}
                </h1>
            </div>
        );
    }
}

export default Teacher;