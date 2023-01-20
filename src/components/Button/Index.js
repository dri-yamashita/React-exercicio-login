import './style.css';
import PropTypes from "prop-types";

const Button = (props, aoClicar) =>  {
    
    return(
            <button className="btn-default" onClick={props.aoClicar}>{props.title}</button>        
    )
}

Button.propTypes = {
    title: PropTypes.string.isRequired,
    aoClicar: PropTypes.func.isRequired,
};

Button.defaultProps = {
    text: "Entrar",
}

export default Button;













