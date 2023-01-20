import './style.css';
import PropTypes from "prop-types";


const Input = ({label, onChange, value}) =>  {
    return (
        <div className='Input'>
            <label for='input'>{label}</label>
            <input name='input' onChange={onChange} value={value}/>
        </div>
    );
}

Input.propTypes = {
    label: PropTypes.string,
};


export default Input;