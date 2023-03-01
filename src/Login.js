import "./myCss/myCss.css";
import avator1 from './images/img_avatar.jpg';
import { useState } from "react";
    
function Login() {

    const validLogin = 1;
    const [validLoginState, setValidLogin] = useState(validLogin);

    const validate = () => {
        alert('validate is starting...');
        setValidLogin(0);
        const validUsrFromDB="nasim";
        const validPssFromDB="123456";

        // const inputRefUsr = useRef(null);
        // alert(document.getElementById('usrID').value );

        if (validLoginState !== 1) {
            alert('incorrect pass and username!');
        }
    }

    return (
        <div>
            <form method="post">
                <br />
                <br />
                <br />
                <div class="imgcontainer">
                    <img src={avator1} height="150" width="150" />
                </div>
                <div class="container">
                    <lable ><b>Username  </b></lable>
                    <input type="text" placeholder="Enter your Username" id="usrId" ></input>
                    <br />
                    <br />
                    <label ><b>Password  </b></label>
                    <input type="password" placeholder="Enter your Password" id="myPss"></input>
                    <br />
                    <br />
                    <button type="button" onClick={() => validate()}>Login</button>
                </div>
            </form>
        </div>
    )
}

export default Login;