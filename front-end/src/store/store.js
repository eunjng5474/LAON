import {createStore} from 'redux';


const initState = {
  gameId: null,
  gameStatus : null,
  inning : null,
  liveText : null,
  awayScore : null,
  homeScore : null,
  ballCount : null,
  strikeCount : null,
  outCount : null,
  homeNowBase1 : null,
  homeNowBase2 : null,
  homeNowBase3 : null,
  awayNowBase1 : null,
  awayNowBase2 : null,
  awayNowBase3 : null,
  awayTeamName : null,
  awayTeamLogo : null,
  homeTeamLogo : null,
  currentPage: null,
  slideFromDirection: 'left',
}

const pageOrder = [
  '/',
  '/seat',
  '/seat/away',
  '/seat/home',
  '/section',
  '/section/section_detail',
  '/match',
  '/facilities',
  '/navigation',
]

function reducer(state=initState, action) {
  if (action.type === 'SET_MATCH') {
    let newGameId = action.gameId
    return {
      ...state,
      gameId : newGameId
    }
  }
  if (action.type === 'SET_STATUS') {
    let newGameStatus = action.gameStatus
    return {
      ...state,
      gameStatus : newGameStatus
    }
  }
  if (action.type === 'SET_INNING'){
    let newInning = action.inning
    return {
      ...state,
      inning : newInning
    }
  }
  if (action.type === 'SET_LIVETEXT'){
    let newLiveText = action.liveText
    return {
      ...state,
      liveText : newLiveText
    }
  }
  if (action.type === 'SET_AWAY_SCORE'){
    let newAwayScore = action.awayScore
    return {
      ...state,
      awayScore : newAwayScore
    }
  }
  if (action.type === 'SET_HOME_SCORE'){
    let newHomeScore = action.homeScore
    return {
      ...state,
      homeScore : newHomeScore
    }
  }
  if (action.type === 'SET_BALL_COUNT'){
    let newBallCount = action.ballCount
    return {
      ...state,
      ballCount : newBallCount
    }
  }
  if (action.type === 'SET_OUT_COUNT'){
    let newOutCount = action.outCount
    return {
      ...state,
      outCount : newOutCount
    }
  }
  if (action.type === 'SET_STRIKE_COUNT'){
    let newStrikeCount = action.strikeCount
    return {
      ...state,
      strikeCount : newStrikeCount
    }
  }
  if (action.type === 'SET_HOME_BASE1'){
    let newHomeNowBase1 = action.homeNowBase1
    return {
      ...state,
      homeNowBase1 : newHomeNowBase1
    }
  }
  if (action.type === 'SET_HOME_BASE2'){
    let newHomeNowBase2 = action.homeNowBase2
    return {
      ...state,
      homeNowBase2 : newHomeNowBase2
    }
  }
  if (action.type === 'SET_HOME_BASE3'){
    let newHomeNowBase3 = action.homeNowBase3
    return {
      ...state,
      homeNowBase3 : newHomeNowBase3
    }
  }
  if (action.type === 'SET_AWAY_BASE1'){
    let newAwayNowBase1 = action.awayNowBase1
    return {
      ...state,
      awayNowBase1 : newAwayNowBase1
    }
  }
  if (action.type === 'SET_AWAY_BASE2'){
    let newAwayNowBase2 = action.awayNowBase2
    return {
      ...state,
      awayNowBase2 : newAwayNowBase2
    }
  }
  if (action.type === 'SET_AWAY_BASE3'){
    let newAwayNowBase3 = action.awayNowBase3
    return {
      ...state,
      awayNowBase3 : newAwayNowBase3
    }
  }
  if (action.type === 'SET_AWAY_TEAM_NAME'){
    let newAwayTeamName = action.awayTeamName
    return {
      ...state,
      awayTeamName : newAwayTeamName
    }
  }
  if (action.type === 'SET_AWAY_TEAM_LOGO'){
    let newAwayTeamLogo = action.awayTeamLogo
    return {
      ...state,
      awayTeamLogo : newAwayTeamLogo
    }
  }
  if (action.type === 'SET_HOME_TEAM_LOGO'){
    let newHomeTeamLogo = action.homeTeamLogo
    return {
      ...state,
      homeTeamLogo : newHomeTeamLogo
    }
  }
  if (action.type === 'ROUTE_CHANGE') {
    let pathname = action.payload;
    let slideFromDirection = 'right';

    if (!pathname in pageOrder) {
      console.log(1)
    }

    if (pageOrder.indexOf(state.currentPage) > pageOrder.indexOf(pathname)) {
      slideFromDirection = 'left';
    }
    return {
      ...state,
      currentPage: pathname,
      slideFromDirection: slideFromDirection,
      location: action.payload.location
    }
  }

  return state;
}

export default createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());