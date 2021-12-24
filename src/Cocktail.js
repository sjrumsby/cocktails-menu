import React from 'react'
import ReactCardFlip from 'react-card-flip';
import Badge from 'react-bootstrap/Badge';
import Button from 'react-bootstrap/Button'
import Card from "react-bootstrap/Card";

class Cocktail extends React.Component {
  constructor() {
    super();
    this.state = {
      isFlipped: false
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    e.preventDefault();
    this.setState(prevState => ({ isFlipped: !prevState.isFlipped }));
  }

  render() {
    const { cocktail } = this.props;

    return (
      <Card key={cocktail.name} style={{ border: "0", marginBottom: "1em" }}>
        <Card.Body style={{ paddingBottom: 0, paddingTop: 0 }}>
          <Card.Title style={{ float: "left" }}>
            {cocktail.name}
            { !cocktail.availability ? 
              <Badge bg="danger" pill style={{ marginLeft: "1em"}}>Unavailable</Badge> 
              : null
            }
          </Card.Title>
          <Button style={{ float: "right" }} variant="secondary" onClick={this.handleClick}>View Recipe</Button>
        </Card.Body>
        <Card.Body style={{ paddingBottom: 0 }}>
          <ReactCardFlip isFlipped={this.state.isFlipped} flipDirection="horizontal">
            <Card.Text style={{ clear: "both" }}>{cocktail.ingredients.join(", ")}</Card.Text>
            <Card.Text style={{ clear: "both" }}>{cocktail.recipe}</Card.Text>
          </ReactCardFlip>
        </Card.Body>
      </Card>
    )
  }
}

export default Cocktail;
