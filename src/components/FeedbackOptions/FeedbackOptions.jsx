import PropTypes from 'pro-types';
import shortid from 'shortid';
export default function FeedbackOptions ( options, onLeaveFeedback ) {

return (
    <div> 
    { options.map( option => (
    <button
    key={shortid.generate()}
    name={option}
    type="button"
    onClick={onLeaveFeedback}>
    </button>))}

    </div>)

}
FeedbackOptions.propTypes = {
    options: PropTypes.array.isRequired,
    onLeaveFeedback: PropTypes.func.isRequired,
};


