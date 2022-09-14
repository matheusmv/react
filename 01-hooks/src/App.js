import './App.css';
import { Counter } from './components/Counter';
import { Input } from './components/Input';
import { Logo } from './components/Logo';
import { Posts } from './components/Posts';
import { ThemedButton } from './components/ThemedButton';
import { TodoList } from './components/TodoList';
import { TodoList2 } from './components/TodoList2';
import { AppContext } from './contexts/AppContext';

function App() {
  return (
    <AppContext>
      <div className="hooks-container">
        <Logo />
        <Counter initialCount={0} />
        <TodoList />
        <Posts />
        <Input />
        <ThemedButton message={'click'} />
        <TodoList2 />
      </div>
    </AppContext>
  );
}

export default App;
