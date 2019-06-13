import React from 'react';

class Clock extends React.Component{

    // Première fonction qui s'execute pour CREER le composant -> C'est celle qui le contruit
    constructor(props){
        super(props);
        this.state={
            date: new Date()
        };
    }

    // La fonction qui affiche l'HTML sur l'écran, To Render = afficher en anglais
    render(){
    return(
        <div>
            <h1>Heure locale</h1>
            <h2>Il est actuellement {this.state.date.toLocaleTimeString()}</h2>
        </div>  
    )};

    // Une fois que l'affichagge (render) à lieu, la fonction suivante s'execute directement
    // ComponentDidMount = Le composant vient de se mettre en place
    componentDidMount(){
        this.timerID = setInterval(() =>this.tictac(),1000);
    }


    // Voici une fonction qui permet de mettre à jour la date dans l'état (this.state.date)
    // ATTENTION ! Qui dit mise à jours de l'état dit :setState
    tictac(){
        this.setState({
            date: new Date()
        });
    }

    // Juste avant de finir le lifecycle et de quitter le composant, nous effaçons le contenu de l'intervalle de temps

    componentWillMount(){
        clearInterval(this.timerID);
    }
}




export default Clock;