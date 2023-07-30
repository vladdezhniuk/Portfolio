import React from 'react';

import './index.scss';

export const Heading: React.FC<{
    message: string;
    separator?: string;
    className?: string;
    delayPerElement?: number;
}> = ({
    message,
    separator = ',',
    className = '',
    delayPerElement = 0.1
}) =>
        <h1 className={`heading ${className}`}>
            {message.split(separator).map((letter: string, index: number) =>
                <React.Fragment key={index}>
                    <span
                        className={`heading__element ${className && `${className}__letter`}`}
                        key={letter}
                        datatype={letter}
                        style={{ animationDelay: `${0.4 + delayPerElement * index}s` }}
                    >
                        {letter}
                    </span>
                    {letter.includes(',') && <br />}
                </React.Fragment>
            )}
        </h1>;

