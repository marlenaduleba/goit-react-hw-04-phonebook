import React, { Component } from 'react';
import PropTypes from 'prop-types';
import css from './Filter.module.css';

export default class Filter extends Component {
  static propTypes = {
    handleFilter: PropTypes.func.isRequired,
  };

  render() {
    return (
      <div >
        <label className={css.label}>
          Find contacts by name
          <input
            onChange={this.props.handleFilter}
            type="text"
            name="filter"
            title="Find contacts by name"
          />
        </label>
      </div>
    );
  }
}
