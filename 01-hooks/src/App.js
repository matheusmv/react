import './App.css';
import { Counter } from './components/Counter';
import { Input } from './components/Input';
import { Logo } from './components/Logo';
import { Posts } from './components/Posts';
import { ThemedButton } from './components/ThemedButton';
import { TodoList } from './components/TodoList';

import { ColorTheme, themes } from './contexts/ColorTheme';

function App() {
  return (
    <ColorTheme.Provider value={themes.dark}>
      <div className="hooks-container">
        <Logo />
        <Counter initialCount={0} />
        <TodoList />
        <Posts />
        <Input />
        <ThemedButton message={'click'} />
      </div>
    </ColorTheme.Provider>
  );
}

export default App;
