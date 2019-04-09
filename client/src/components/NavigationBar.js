import React from 'react';
import PropTypes from 'prop-types';

import '../styles/NavigationBar.css';

import PlayerNameTag from './PlayerNameTag';

class NavigationBar extends React.Component {
  render() {
    const { players } = this.props;
    const playersJSX = players.map((player) => (
      <PlayerNameTag
        key={player.name}
        name={player.name}
        isActivePlayer={player.isActivePlayer}
        lifeTotal={player.lifeTotal}
        profilePicture={player.profilePicture}
      />
    ));
    return (
      <div className="navigation-bar">
        {playersJSX}
      </div>
    );
  }
}

NavigationBar.propTypes = {
  players: PropTypes.arrayOf(PropTypes.shape({
    profilePicture: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isActivePlayer: PropTypes.bool.isRequired,
    lifeTotal: PropTypes.number.isRequired,
  })).isRequired,
};

export default NavigationBar;
