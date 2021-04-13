import CardList from '../../components/card-list/card-list.component';
import './quotes-page.styles.js';
import { QuotesContainer } from './quotes-page.styles';

export const QuotesPage = () => {
  return <QuotesContainer>{CardList}</QuotesContainer>;
};
