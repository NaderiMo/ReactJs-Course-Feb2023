function Input(props) {
    return (
        <div>
            <label >{props.label}</label>
            <input type={props.type} placeholder={props.placeHolder} />
        </div>
    )
}

export default Input;