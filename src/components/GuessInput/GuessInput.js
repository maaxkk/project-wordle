import React, {useEffect, useState} from 'react';

function GuessInput({addGuess}) {
    const [guess, setGuess] = useState('');
    function handleChange(event) {
        setGuess(prevGuess => event.target.value.toUpperCase())
    }
    function handleSubmit(event) {
        event.preventDefault();
        addGuess(guess)
        console.info({guess});
        setGuess('');
    }
    return  (
    <form onSubmit={handleSubmit} className="guess-input-wrapper">
        <label htmlFor="guess-input">Enter guess:</label>
        <input id="guess-input" maxLength={5} pattern="[A-Za-z]{5,}" type="text" value={guess} onChange={handleChange}/>
    </form>
    )
}

export default GuessInput;
