import React from "react";
import QUOTE_DATA from './quotes.data';
import { useFetch } from "./hooks";

function Quotes() {
  const localQuotes = QUOTE_DATA;
  const [quotes] = useFetch(localQuotes);
  return (
    <>
      <h1>Quotes</h1>
      <ul>
        {quotes.map(({ id, text, author, source }) => (
          <li key={`quote-${id}`}>
            <span>{text}</span>
            <span>{author}</span>
            <span>{source}</span>
          </li>
        ))}
      </ul>
    </>
  );
}

export default Quotes;