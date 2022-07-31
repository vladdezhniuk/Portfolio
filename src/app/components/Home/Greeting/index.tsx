import React from 'react'
import './index.scss';

export const Greeting: React.FC = () => {
    const greetingMessage = 'Hi, I`m Vlad, Front end developer';

    return (
        <h1 className='greeting'>
            {greetingMessage.split('').map((letter: string, index: number) =>
                <>
                    <span className='greeting__letter' key={letter} datatype={letter} style={{animationDelay: `${0.1 * index}s`}}>
                        {letter}
                    </span>
                    {letter === "," && <br />}
                </>
            )}
        </h1>
    )
}
