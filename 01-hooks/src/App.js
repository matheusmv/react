import './App.css';
import { Counter } from './components/Counter';
import { Logo } from './components/Logo';
import { TodoList } from './components/TodoList';

function App() {
  return (
    <div className="hooks-container">
      <Logo />
      <Counter initialCount={0} />
      <TodoList />
    </div>
  );
}

export default App;
