import React from 'react';

function MailBox(props){
    const messagesnonlus = props.messagesnonlus;
    return(
        <div>
        <h1>Hello!</h1>
        {messagesnonlus.length>0 &&
            <h2>
                Vous avez {messagesnonlus.length} message non lus.
            </h2>
        }
        </div>
    );
}



export default MailBox;