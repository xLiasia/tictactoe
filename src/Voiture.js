import React from 'react';

// Création d'une classe voiture
// extends : on hérite de la classe Componant définie dans React
class Voiture extends React.Component{
    // Attributs



    // Méthodes
constructor(){
    super(); // Il prend le comportement du parent, execution du constructor qui est défini dans  React.Componant

    // Initialisation avec STATE
    this.state={color:"rouge", brand:"Renault", owner:"None", id:"WWWWW"};
}
render(){
    // return <h2>Coucou, je suis voiture {this.state.brand}, de couleur {this.state.color}, appartenant à {this.state.owner} et de plaque {this.state.id}</h2>
    return <h2>Coucou, je suis la voiture {this.props.brand},de couleur {this.props.color}, appartenant à {this.props.owner} et de plaque {this.props.id}</h2>
    }
}

export default Voiture;
