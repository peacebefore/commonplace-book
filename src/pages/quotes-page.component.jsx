import QuotesList from "../components/quotes-components/quotes";
import "./quotes-page.styles.js";
import { QuotesContainer, Nav, NavContainer } from "./quotes-page.styles";

const QuotesPage = () => {
  return (
    <QuotesContainer>
      <NavContainer>
        <Nav> CommonPlace Book </Nav>
      </NavContainer>
      {QuotesList}
    </QuotesContainer>
  );
};

export default QuotesPage;
