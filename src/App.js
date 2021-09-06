import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import Home from './home/Home';
import Header from './layout/header/Header';
import Footer from './layout/footer/Footer';
import UserProfile from '../src/player/UserProfile';
import NotFound from '../src/layout/notFound/NotFound';
import PlayerId from './player/PlayerId';
import PlayerSearch from './player/PlayerSearch';
import PlayerDeaths from './player/PlayerDeaths';

import './App.css';
import '../src/layout/header/Header.css';
import '../src/layout/footer/Footer.css';

export default function App() {
  return (
    <>
      <Header />
      <Footer />
      <Switch>
        <Route exact={true} path="/">
          <Redirect to={'/home'} />
        </Route>
        <Route exact={true} path="/userProfile">
          <UserProfile />
        </Route>
        <Route exact={true} path="/playerId">
          <PlayerId />
        </Route>
        <Route path="/playerSearch">
          <PlayerSearch />
        </Route>
        <Route path="/home">
          <Home />
        </Route>
        <Route path="/playerDeaths">
          <PlayerDeaths />
        </Route>
        <Route>
          <NotFound />
        </Route>
      </Switch>
    </>
  );
}
