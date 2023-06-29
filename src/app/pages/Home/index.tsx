import { Link } from 'react-router-dom';

import { Background } from '@/app/components/Home/Background';
import { Heading } from '@/app/components/common/Heading';
import { NavLinkWithDelay } from '@/app/components/common/DelayedLink';

import { RoutesConfig } from '@/app/routes';

import './index.scss';

export const Home: React.FC = () =>
    <section className="home">
        <Background />
        <Heading message="Hi, I`m Vlad, Front end developer" />
        <NavLinkWithDelay
            className="home__contact-me"
            to={RoutesConfig.Contact.path}
            datatype={'Contact Me'}
        >
        </NavLinkWithDelay>
    </section>;

