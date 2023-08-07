const initialState = {
    gameId: null,
    gameStatus : null,
    inning : null,
    liveText : '경기 종료',
    awayScore : null,
    homeScore : null,
    ballCount : 3,
    strikeCount : 2,
    outCount : 2,
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
    destination: null,
    base1 : null,
    base2 : null,
    base3 : null,
  }


  function reducer(state=initialState, action) {
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
    if (action.type === 'SET_DESTINATION'){
      let newDestination = action.destination
      return {
        ...state,
        destination : newDestination
      }
    }  
    if (action.type === 'SET_BASE1_COUNT'){
      let newBase1 = action.base1
      return {
        ...state,
        base1 : newBase1
      }
    }
    if (action.type === 'SET_BASE2_COUNT'){
      let newBase2 = action.base2
      return {
        ...state,
        base2 : newBase2
      }
    }
    if (action.type === 'SET_BASE3_COUNT'){
      let newBase3 = action.base3
      return {
        ...state,
        base3 : newBase3
      }
    }
    if (action.type === 'SET_CURRENT_PAGE') {
      let newCurrentPage = action.currentPage
      return {
        ...state,
        currentPage: newCurrentPage
      }
    }
    return state;
  }

export default reducer;