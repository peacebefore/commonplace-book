// includes quotes, books I've read, things I want to read or watch, things I want to keep for reference (resources)

import { QuotesList } from '../../components/readings-components/quotes/quotes';

const Readings = () => {
  return (
    <div className='readings'>
      {QuotesList}
    </div>
  );
};

export default Readings;