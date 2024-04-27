import React, {useState} from 'react';

import {sample} from '../../utils';
import {WORDS} from '../../data';
import GuessInput from "../GuessInput";
import UserGuess from "../UserGuess";
import {NUM_OF_GUESSES_ALLOWED} from "../../constants";
import {range} from "../../utils";
import GameOver from "../GameOver";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({answer});

const guessesObj = [
    {title: '', id: Math.random()},
    {title: '', id: Math.random()},
    {title: '', id: Math.random()},
    {title: '', id: Math.random()},
    {title: '', id: Math.random()},
    {title: '', id: Math.random()},
]

function Game() {
    const [guesses, setGuesses] = useState(guessesObj);
    const [currentRound, setCurrentRound] = useState(0);
    const [gameOver, setGameOver] = useState('lost')

    function addGuess(text) {
        setGuesses(prevGuesses => {
            const newGuess = {title: text, id: Math.random()}
            const newGuesses = [...prevGuesses]
            newGuesses[currentRound] = newGuess;
            setCurrentRound(prevRound => prevRound + 1)
            return newGuesses;
        })
    }

    function handleGameOver() {
        setGameOver('win')
    }


    return (
        <div className="game-wrapper">
            <div className="guess-results">
                {range(0, NUM_OF_GUESSES_ALLOWED).map((row, rowIndex) => {
                    return <p key={guesses[rowIndex].id} className={'guess'}>
                        <UserGuess handleGameOver={handleGameOver} guess={guesses[rowIndex]} answer={answer}/>
                    </p>
                })}
            </div>
            <div className="guess-results">
            </div>
            <GuessInput addGuess={addGuess} />
            <GameOver type={gameOver} answer={answer}/>
        </div>
    );
}

export default Game;
