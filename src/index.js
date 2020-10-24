import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

alert(`Welcome to this game !! 
This game consists of a 5 by 5 grid of lights.
When the game starts, a random number of these grids are switched on. 
Pressing any of the grids will toggle it and the four adjacent grids too.
The goal of the puzzle is to switch all the lights off !!`)

ReactDOM.render(<App />, document.getElementById('root'));

serviceWorker.unregister();
