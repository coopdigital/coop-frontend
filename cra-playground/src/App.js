import logo from './logo.svg';
import './App.css';
import { EditorialCard } from '@coopdigital/component-editorial-card';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Hello from CRA</h1>
        <EditorialCard title="Editorial Card" text="some text blurb to fill the editorial card content goes here." />
      </header>
    </div>
  );
}

export default App;
