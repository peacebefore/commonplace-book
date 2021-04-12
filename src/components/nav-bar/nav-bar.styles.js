import styled from 'styled-components';
import { fontSizes } from '../../styles/theme/fonts';
import { lineHeights, space } from '../../styles/theme/spacing';

export const NavContainer = styled.div`
  position: fixed;
  top: ${(props) => props.theme.space[0]};
  width: 100%;
`;

export const Nav = styled.h1`
  font-family: ${(props) => props.theme.fonts.heading};
  font-size: ${(props) => props.theme.fontSizes.h1};
  margin: ${(props) => props.theme.space[0]};
  padding: ${(props) => props.theme.lineHeights.copy};
  background-color: rgba(195, 236, 156);
`;
