import React from 'react'
import ReactCardFlip from 'react-card-flip';
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
          </Card.Title>
          <h6 onClick={this.handleClick} style={{ cursor: "pointer", float: "right" }}>View Recipe</h6>
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
