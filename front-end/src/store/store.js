import {createStore} from 'redux';

const initState = {
  gameId: null,
}

function reducer(state=initState, action) {
  if (action.type === 'CREATE_PROCESS') {
    let newId = state.max_content_id+1
    let newContents = [
      ...state.contents, 
      {
        id: newId,
        title: action.title, 
        desc: action.desc
      }
    ];
    return {
      ...state,
      contents: newContents,
      max_content_id: newId,
      mode: 'READ',
      selected_content_id: newId
    }
  }
  return state;
}

export default createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());