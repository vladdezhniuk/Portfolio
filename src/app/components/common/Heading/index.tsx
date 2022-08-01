import React from 'react';

import './index.scss';

export const Heading: React.FC<{ message: string; className?: string }> = ({ message, className = '' }) =>
    <h1 className={`heading ${className}`}>
        {message.split('').map((letter: string, index: number) =>
            <>
                <span
                    className={`heading__letter ${className && `${className}__letter`}`}
                    key={letter}
                    datatype={letter}
                    style={{ animationDelay: `${0.1 * index}s` }}
                >
                    {letter}
                </span>
                {letter === ',' && <br />}
            </>
        )}
    </h1>;

