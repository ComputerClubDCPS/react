import logo from './logo.svg';
import './App.css';

function MyButton() {
  return (
    <button>I'm a button</button>
  );
}

function App() {
  return (
    <>
      <h1>Hi Guys </h1>
      <p>CLICK the <b>BUTTON</b></p>
      <MyButton/>
    </>
  );
}

export default App;
