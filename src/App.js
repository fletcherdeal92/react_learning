import React from 'react';
import './App.css';

let defaultStyle = {
  color: '#fff'
}

function Aggregate() {
  return(
    <div style={{...defaultStyle, width: '40%', display: 'inline-block'}}>
    <h2>Number Text</h2>
    </div>
  );
}

function Filter() {
  return(
    <div style={{defaultStyle}}>
      <img/>
      <input type="text"/>
    </div>
  );
}

function PLaylist() {
  return(
    <div style={{...defaultStyle, display: 'inline-block', width: '25%'}}>
      <img/>
      <h3>Playlist Name</h3>
      <ul>
        <li>Song 1</li>
        <li>Song 2</li>
        <li>Song 3</li>
      </ul>
    </div>
  );
}

function App() {

  return (
    <div className="App">
      <h1>Title</h1>
      <Aggregate />
      <Aggregate />
      <Filter />
      <PLaylist />
      <PLaylist />
      <PLaylist />
    </div>
  );
}

export default App;
