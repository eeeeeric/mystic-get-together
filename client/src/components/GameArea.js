import React, { Component } from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import {
  Jumbotron,
  Container,
  Row,
  Col,
  Button,
  ButtonGroup,
} from 'reactstrap';

import Card from './Card.js';

import NavigationBar from './NavigationBar';
import Sidebar from './Sidebar';

import '../styles/GameArea.css';
import '../styles/Card.css';
import { Zones } from '../constants.js';

class GameArea extends Component {
  constructor(props) {
    super(props);

    const { cards } = this.props;
    this.state = {
      life: 0,
      cards,
      top_row: [],
      bottom_row: [],
      isToggleSidebarOn: false,
    };

    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    const { cards } = nextProps;
    this.setState({
      cards,
    });
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

  lifeComponent() {
    return (
      <Row>
        <Col className="d-inline-flex">
          <h5>Life: </h5> <h5 className="">{this.state.life}</h5>
        </Col>
        <Col xs="12" className="d-inline-flex">
          <ButtonGroup className="d-flex" size="sm">
            <Button
              outline
              color="success"
              onClick={() => this.increment(1)}
              type="submit"
            >
              +1
            </Button>
            <Button
              outline
              color="warning"
              onClick={() => this.decrement(1)}
              type="submit"
              block
            >
              -1
            </Button>
          </ButtonGroup>
        </Col>
        <Col className="d-inline-flex">
          <ButtonGroup className="d-flex" size="sm">
            <Button
              outline
              color="primary"
              onClick={() => this.increment(5)}
              type="submit"
            >
              +5
            </Button>
            <Button
              outline
              color="danger"
              onClick={() => this.decrement(5)}
              type="submit"
              block
            >
              -5
            </Button>
          </ButtonGroup>
        </Col>
      </Row>
    );
  }

  render() {
    const { cards, life, isToggleSidebarOn } = this.state;
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

GameArea.propTypes = {
  cards: PropTypes.array.isRequired,
};

export default GameArea;
