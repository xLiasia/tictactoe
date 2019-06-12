import React from 'react';

class Square extends React.Component{
    
    // Attributs
    constructor(props){
        super(props);
        this.state={
            valeur:null,
        }
    }

    // Méthodes
    render(){
        return(                                       
            // onClick ={function(){alerte('click');}}
            <button className="square" onClick={() => this.props.onClick()}>
                {this.props.valeur}
            </button>
        );
    }
}

export default Square;