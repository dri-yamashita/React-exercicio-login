import './style.css'; 

function Link(props) {
    return(
       
        <a className='link' href="https://www.google.com/" target="_blank" rel="external">{props.text}</a>
    )
}


export default Link;