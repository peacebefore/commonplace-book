import styled from 'styled-components';
import Card from '../card/card.component';
import QUOTE_DATA from '../../utils/quote-data';

const StyledRoot = styled.div`
  padding: 50px 12px;
`;

const StyledContainer = styled.div``;

const CardList = QUOTE_DATA.map((quotes) => {
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
  );
});

export default CardList;
