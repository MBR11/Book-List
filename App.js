import React from 'react';
// import logo from './logo.svg';
import './App.css';

const h2style ={
  color:'red'
}

const h4style={
  color:'green',
  font:'lead'
}

function App() {
  return (
    <div>
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}

        <img src="https://images-na.ssl-images-amazon.com/images/I/71N4oeWwYlL._AC_UL200_SR200,200_.jpg" alt="bookimg"/>
        <h2 style={h2style}>The Wonkey Donkey</h2>
        <h4 style={h4style}>by    craig     smith</h4>
        

    </div>
  );
}

export default App;
