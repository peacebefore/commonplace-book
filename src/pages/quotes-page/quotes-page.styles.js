import styled from 'styled-components';
import background from '../../assets/rebecca-g0GUAWtOh1c-unsplash.jpg';

export const QuotesContainer = styled.div`
  background-image: url(${background});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  background-attachment: fixed;
  margin-top: ${(props) => props.theme.space[5]};
`;
