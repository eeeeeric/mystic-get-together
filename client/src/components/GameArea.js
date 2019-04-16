import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  Jumbotron,
  Container,
  Row,
  Col,
  Button,
  ButtonGroup,
} from 'reactstrap';

import Battlefield from './Battlefield';
import NavigationBar from './NavigationBar';
import Sidebar from './Sidebar';
import { GameContext } from '../context/gameContext';

import '../styles/Card.css';

class GameArea extends Component {
  constructor(props) {
    super(props);
    this.state = {
      life: 0,
      isToggleSidebarOn: false,
    };

    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
  }

  increment(x) {
    this.setState({
      life: Number(this.state.life) + Number(x),
    });
  }

  decrement(x) {
    this.setState({
      life: Number(this.state.life) - Number(x),
    });
  }

  mainTitle() {
    return (
      <Jumbotron className="d-none d-sm-flex mh-100 pt-0 pb-0 mb-0">
        <div className="mh-100">
          <h6 className="display-5 mh-100">Main Board</h6>
          <p className="d-none d-sm-flex">View of your battlefield.</p>
        </div>
      </Jumbotron>
    );
  }

  handleToggleSidebarClick() {
    this.setState({
      isToggleSidebarOn: !this.state.isToggleSidebarOn,
    });
  }

  render() {
    const { life, isToggleSidebarOn } = this.state;
    const { cards } = this.context.gameState;
    const FULL_LENGTH = 12;
    const SHORTER_LENGTH = 10;
    const battfieldFieldColumnLength = isToggleSidebarOn ? FULL_LENGTH : SHORTER_LENGTH;

    const players = [
      {
        name: 'Eric',
        profilePicture: 'https://img.scryfall.com/cards/art_crop/en/mma/183.jpg?1517813031',
        isActivePlayer: true,
        lifeTotal: 39,
      },
      {
        name: 'Andrew',
        profilePicture: 'https://img.scryfall.com/cards/art_crop/front/f/a/fa1190a4-3d7e-4500-991f-e36ec3d1d9dc.jpg?1538880646',
        isActivePlayer: false,
        lifeTotal: 82,
      },
      {
        name: 'Henry',
        profilePicture: 'https://img.scryfall.com/cards/art_crop/en/ths/85.jpg?1517813031',
        isActivePlayer: false,
        lifeTotal: 36,
      },
      {
        name: 'Anthony',
        profilePicture: 'https://img.scryfall.com/cards/art_crop/en/bng/156.jpg?1517813031',
        isActivePlayer: false,
        lifeTotal: 37,
      },
    ];
    console.log(this.context.gameState);

    return (
      <Container
        fluid
        className="main-container d-flex flex-column vh-100 mh-100 w-100 p-0 m-0"
      >
        <NavigationBar
          players={players}
        />
      </Container>
    );
  }
}

GameArea.contextType = GameContext;

GameArea.propTypes = {
  cards: PropTypes.array.isRequired,
};

export default GameArea;
