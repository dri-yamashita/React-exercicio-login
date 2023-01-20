import './style.css';
import PropTypes from 'prop-types';

const Subtitle = ({text}) => {
    return <h2 className='subtitle'>{text}</h2>
}

Subtitle.propTypes = {
    text: PropTypes.string,
}



export default Subtitle;


