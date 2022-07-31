import React from 'react'

import './index.scss';

export const Background: React.FC = () => {
    const message = 'React Metamask Typescript Redux Ethers SCSS Redux-thunk '

    return (
        <div className="home-background" >
            <div className="home-background__wrapper">
                <div className='home-background__text'>{message.repeat(2)}</div>
                <div className='home-background__text'>{message.repeat(2)}</div>
            </div>
            <div className="home-background__wrapper">
                <div className='home-background__text-bordered'>{message.repeat(2)}</div>
                <div className='home-background__text-bordered'>{message.repeat(2)}</div>
            </div>
        </div>
    )
}
