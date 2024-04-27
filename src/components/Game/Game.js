import React, {useState} from 'react';

import {sample} from '../../utils';
import {WORDS} from '../../data';
import GuessInput from "../GuessInput";
import UserGuess from "../UserGuess";
import {NUM_OF_GUESSES_ALLOWED} from "../../constants";
import {range} from "../../utils";

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

    function addGuess(text) {
        setGuesses(prevGuesses => {
            const newGuess = {title: text, id: Math.random()}
            const newGuesses = [...prevGuesses]
            newGuesses[currentRound] = newGuess;
            setCurrentRound(prevRound => prevRound + 1)
            return newGuesses;
        })
    }

    const guessesList = guesses.map(guess => (
        <UserGuess key={guess.id} guess={guess.title}/>
    ))


    return (
        <div className="game-wrapper">
            <div className="guess-results">
                {range(0, NUM_OF_GUESSES_ALLOWED).map((row, rowIndex) => {
                    return <p key={guesses[rowIndex].id} className={'guess'}>
                        {range(0, 5).map((column, columnIndex) => {
                                return <span key={guesses[rowIndex].id+columnIndex} className={'cell'}>{guesses[rowIndex].title[columnIndex]}</span>
                            })
                        }
                    </p>
                })}
            </div>
            <div className="guess-results">
                {/*{guessesList}*/}
            </div>
            <GuessInput addGuess={addGuess} />
        </div>
    );
}

export default Game;
