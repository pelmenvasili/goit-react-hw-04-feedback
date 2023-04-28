import { useState } from 'react';
import PropTypes from 'prop-types';
import css from './FeedbackOptions.module.css';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  const [activeButton, setActiveButton] = useState(null);
  const handleButtonClick = (option) => {
    setActiveButton(option)
    onLeaveFeedback(option);
  }

  return (
      <ul className={css.list}>
        {options.map(option => (
          <li key={option} className={css.item}>
            <button
              className={`${css.button} ${
                activeButton === option ? css.activeButton : ''
              }`}
              onClick={() => handleButtonClick(option)}
            >
              {option}
            </button>
          </li>
        ))}
      </ul>
    );
}

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;