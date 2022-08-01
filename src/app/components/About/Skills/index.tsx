import React, { useEffect, useState } from 'react';

import './index.scss';

class Skill {
    constructor(
        public name: string,
        public level: number,
        public color: string
    ) { }
}

export const Skills: React.FC = () => {
    const [levels, setLevels] = useState(new Array().fill(0, 0, 5));
    const skills = [
        new Skill('React', 90, '#9c3939'),
        new Skill('Redux', 90, '#18895c'),
        new Skill('Typescript', 90, '#653ac2'),
        new Skill('Ethers.js', 80, '#c75870'),
        new Skill('SCSS', 90, '#245713'),
        new Skill('HTML5', 90, '#7c2c5c'),
    ];

    useEffect(() => {
        const timeout = setTimeout(() => {
            setLevels(skills.map((skill: Skill) => skill.level));
        }, 1000);

        return () => { clearTimeout(timeout); };
    });

    return (
        <div className="skills">
            <ul className="skills__list">
                {skills.map((skill: Skill, index: number) =>
                    <li className="skills__item">
                        <h5 className="skills__title">{skill.name}</h5>
                        <div className="skills__level-wrapper">
                            <div
                                datatype={`${skill.level}%`}
                                className="skills__level"
                                style={{ width: `${levels[index]}%`, backgroundColor: `${skill.color}`, transitionDelay: `${0.2* index}s` }}
                            />
                        </div>
                    </li>
                )}
            </ul>
        </div>
    );
};
