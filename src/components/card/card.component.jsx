import styled from 'styled-components';

const CardContainer = styled.div`
  padding: 25px 12px 18px;
  background: rgba(247, 83, 118, 0.4);
  font-family: ${(props) => props.theme.fonts.body};
  border-radius: 10px;
  border: 1px solid #733e3e;
  box-shadow: 0 4px 8px 4px rgba(0, 0, 0, 0.15);
`;
const Source = styled.h2`
  color: #520012;
  font-weight: 300;
  @media (max-width: 500px) {
    font-size: ${(props) => props.theme.fontSizes.title};
  }
`;
const Author = styled.div`
  color: #520012;
  font-weight: 300;
  margin: 6px 0;
  @media (max-width: 500px) {
    font-size: 0.8rem;
  }
`;
const Text = styled.p`
  color: #520012;
  font-weight: 300;
  @media (max-width: 500px) {
    font-size: 0.75rem;
  }
`;

const Card = ({ source, author, text }) => (
  <CardContainer>
    <Source>{source}</Source>
    <Author>{author}</Author>
    <Text>{text}</Text>
  </CardContainer>
);

export default Card;
