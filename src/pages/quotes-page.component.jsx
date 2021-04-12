import CardList from '../components/CardList.component';
import './quotes-page.styles.js';
import { QuotesContainer, Nav, NavContainer } from './quotes-page.styles';

export const QuotesPage = () => {
  return (
    <QuotesContainer>
      <NavContainer>
        <Nav> CommonPlace Book </Nav>
      </NavContainer>
      {CardList}
    </QuotesContainer>
  );
};
