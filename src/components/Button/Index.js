import './style.css'; 

function Button(props, redirecionar) {
    
    return(
            <button className="btn-default" onClick={props.redirecionar}>{props.name}</button>        
    )
}


export default Button;













