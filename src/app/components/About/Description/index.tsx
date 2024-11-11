import React from 'react';

import { Heading } from '../../common/Heading';

import './index.scss';

export const Description: React.FC = () =>
        <div className="description">
                <Heading message="About Me" className="about-heading" />
                <p className="description__text">
                        Front-end developer with over 4 years of experience.
                </p>
                <br />
                <p className="description__text">
                        I create optimized, responsive, and scalable websites using industry best practices.
                        Proficient in blockchain development, including work on wallet applications, launchpad platforms, NFT platforms, and decentralized storage apps.
                        Strong collaborator with remote teams and experienced in mentoring developers and contributing to project estimations.
                        My current stack is TS, JS, React.js, Next.js, Redux, Wagmi, Viem, Ethers.js, Firebase, Vite, Webpack, HTML5, Styled Components and SCSS.
                </p>
                <br />
                <p className="description__text">
                        I enjoy delivering results and always do my best to achieve the goal.
                        Eager to expand my knowledge and skills to tackle new challenges.
                </p>
        </div>;
