import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Voiture from './Voiture';
import Garage from './Garage';
import Game from './Game';
import * as serviceWorker from './serviceWorker';

// Syntaxe JSX - Javascript XML, elle nous permet d'écrire de l'HTML en React. C'est une simplification.
// {execution de l'expression / la partie}
const myelement = (<p>Coucou voici mon html</p>);

// <App /> = XML
// ReactDOM.render(<App />, document.getElementById('root'));
// ReactDOM.render(myelement, document.getElementById('popo'));
// ReactDOM.render(<Voiture color="rouge"/>, document.getElementById('popo'));
ReactDOM.render(<Game/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
