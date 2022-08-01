import Slider from 'react-slick';

import amuzed from '@static/images/Projects/amuzed.png';
import ultimatedivision from '@static/images/Projects/ultimatedivision.png';
import minotaur from '@static/images/Projects/minotaur.png';

import './index.scss'

class Project {
    constructor(
        public name: string,
        public description: string,
        public preview: string,
        public url: string
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
            `NFT drop constructor`,
            minotaur,
            'http://ec2-35-159-50-177.eu-central-1.compute.amazonaws.com:9012/'
        ),
    ]
    const settings = {
        speed: 500,
        arrows: true,
        autoplay: true,
        slidesToShow: 1,
        slidesToScroll: 1,
    };
    return (
        <section className='projects'>
            <Slider {...settings} className="slider">
                {projects.map((project: Project) =>
                    <a
                        href={project.url}
                        target="_blank"
                        className="projects__item"
                        key={project.name}
                    >
                        <img className='projects__preview' src={project.preview} alt="project preview" />
                        <div className="projects__item__text-area">
                            <h6 className="projects__item__name">{project.name}</h6>
                            <p className='projects__item__description'>{project.description}</p>
                        </div>
                    </a>
                )}
            </Slider>
        </section>
    )
}
