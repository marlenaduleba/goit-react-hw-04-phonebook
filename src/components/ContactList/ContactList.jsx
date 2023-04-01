import { ContactItem } from 'components/ContactItem/ContactItem';
import PropTypes from 'prop-types';

import css from './ContactList.module.css';

export const ContactList = ({ contacts, handleClickDelete }) => {
  return (
    <div>
      {contacts.length > 0 && (
        <ul className={css.list}>
          {contacts.map(({ id, name, number }) => (
            <ContactItem
              key={id}
              name={name}
              number={number}
              handleClickDelete={() => {
                handleClickDelete(id);
              }}
            />
          ))}
        </ul>
      )}
    </div>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ).isRequired,
  handleClickDelete: PropTypes.func.isRequired,
};
