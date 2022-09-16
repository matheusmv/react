import P from 'prop-types';

import { createContext, useContext, useReducer } from 'react';

const posts2State = {
  selectedTitle: 0,
  titles: ['Title 0', 'Title 1', 'Title 2', 'Title 3', 'Title 4', 'Title 5'],
};

const actions = {
  CHANGE_TITLE: 'CHANGE_TITLE',
};

const reducer = (state, action) => {
  const selectedTitle =
    state.selectedTitle < state.titles.length - 1 ? state.selectedTitle + 1 : 0;

  switch (action.type) {
    case actions.CHANGE_TITLE:
      return { ...state, selectedTitle };
    default:
      return { ...state };
  }
};

const Context = createContext({});
const Post2sAppContext = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, posts2State);

  const changeTitle = () => {
    dispatch({ type: actions.CHANGE_TITLE });
  };

  return (
    <Context.Provider value={{ state, changeTitle }}>
      {children}
    </Context.Provider>
  );
};

Post2sAppContext.propTypes = {
  children: P.node,
};

const Title = () => {
  const context = useContext(Context);

  const {
    state: { selectedTitle, titles },
    changeTitle,
  } = context;

  return (
    <div className="App">
      <header className="App-header">
        <h1 className="posts-container">{titles[selectedTitle]}</h1>
        <button onClick={changeTitle}>{'change title'}</button>
      </header>
    </div>
  );
};

export const Posts2 = () => {
  return (
    <Post2sAppContext>
      <Title />
    </Post2sAppContext>
  );
};
