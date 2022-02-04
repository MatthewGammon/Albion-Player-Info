import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import Home from './components/home/Home';
import Header from './components/layout/header/Header';
import Footer from './components/layout/footer/Footer';
import UserProfile from './components/player/userProfile/UserProfile';
import NotFound from './components/layout/notFound/NotFound';
import PlayerId from './components/player/playerId/PlayerId';
import PlayerSearch from './components/player/playerSearch/PlayerSearch';
import PlayerKills from './components/player/playerKills/PlayerKills';
import PlayerDeaths from './components/player/playerDeaths/PlayerDeaths';
import BattleEvent from './components/battles/BattleEvent';

import './App.css';

export default function App() {
  return (
    <>
      <Header />
      <div className="app">
        <Switch>
          <Route exact={true} path="/">
            <Redirect to={'/home'} />
          </Route>
          <Route exact={true} path="/user-profile/:playerId">
            <UserProfile />
          </Route>
          <Route exact={true} path="/playerId">
            <PlayerId />
          </Route>
          <Route path="/search">
            <PlayerSearch />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/kills/:playerName/:playerId">
            <PlayerKills />
          </Route>
          <Route path="/deaths/:playerName/:playerId">
            <PlayerDeaths />
          </Route>
          <Route path="/event/:eventId">
            <BattleEvent />
          </Route>
          <Route>
            <NotFound />
          </Route>
        </Switch>
      </div>
      <Footer />
    </>
  );
}
