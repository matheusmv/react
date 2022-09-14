import { createContext } from 'react';
import './App.css';
import { Counter } from './components/Counter';
import { Input } from './components/Input';
import { Logo } from './components/Logo';
import { Posts } from './components/Posts';
import { ThemedButton } from './components/ThemedButton';
import { TodoList } from './components/TodoList';

const themes = {
  light: {
    foreground: '#000000',
    background: '#eeeeee',
  },
  dark: {
    foreground: '#ffffff',
    background: '#222222',
  },
};

export const ThemeContext = createContext(themes.light);

function App() {
  return (
    <ThemeContext.Provider value={themes.dark}>
      <div className="hooks-container">
        <Logo />
        <Counter initialCount={0} />
        <TodoList />
        <Posts />
        <Input />
        <ThemedButton message={'click'} />
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
