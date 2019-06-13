import React from 'react';

function Tick(){
    const element= (
        <div>
            <h1>Heure locale</h1>
            <h2>Il est actuellement {new Date().toLocaleTimeString()}</h2>
        </div>
    );
    return element;
}


export default Tick;