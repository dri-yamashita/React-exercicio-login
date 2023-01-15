import './style.css'; 

function Button(props) {
    function login(){
        window.location.href = "https://discord.com/channels/1014299053149929473/1062175752612745266";
    }

    return(

        <div>
            <button className="btn-default" onClick={login}>{props.name}</button>    
        </div>
    )
}


export default Button;













