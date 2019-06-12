import React from 'react';
import Board from './Board';



class Game extends React.Component{
    // Attributs

    constructor(props){
        super(props);
        this.state={
            history: [{squares: Array(9).fill(null)}],
            xIsNext: true,
            stepNumber: 0, // c'est le nombre d'étape
        }        
    }

    // Fonction qui va permettre d'aller à l'étape du jeu souhaitée... C'est celle ci qui nous permet de voyager dans le temps au moment voulu
    jumpTo(step){
        this.setState({
            stepNumber: step,
            xIsNext: (step % 2) === 0,
        })
    }


    handleClick(i){
        // History contient TOUS LES TABLEAUX D'ETATS PASSES
        // const history= this.state.history;
        const history = this.state.history.slice(0, this.state.stepNumber +1);
        // Current contient l'ETAT ACTUEL
        const current= history[history.length -1];

        const squares_copy= current.squares.slice();

        if(calculateWinner(squares_copy) || squares_copy[i]){
            return;
        }

        squares_copy[i]= this.state.xIsNext ? 'X' : 'O'; // ? = IF    : = ELSE
        this.setState({
            history: history.concat([{
                squares: squares_copy,
            }]),
            stepNumber: history.length,
            xIsNext : !this.state.xIsNext,
        });
    }


    // Méthodes
    render(){
        // History contient TOUS LES TABLEAUX D'ETATS PASSES
        const history = this.state.history;
        // Current contient l'ETAT ACTUEL
        const current= history[this.state.stepNumber];
        const winner= calculateWinner(current.squares);

        // Moves contient les différents "coups" de chaque joueur. Move 1 = le coup du numéro 1, Move 2 = coup 2 ..ect.. On va faire un mapping des différents coups avec les tableaux en fonction de l'avancement (move 1 sera mappé avec le tableau à l'état 1..ect)
        const moves = history.map((step, move)=>{
            const desc = move ? 'Aller à l etape #' + move : 'Aller à la situation initiale';
            // desc contient la description à afficher à l'écran sur le bouton à enclencher pour voyager dans le temps. A chaque appui sur le bouton on demandee l'état du Board au numéro de MOVE demandé
            return(
                <li key={move}>
                    <button onClick={() => this.jumpTo(move)}>{desc}</button>
                </li>
            )
        })

        let status; // Déclaration de la variable status
        if(winner){
            status="Le gagnant est : "+ winner;
        }
        else{
            status="Prochain joueur : "+(this.state.xIsNext ? 'X' : 'O');
        }


        return(
            <div className="game">
                <div className="game-board">
                    <Board squares={current.squares} onClick={(i) => this.handleClick(i)}/>
                </div>
                <div className="game-info">
                    <div>{status}</div>
                    <ol>{moves}</ol>
                </div>
            </div>
        );
    }

}

function calculateWinner(squares) {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }
    return null;
  }

export default Game;