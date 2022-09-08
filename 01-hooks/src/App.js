import './App.css';
import { Counter } from './components/Counter';
import { Logo } from './components/Logo';

function App() {
  return (
    <div className="hooks-container">
      <Logo />
      <Counter initialCount={0} />
    </div>
  );
}

export default App;
