import React from 'react';
import PropTypes from 'prop-types';

import LifeCounter from './LifeCounter';

import '../styles/PlayerNameTag.css';

class PlayerNameTag extends React.Component {

  render() {
    const { profilePicture, name, isActivePlayer, lifeTotal } = this.props;

    const playerJSX = isActivePlayer ? `${name} *` : name;
    const switchButtonJSX = <button type="button">Switch Player</button>;
    const dropdownJSX = isActivePlayer ? <LifeCounter lifeTotal={lifeTotal} /> : null;
    return (
      <div className="dropdown">
        <div className="player-nametag">
          <img className="player-avatar" src={profilePicture} alt="Profile" />
          <div className="player-name">{playerJSX}</div>
          <div className="player-life-total">{`(${lifeTotal})`}</div>
        </div>
        <div className="dropdown-content">
          {switchButtonJSX}
          {dropdownJSX}
        </div>
      </div>
    );
  }
}

PlayerNameTag.propTypes = {
  profilePicture: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isActivePlayer: PropTypes.bool.isRequired,
  lifeTotal: PropTypes.number.isRequired,
};

export default PlayerNameTag;
