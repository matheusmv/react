import './App.css';
import { Counter } from './components/Counter';
import { Input } from './components/Input';
import { Logo } from './components/Logo';
import { Posts } from './components/Posts';
import { TodoList } from './components/TodoList';

function App() {
  return (
    <div className="hooks-container">
      <Logo />
      <Counter initialCount={0} />
      <TodoList />
      <Posts />
      <Input />
    </div>
  );
}

export default App;
