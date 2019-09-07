import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Switch, Redirect, Route, NavLink} from 'react-router-dom';
import Media from "./Components/Media/";
import PageNotFound from "./Components/PageNotFound";
import Carousel from "./Components/Carousel";
import WelcomeScreen from './Components/WelcomeScreen';

const Header = () => (
  <div className="App">
    <header className="App-header">
      <nav className={'header-nav'}>
        <ul className="headerList">
          <li className="headerList__item-logo">
            <NavLink to={'/'} className={'App-logo-link'} >
              <img src={logo} className="App-logo" alt="logo" />
            </NavLink>
          </li>

          <li className="headerList__item">
            <NavLink to={'/'} activeClassName='active' >Home</NavLink>
          </li>
          <li className="headerList__item">
            <NavLink to={'/media'} activeClassName='active' >Media</NavLink>
          </li>
          <li className="headerList__item">
            <NavLink to={'/carousel'}activeClassName='active' >Carousel</NavLink>
          </li>
          <li className="headerList__item">
            <NavLink to={'/smth'}activeClassName='active' >Smth</NavLink>
          </li>
        </ul>
      </nav>
    </header>

    <main className="main">
      <Switch>
        <Route path={'/'} exact component={WelcomeScreen} />>
        <Route path={'/media'} component={Media} />
        <Route path={'/carousel'} component={Carousel} />
        <Route path={'/smth'}  component={PageNotFound} />
        {/*<Redirect to={'/'} />*/}
      </Switch>
    </main>
  </div>
);

export default Header;
