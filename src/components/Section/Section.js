import React from 'react';
import PropTypes from 'prop-types';
import css from './Section.module.css';

function Section({ children }) {
  return <section className={css.section}>{children}</section>;
}

export default Section;

Section.propTypes = {
  children: PropTypes.node.isRequired,
};
