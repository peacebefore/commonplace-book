import styled from 'styled-components';
import background from './rebecca-g0GUAWtOh1c-unsplash.jpg';

export const QuotesContainer = styled.div`
  background-image: url(${background});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  background-attachment: fixed;
  margin-top: 75px;
`;

export const NavContainer = styled.div`
  position: fixed;
  top: 0;
  width: 100%;
`;

export const Nav = styled.h1`
  font-family: 'Handlee';
  font-size: 2rem;
  margin: 0px;
  padding: 20px;
  background-color: rgba(195, 236, 156);
`;
