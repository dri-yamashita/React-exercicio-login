import './style.css'; 

function Link(props) {
    return(
       
        <a className='link' href={props.link} target="_blank" rel="external">{props.text}</a>
    )
}


export default Link;