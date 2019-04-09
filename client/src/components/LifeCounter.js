import React from 'react';
import PropTypes from 'prop-types';

import '../styles/LifeCounter.css';


class LifeCounter extends React.Component {
  // constructor(props) {
  //   super(props);
  // }

  render() {
    const { lifeTotal } = this.props;

    return (
      <div className="life-counter">
        <button className="minus-one" type="button">-</button>
        <div>{lifeTotal}</div>
        <button className="plus-one" type="button">+</button>
      </div>
    );
  }
}

LifeCounter.propTypes = {
  lifeTotal: PropTypes.number.isRequired,
};

export default LifeCounter;
