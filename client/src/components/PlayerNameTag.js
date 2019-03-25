import React from 'react';
import PropTypes from 'prop-types';

import '../styles/PlayerNameTag.css';

class PlayerNameTag extends React.Component {
//   constructor(props) {
//     super(props);
//   }

  render() {
    const { profilePicture, name, isActivePlayer, lifeTotal } = this.props;

    const playerJSX = isActivePlayer ? `${name} *` : name;
    return (
      <div className="player-nametag">
        <img className="player-avatar" src={profilePicture} alt="Profile" />
        <div className="player-name">{playerJSX}</div>
        <div className="player-life-total">{`(${lifeTotal})`}</div>
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
