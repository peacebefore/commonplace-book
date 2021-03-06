// includes quotes, books I've read, things I want to read or watch, things I want to keep for reference (resources)

import QuoteApp from '../../components/readings-components/quotes/containers/app';
import './readings.styles.scss';

const Readings = () => {
  return (
    <div className='readings'>
      <QuoteApp />
    </div>
  );
};

export default Readings;