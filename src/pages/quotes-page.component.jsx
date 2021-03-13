import QuotesList from '../components/quotes-components/quotes';
import styled from 'styled-components';
import background from '../components/quotes-components/rebecca-g0GUAWtOh1c-unsplash.jpg';

const StyledContainer = styled.div`
  background-image: url(${background});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  background-attachment: fixed;
`

const QuotesPage = () => {
  return (
    <StyledContainer className='readings'>
      {QuotesList}
    </StyledContainer>
  );
};

export default QuotesPage
;

// To DOs:
// add a button that creates a new card component where you can enter a quote, save it, and add it to the json file. new quotes should be added at the top of the page. will most likely be added at the bottom of the json file though...
// edit existing quotes and save changes to the json file