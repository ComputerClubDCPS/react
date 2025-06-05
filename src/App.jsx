import logo from './logo.svg';
import './App.css';
import './Profiles.jsx';

function MyButton() {
  return (
    <button>I'm a button</button>
  );
}

function App() {
  return (
    <div className="app">
      <h1>Hi Guys </h1>
      <p>CLICK the <b>BUTTON</b></p>
      <MyButton/>
      <Profile/>
    </div>
  );
}

export default App;
