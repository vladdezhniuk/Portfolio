import { useState } from 'react';
import Slider from 'react-slick';

import { SliderArrow } from '@/app/components/common/SlideArrow';

import amuzed from '@static/images/projects/amuzed.png';
import ultimatedivision from '@static/images/projects/ultimatedivision.png';
import minotaur from '@static/images/projects/minotaur.png';
import ledgerMarket from '@static/images/projects/ledgerMarket.png';

import './index.scss';

class Project {
    constructor(
        public name: string,
        public description: string,
        public preview: string,
        public url: string,
    ) { }
}

export const Projects: React.FC = () => {
    const projects = [
        new Project(
            'Amuzed',
            `AMUZED is a fantasy music manager game and marketplace for NFTs.
            AMUZED will create tokens depicting actual music artists that users can collect,
            trade and play with creating a fun, rewarding and sustainable experience for any token owner.`,
            amuzed,
            'https://amuzed.io/'
        ),
        new Project(
            'Ultimate Division',
            `Ultimate Division is a football simulator and card collecting game,
            a joint project by Boosty Labs and Chickenfish games. The game is
            free to play and players can build their squads to compete with each
            other in weekly competitions.`,
            ultimatedivision,
            'https://ultimatedivision.com/'
        ),
        new Project(
            'Minotaur',
            'NFT drop constructor',
            minotaur,
            'http://ec2-35-159-50-177.eu-central-1.compute.amazonaws.com:9012/'
        ),
        new Project(
            'Storefront',
            'NFT drop marketplace',
            ledgerMarket,
            'https://nftfss-dev.vercel.app/'
        ),
    ];
    const settings = {
        speed: 300,
        arrows: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <SliderArrow />,
        prevArrow: <SliderArrow />
    };

    const [isFocused, setIsFocused] = useState<boolean>(false);

    return (
        <section className="projects">
            <Slider {...settings} className="slider">
                {projects.map((project: Project) =>
                    <div
                        className="projects__item"
                        key={project.name}
                    >
                        <img
                            className={`projects__preview${isFocused ? '-focused' : ''}`}
                            src={project.preview}
                            alt="project preview"
                        />
                        <div
                            className="projects__item__text-area"
                            onMouseEnter={() => setIsFocused(true)}
                            onMouseLeave={() => setIsFocused(false)}
                        >
                            <a
                                href={project.url}
                                target="_blank"
                                className="projects__link"
                                key={project.name}
                            >
                                <h6 className="projects__item__name">{project.name}</h6>
                                <div className="projects__item__description-wrapper">
                                    <p className="projects__item__description">{project.description}</p>
                                </div>
                            </a>
                        </div>
                    </div>
                )}
            </Slider>
        </section>
    );
};
