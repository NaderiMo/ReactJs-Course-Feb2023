function Login(props) {
    return (
        <div>
            <form method="post">
                <br />
                <br />
                <br />
                
                <div class="imgcontainer">
                    {/* <img src="/images/img_avatar.png" alt="Avatar" class="avatar"></img> */}
                    <image src="/images/img_avatar.png"></image>
                </div>
                <div class="container">
                    <lable ><b>Username  </b></lable>
                    <input type="text" placeholder="Enter your Username" name={props.username}></input>
                    <br />
                    <br />
                    <label ><b>Password  </b></label>
                    <input type="password" placeholder="Enter your Password" name={props.password}></input>
                    <br />
                    <br />
                    <button type="submit">Login</button>
                </div>
            </form>
        </div>

    )
}
export default Login;