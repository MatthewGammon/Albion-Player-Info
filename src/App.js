import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import Home from './home/Home';
import Header from './layout/header/Header';
import Footer from './layout/footer/Footer';
import UserProfile from './player/userProfile/UserProfile';
import NotFound from '../src/layout/notFound/NotFound';
import PlayerId from './player/playerId/PlayerId';
import PlayerSearch from './player/PlayerSearch';
import PlayerKills from './player/playerKills/PlayerKills';
import PlayerDeaths from './player/playerDeaths/PlayerDeaths';
import Battle from './battles/Battle';

import './App.css';
import '../src/layout/header/Header.css';
import '../src/layout/footer/Footer.css';

export default function App() {
  return (
    <div className="app">
      <div className="main">
        <Header />
        <Footer />
      </div>
      <Switch>
        <Route exact={true} path="/">
          <Redirect to={'/home'} />
        </Route>
        <Route exact={true} path="/userProfile/:playerId">
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
        <Route path="/playerKills/:playerId">
          <PlayerKills />
        </Route>
        <Route path="/playerDeaths/:playerId">
          <PlayerDeaths />
        </Route>
        <Route path="/battles/:battleId">
          <Battle />
        </Route>
        <Route>
          <NotFound />
        </Route>
      </Switch>
    </div>
  );
}
