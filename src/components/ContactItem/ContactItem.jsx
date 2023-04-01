import PropTypes from 'prop-types';

import css from './ContactItem.module.css';

export const ContactItem = ({ name, number, handleClickDelete }) => {
  return (
    <li className={css.item}>
      <span className={css.name}>{name}</span>: <span>{number}</span>
      <button className={css.btn} onClick={handleClickDelete} type="button">
        Delete
      </button>
    </li>
  );
};

ContactItem.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  handleClickDelete: PropTypes.func.isRequired,
};
