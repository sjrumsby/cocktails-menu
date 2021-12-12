import Card from 'react-bootstrap/Card'
import Container from 'react-bootstrap/Container'
import Image from 'react-bootstrap/Image'
import data from './data.json';
import Cocktail from './Cocktail'

function App() {
  return (
    <div className="App">
      <Image fluid src="/banner.png" style={{ height: 'auto', maxWidth: '100%' }} />
      <Container style={{ maxWidth: "700px" }}>
        <h1>Cocktails</h1>
        <Container className="m-1">
          { data.cocktails.map((cocktail) => {
            return (
              <Cocktail cocktail={cocktail} />
            )
          })}
        </Container>
        <h1>Wine</h1>
        <Container className="m-1">
          { data.wines.map((wine) => {
            return (
              <Card key={wine.name} style={{ border: "0", paddingBottom: "1em" }}>
                <Card.Body>
                  <Card.Title>{wine.name}</Card.Title>
                  <Card.Text>{wine.description}</Card.Text>
                </Card.Body>
              </Card>
            )
          })}
        </Container>
        <h1>Beer</h1>
        <Container className="m-1">
          { data.beers.map((beer) => {
            return (
              <Card key={beer.name} style={{ border: "0", paddingBottom: "1em" }}>
                <Card.Body>
                  <Card.Title>{beer.name}</Card.Title>
                  <Card.Text>{beer.description}</Card.Text>
                </Card.Body>
              </Card>
            )
          })}
        </Container>
      </Container>
    </div>
  );
}

export default App;
