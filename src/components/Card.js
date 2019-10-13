import React, { useState } from 'react';

function Card(props) {

    const { character } = props,
    [isFlipped, setIsFlipped] = useState(character.flipped);

    function flipCharacter() {
        setIsFlipped(!isFlipped)
    }

    return (
        <div className={"character flip-box " + (isFlipped ? "flipped" : "")} onClick={flipCharacter}>
            <div className="flip-box-inner" >
                <div className="flip-box-front" style={{ backgroundImage: "url(" + character.url + ")" }}>
                </div>
                <div className="flip-box-back" >
                    <h2 >{character.name}</h2>
                </div >
            </div>
        </div >
    );
}

export default Card;
