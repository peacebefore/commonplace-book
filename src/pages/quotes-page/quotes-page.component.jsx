import CardList from '../../components/card-list/card-list.component';
import './quotes-page.styles.js';
import { QuotesContainer } from './quotes-page.styles';
import { NavBar } from '../../components/nav-bar/nav-bar.component';

export const QuotesPage = () => {
  return (
    <QuotesContainer>
      <NavBar />
      {CardList}
    </QuotesContainer>
  );
};
