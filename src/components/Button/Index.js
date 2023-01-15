import './style.css'; 

function Button(props) {
    return(
        <button className="btn-default">{props.name}</button>

       
    )
}


export default Button;




//<button className="btn-default">{props.name}</button>

// <Button type="submit" value="{prop.value}" class="submit"/>