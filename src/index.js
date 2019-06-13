import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Tick from './Tick';
import Clock from './Clock';
import Toggle from './Toggle';
import MailBox from './MailBox';
import LoginControl from './LoginControl';
import Liste from './Liste';
import Game from './Game';
import * as serviceWorker from './serviceWorker';


//function Tick2(){
//    const element= (
//        <div>
//            <h1>Heure locale</h1>
//            <h2>Il est actuellement {new Date().toLocaleTimeString()}</h2>
//        </div>
//    );
//    ReactDOM.render(element, document.getElementById('popo2'));
//}
    
// L'appel à la fonction Tick2 chaque seconde
//setInterval(Tick2, 1000);


// Syntaxe JSX - Javascript XML, elle nous permet d'écrire de l'HTML en React. C'est une simplification.
// {execution de l'expression / la partie}
const myelement = (<p>Coucou voici mon html</p>);

// <App /> = XML
ReactDOM.render(<LoginControl/>, document.getElementById('root2'));
ReactDOM.render(<Game/>, document.getElementById('root'));
ReactDOM.render(<Clock/>, document.getElementById('popo'));
ReactDOM.render(<Toggle/>, document.getElementById('popo2'));


const numbers= [4,9,3,8,2];
ReactDOM.render(<Liste numbers={numbers}/>, document.getElementById('root3'));

const messages=['Coucou, j espere que tu passe une bonne journée', 'Re ça va','Bye'];
ReactDOM.render(<MailBox messagesnonlus={messages}/>, document.getElementById('popo3'));


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
