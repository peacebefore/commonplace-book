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

// To DOs:
// add a button that creates a new card component where you can enter a quote, save it, and add it to the json file. new quotes should be added at the top of the page. will most likely be added at the bottom of the json file though...
// edit existing quotes and save changes to the json file
// separate out the nav into a separate component
// add the search option
// add link to more info about each quote
// have the text show in the correct format (not as a paragraph but as a poem)
