import { Heading } from '@/app/components/common/Heading';
import { NavLinkWithDelay } from '@/app/components/common/DelayedLink';
import { ParticlesBackground } from '@/app/components/Home/Particles';

import { RoutesConfig } from '@/app/routes';

import './index.scss';

export const Home: React.FC = () =>
    <section className="home">
        <ParticlesBackground />
        <Heading
            message="Hi,/// I`m/ Vlad,/// Front/ end/ developer"
            separator='/'
            delayPerElement={0.3}
        />
        <NavLinkWithDelay
            className="home__contact-me"
            to={RoutesConfig.Contact.path}
            datatype={'Contact Me'}
        >
        </NavLinkWithDelay>
    </section>;

