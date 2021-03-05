import './App.css';
import Sidebar from './components/sidebar/sidebar.component';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Overview from './pages/overview';
import { Reports, ReportsOne, ReportsTwo, ReportsThree } from './pages/reports';
import Team from './pages/team';

function App() {
  return (
    <Router>
      <Sidebar />
      <Switch>
        <Route path='/overview' exact component={Overview} />
        <Route path='/reports' exact component={Reports} />
        <Route path='/reports/reports1' exact component={ReportsOne} />
        <Route path='/reports/reports2' exact component={ReportsTwo} />
        <Route path='/reports/reports3' exact component={ReportsThree} />
        <Route path='/team' exact component={Team} />
      </Switch>
    </Router>
  );
}

export default App;