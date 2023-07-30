import React from 'react';

import { Heading } from '../../common/Heading';

import './index.scss';

export const Description: React.FC = () =>
        <div className="description">
                <Heading message="About Me" className="about-heading" />
                <p className="description__text">
                        Front-end developer with over 2 years of experience.
                </p>
                <br />
                <p className="description__text">
                        I create optimized, responsive websites using industry best practices.
                        Proficient in blockchain integration and committed to staying current with the latest technologies to ensure code efficiency.
                        My current stack is TS, JS, React.js, Redux, GraphQL, Ethers.js, Firebase, Vite, Webpack, HTML5, Styled Components and SCSS.
                </p>
                <br />
                <p className="description__text">
                        I enjoy delivering results and always do my best to achieve the goal.
                        Eager to expand my knowledge and skills to tackle new challenges.
                </p>
        </div>;
