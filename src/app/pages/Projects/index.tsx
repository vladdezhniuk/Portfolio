import { useEffect, useState } from 'react';
import Slider from 'react-slick';

import { SliderArrow } from '@/app/components/common/SlideArrow';

import kaminari from '@static/images/projects/kaminari.png';
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
    const [isFocused, setIsFocused] = useState<boolean>(false);
    const [projectIndex, setProjectIndex] = useState(0);

    const projects = [
        new Project(
            'Kaminari',
            `Kaminari is a Lightning Network infrastructure designed for instant and affordable global payments.
            The company helps businesses accept Lightning Network payments by providing a user-friendly platform that enables merchants to manage their transactions and monitor their virtual balance.
            We offer a turnkey Lightning Network infrastructure for payment processors and merchants in the gambling, betting, and other industries.`,
            kaminari,
            'https://www.kaminari.cloud'
        ),
        new Project(
            'Ledger Market',
            'Platform for curated NFT drops that enables artists and brands to create, distribute, and store NFTs with ease and world-class security. Through curation, artist-in-residence programs, custom collaborations, and product drops, [ Ledger ] Market gives you true ownership and control at every stage of the NFT experience, from minting to safeguarding. ',
            ledgerMarket,
            'https://market.ledger.com'
        ),
        new Project(
            'Amuzed',
            `AMUZED is a fantasy music manager game and marketplace for NFTs.
            AMUZED will create tokens depicting actual music artists that users can collect,
            trade and play with creating a fun, rewarding and sustainable experience for any token owner.`,
            amuzed,
            'https://amuzed.io'
        ),
        new Project(
            'Ultimate Division',
            `Ultimate Division is a football simulator and card collecting game,
                a joint project by Boosty Labs and Chickenfish games. The game is
            free to play and players can build their squads to compete with each
            other in weekly competitions.`,
            ultimatedivision,
            'https://ultimatedivision.com'
        ),
        new Project(
            'Minotaur',
            'NFT drop constructor',
            minotaur,
            'http://ec2-35-159-50-177.eu-central-1.compute.amazonaws.com:9012'
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

    useEffect(() => {
        projects.forEach(project => {
            const img = new Image();
            img.src = project.preview;
        });
    }, [projects]);

    return (
        <section className="projects">
            <div
                className={`projects__preview ${isFocused ? "projects__preview-focused" : ''}`}
                style={{ backgroundImage: `url(${projects[projectIndex].preview})` }}
            />
            <Slider
                {...settings}
                afterChange={(index: number) => setProjectIndex(index)}
                className="slider"
            >
                {projects.map((project: Project) =>
                    <div
                        className="projects__item"
                        key={project.name}
                    >
                        <div
                            className="projects__item__text-area"
                            onMouseEnter={() => setIsFocused(true)}
                            onMouseLeave={() => setIsFocused(false)}
                        >
                            <h6 className="projects__item__name">{project.name}</h6>
                            <div className="projects__item__description-wrapper">
                                <p className="projects__item__description">{project.description}</p>
                            </div>
                            <div className="projects__item__link-wrapper">
                                <span>
                                    <a
                                        href={project.url}
                                        target="_blank"
                                        className="projects__item__link"
                                        key={project.name}
                                        datatype={'Visit Page'}
                                    >
                                        Visit Page
                                    </a>
                                </span>
                            </div>
                        </div>
                    </div>
                )}
            </Slider>
        </section>
    );
};
