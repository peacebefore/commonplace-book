import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import { NavContainer, NavList, NavListItem } from './nav-bar.styles';

import { QuotesPage } from '../../pages/quotes-page/quotes-page.component';
import { Home } from '../../pages/home/home.component';

export const NavBar = () => {
  return (
    <NavContainer>
      <Router>
        <div>
          <nav>
            <NavList>
              <NavListItem>
                <Link to='/'>Home</Link>
              </NavListItem>
              <NavListItem>
                <Link to='/quotes'>Quotes</Link>
              </NavListItem>
            </NavList>
          </nav>
        </div>

        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/quotes' component={QuotesPage} />
        </Switch>
      </Router>
    </NavContainer>
  );
};
