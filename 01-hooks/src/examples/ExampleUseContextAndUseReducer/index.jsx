import P from 'prop-types';

import { createContext, useContext, useReducer } from 'react';

import { Button } from '../../components/Button';

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
    <div className="component-card">
      <h1 className="card--content">{titles[selectedTitle]}</h1>
      <Button clickFun={changeTitle} text={'change title'} />
    </div>
  );
};

export const ExampleUseContextAndUseReducer = () => {
  return (
    <Post2sAppContext>
      <Title />
    </Post2sAppContext>
  );
};
