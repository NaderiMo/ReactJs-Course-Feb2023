function MyForm(props){
return(
    <form>
        <label>{props.label}</label>
        <input type={props.type} placeholder={props.placeholder}></input>
    </form>
)
}
export default MyForm;