// includes quotes, books I've read, things I want to read or watch, things I want to keep for reference (resources)

import Quotes from '../../components/readings-components/quotes/quotes';
import './readings.styles.scss';

const Readings = () => {
  return (
    <div className='readings'>
      <Quotes />
    </div>
  );
};

export default Readings;