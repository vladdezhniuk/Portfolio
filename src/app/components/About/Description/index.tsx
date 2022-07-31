import React from 'react'
import './index.scss';

export const Description: React.FC = () => {
    const title = 'About Me';
    return (
        <div className='description'>
            <h2 className='description__title'>
                {
                    title.split('').map((letter: string, index: number) =>
                        <span className='description__title__letter' key={letter} datatype={letter} style={{ animationDelay: `${0.1 * index}s` }}>
                            {letter}
                        </span>
                    )
                }
            </h2>
            <p className='description__text'>
                Enthusiastic well-organised person with high attention to detail.
            </p>
            <br />
            <p className='description__text'>
                I create optimized, repsonsive web sites which builded with using best practises.
                Also experienced with blockchain integration. My current stack is TS, JS, React, Redux, Redux-thunk ,
                Ethers.js, Webpack, HTML5, SCSS
            </p>
            <br />
            <p className='description__text'>
                I enjoy delivering results and always do my best to achieve the goal. Rady to take new challenges, not afraid to
                learn, improve and get better
            </p>
        </div>
    )
}
