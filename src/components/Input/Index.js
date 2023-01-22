import './style.css';
import PropTypes from "prop-types";


const Input = ({label, onChange, value, color}) =>  {
    return (
        <div className='Input'>
            <label style={{ color: color}} for='input'>{label}</label>
            <input name='input' onChange={onChange} value={value}/>
        </div>
    );
}

Input.propTypes = {
    label: PropTypes.string,
};


export default Input;