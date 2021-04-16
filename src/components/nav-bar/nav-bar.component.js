import React, { useState } from 'react';
import { BrowserRouter as Router, Link, Switch, Route } from 'react-router-dom';

import { Container } from 'styled-container-component';
import { Button } from 'styled-button-component';
import { Navbar, NavbarLink } from 'styled-navbar-component';
import { Nav } from 'styled-nav-component';
import { Home } from '../../pages/home-page/home-page.component';
import { QuotesPage } from '../../pages/quotes-page/quotes-page.component';

export const NavbarLight = () => {
  const [hidden, setHidden] = useState(true);

  return (
    <Container>
      <Navbar expandSm light>
        <Router>
          <Nav start>
            <Link to='Home'>
              <NavbarLink light brand>
                CommonPlace Book
              </NavbarLink>
            </Link>
            <Nav end>
              <Button
                light
                outline
                toggleCollapse
                expandSm
                onClick={() => setHidden(!hidden)}
              >
                <span>&#9776;</span>
              </Button>
            </Nav>
          </Nav>
          <Nav start collapse expandSm hidden={hidden}>
            <Link to='Home'>
              <NavbarLink light active>
                Home
              </NavbarLink>
            </Link>
            <Link to='Quotes'>
              <NavbarLink light>Quotes</NavbarLink>
            </Link>
          </Nav>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/quotes' component={QuotesPage} />
          </Switch>
        </Router>
      </Navbar>
    </Container>
  );
};
