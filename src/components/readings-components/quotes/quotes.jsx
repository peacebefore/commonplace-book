import styled from 'styled-components';
import Card from './card.component';
import QUOTE_DATA from './quote-data';


const StyledRoot = styled.div`
  padding: 50px 12px;
`

const StyledContainer = styled.div`
  max-width: 550px;
  width: 100%;
  margin: auto;
`

export const QuotesList = QUOTE_DATA.map((quotes) => {
    return (
      <StyledRoot>
        <StyledContainer>
          <Card 
            key={quotes.id}
            source={quotes.source}
            author={quotes.author}
            text={quotes.text}
          />
        </StyledContainer>
      </StyledRoot>
    )
});