import React from 'react';
import {range} from "../../utils";
import {checkGuess} from "../../game-helpers";

function UserGuess({guess, answer, handleGameOver}) {
    function compareIndexes(index) {
        if (guess.title) {
            let userWon = true;
            const resultOfCheck = checkGuess(guess.title, answer)
            for (let status in resultOfCheck){
                console.log(resultOfCheck[status])
                if (resultOfCheck[status] !== 'correct') {
                    userWon = false
                }
            }
            if (userWon) {
                console.log(userWon)
                handleGameOver()
            }
            return `${resultOfCheck[index].status} cell`
        }
        return `cell`
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
