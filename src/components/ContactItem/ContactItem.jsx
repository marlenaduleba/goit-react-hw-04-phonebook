import React, {Component} from 'react';
import PropTypes from 'prop-types';

import css from './ContactItem.module.css';

export default class ContactItem extends Component {
  static propTypes = {
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
    handleClickDelete: PropTypes.func.isRequired,
  };

  render() {
    return (
      <li className={css.item} >
        <span className={css.name}>{this.props.name}</span>: <span>{this.props.number}</span>
        <button className={css.btn} onClick={this.props.handleClickDelete} type="button">
          Delete
        </button>
      </li>
    );
  }
}
