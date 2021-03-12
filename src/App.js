import './App.scss';
import Navbar from './components/navbar/navbar.component';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import BudgetPage from './pages/budget-page/budget-page.component';
import Homepage from './pages/homepage/homepage.component';
import GoalsPage from './pages/goals-page/goals-page.component';
import IdeasPage from './pages/ideas-page/ideas-page.component';
import JournalPage from './pages/journal-page/journal-page.component';
import QuotesPage from './pages/quotes-page/quotes-page.component';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Homepage} />
          <Route path='/homepage' exact component={Homepage} />
          <Route path='/budget' exact component={BudgetPage} />
          <Route path='/goals' exact component={GoalsPage} />
          <Route path='/journal' exact component={JournalPage} />
          <Route path='/ideas' exact component={IdeasPage} />
          <Route path='/quotes' exact component={QuotesPage} />
        </Switch>
      </Router>
    </>
  );
}

export default App;