import './style.css'; 

function Input(props) {
    return (
        <div className='Input'>
            <label for='input'>{props.label}</label>
            <input name='input'/>
        </div>
    );
}



export default Input;