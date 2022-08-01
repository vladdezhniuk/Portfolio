import React from 'react';

import { Heading } from '../../common/Heading';

import './index.scss';

export const Description: React.FC = () =>
    <div className="description">
        <Heading message="About Me" />
        <p className="description__text">
                An enthusiastic well-organized person with high attention to detail.
        </p>
        <br />
        <p className="description__text">
                I create optimized, responsive websites built using best practices.
                Also experienced with blockchain integration.
                My current stack is TS, JS, React, Redux, Redux-thunk, Ethers.js, Webpack, HTML5, and SCSS.
        </p>
        <br />
        <p className="description__text">
                I enjoy delivering results and always do my best to achieve the goal.
                Ready to take on new challenges, not afraid to learn, improve and get better.
        </p>
    </div>;

