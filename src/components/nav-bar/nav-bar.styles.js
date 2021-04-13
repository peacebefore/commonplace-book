import styled from 'styled-components';

export const NavContainer = styled.div`
  position: fixed;
  top: ${(props) => props.theme.space[0]};
  width: 100%;
`;

export const NavList = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
  margin: ${(props) => props.theme.space[0]};
  padding: ${(props) => props.theme.lineHeights.large};
  background-color: rgba(195, 236, 156);
`;

export const NavListItem = styled.li`
  display: inline;
`;

export const Logo = styled.h1`
  font-family: ${(props) => props.theme.fonts.heading};
  font-size: ${(props) => props.theme.fontSizes.h1};
`;
