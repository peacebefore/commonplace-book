import QuotesList from '../../components/readings-components/quotes/quotes';
import styled from 'styled-components';
import background from '../../rebecca-g0GUAWtOh1c-unsplash.jpg';

const StyledContainer = styled.div`
  background-image: url(${background});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  background-attachment: fixed;
`

const Readings = () => {
  return (
    <StyledContainer className='readings'>
      {QuotesList}
    </StyledContainer>
  );
};

export default Readings;