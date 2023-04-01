import React, { Component } from 'react';
import PropTypes from 'prop-types';

import css from './Section.module.css';

export default class Section extends Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    children: PropTypes.oneOfType([
      PropTypes.arrayOf(PropTypes.node),
      PropTypes.node,
    ]).isRequired,
  };
  render() {
    return (
      <section>
        <h2 className={css.title}>{this.props.title}</h2>
        {this.props.children}
      </section>
    );
  }
}
