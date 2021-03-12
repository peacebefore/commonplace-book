import styled from 'styled-components';

const StyledContainer = styled.div`
  border: 1px solid;
  padding: 25px 12px 18px;
  background: rgba(247, 83, 118, 0.2);
  font-family: 'Merienda One';
`
const Source = styled.h2`
  color: #520012;
  font-weight: 300;
  @media (max-width: 500px) {
    font-size: 1rem;
  }
`
const Author = styled.div`
  color: #520012;
  font-weight: 300;
  margin: 6px 0;
  @media (max-width: 500px) {
    font-size: 0.8rem;
  }
`
const Text = styled.p`
  color: #520012;
  font-weight: 300;
  @media (max-width: 500px) {
    font-size: 0.75rem;
  }
`

const Card = ({
  source,
  author,
  text
}) => (
  <StyledContainer>
    <Source>{source}</Source>
    <Author>{author}</Author>
    <Text>{text}</Text>
  </StyledContainer>
);

export default Card;