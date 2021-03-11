import './App.scss';
import Navbar from './components/navbar/navbar.component';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Budget from './pages/budget/budget.component';
import Homepage from './pages/homepage/homepage.component';
import Goals from './pages/goals/goals.component';
import Ideas from './pages/ideas/ideas.component';
import Journal from './pages/journal/journal.component';
import Readings from './pages/readings/readings.component';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/homepage' exact component={Homepage} />
          <Route path='/budget' exact component={Budget} />
          <Route path='/goals' exact component={Goals} />
          <Route path='/journal' exact component={Journal} />
          <Route path='/ideas' exact component={Ideas} />
          <Route path='/readings' exact component={Readings} />
        </Switch>
      </Router>
    </>
  );
}

export default App;