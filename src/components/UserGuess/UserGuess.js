import React, {useEffect} from 'react';
import {range} from "../../utils";
import {checkGuess} from "../../game-helpers";

function UserGuess({guess, answer, handleGameOver}) {
    function compareIndexes(index) {
        if (guess.title) {
            const resultOfCheck = checkGuess(guess.title, answer)
            return `${resultOfCheck[index].status} cell`
        }
        return `cell`
    }

    if (guess.title) {
        useEffect(() => {
            if (guess.title === answer) {
                handleGameOver()
            }

        }, [])
    }

    return <>
        {range(0, 5).map((column, index) => {
            return <span key={guess.id + index}
                         className={compareIndexes(index)}>
                        {guess.title[index]}</span>
        })}

    </>;
}

export default UserGuess;
