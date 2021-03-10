import Card from 'react-bootstrap/Card';
import QUOTE_DATA from './quote-data';
import './quotes.styles.scss';

const QuotesList = QUOTE_DATA.map( (quotes) => {
  return (
    <Card key = {quotes.id}>
      <Card.Body>
        <Card.Title>{quotes.source}</Card.Title>
        <Card.Text>
          <span>{quotes.text}</span>
          <span>{quotes.author}</span>
        </Card.Text>
      </Card.Body>
    </Card>
  );
});



export default QuotesList;