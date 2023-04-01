import React, { Component } from 'react';
import ContactItem from 'components/ContactItem/ContactItem';
import PropTypes from 'prop-types';

import css from './ContactList.module.css';

export default class ContactList extends Component {
  static propTypes = {
    contacts: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        number: PropTypes.string.isRequired,
      })
    ).isRequired,
    handleClickDelete: PropTypes.func.isRequired,
  };

  render() {
    return (
      <div>
       {this.props.contacts.length > 0 && (
          <ul className={css.list}>
             {this.props.contacts.map(({ id, name, number }) => (
              <ContactItem
                key={id}
                name={name}
                number={number}
                 handleClickDelete={() => {
                  this.props.handleClickDelete(id);
                }}
              />
            ))}
          </ul>
        )}
      </div>
    );
  }
}
