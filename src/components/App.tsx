import React, { createContext, useContext, useState } from 'react';
import './App.css';
import { Listing } from './Listing';
import { Header } from './Header';
import { games } from '../constants/games';
import { getGamesFromNextWeek, getGamesFromNow, getGamesFromThisWeek, getGamesFromToday, getGamesFromTomorrow, getGamesPossiblyOnLive } from '../helpers';
import { Game } from '../constants/types';

export const defaulState = {
  paginationIndex: 0,
  activeFilters: {
    "hoje": false,
    "amanha": false,
    "esta-semana": false,
    "proxima-semana": false
  },
  games,
  liveGames: [],
}

export const AppContext = createContext({
  ...defaulState,
  activeFilters: {
    ...defaulState.activeFilters,
    "hoje": true
  }
});

function App() {
  const [state, setState] = useState(defaulState)

  const getGames = (games: Game[]) => {
    if (state.activeFilters["hoje"]) return getGamesFromToday(games);
    if (state.activeFilters["amanha"]) return getGamesFromTomorrow(games);
    if (state.activeFilters["esta-semana"]) return getGamesFromThisWeek(games);
    if (state.activeFilters["proxima-semana"]) return getGamesFromNextWeek(games);
    return getGamesFromNow(games)
  }

  return (
    <div className="App">
      {/* @ts-ignore*/}
      <AppContext.Provider value={{ state: { ...state, games: getGames(state.games), liveGames: getGamesPossiblyOnLive(state.games) }, setState }}>
        <Header />
        <Listing />
      </AppContext.Provider>
    </div>
  );
}

export default App;
