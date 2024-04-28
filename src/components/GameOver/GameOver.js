import React from 'react';

function GameOver({type, attempts, answer}) {
    return <div className={type === 'win' ? 'happy banner' : 'sad banner'}>
        {
            type === 'win' &&
            <p>
                <strong>Congratulations!</strong> Got it in
                <strong> {attempts} guesses</strong>.
            </p>
        }
        {
            type === 'lost' &&
            <p>Sorry, the correct answer is <strong>{answer}</strong>.</p>
        }
    </div>;
}

export default GameOver;
