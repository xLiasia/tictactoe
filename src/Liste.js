import React from 'react';

function Liste(props){
    // Numbers contient un tableau de chiffres envoyés par le père [1,2,3,4,5]
    const numbers=props.numbers;

    const listItems= numbers.map((number) =>
    <li key={number.toString()}>
    {number}
    </li>
    );
    return(
        <ul>{listItems}</ul>
    );
}





export default Liste;