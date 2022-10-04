
import { Heading } from '@/app/components/common/Heading';
import { Form } from '@/app/components/Contact/Form';

import { Github, Linkedin, Telegram } from '@/app/static/images/contact/icons';

import './index.scss';

class SocialLink {
    constructor(
        public url: string,
        public icon: JSX.Element
    ) { }
}

export const Contact = () => {
    const socialLinks = [
        new SocialLink('https://github.com/vladdezhniuk', <Github />),
        new SocialLink('https://www.linkedin.com/in/vladdezhniuk/', <Linkedin />),
        new SocialLink('https://t.me/vladdezhniuk', <Telegram />),
    ];

    return (
        <section className="contact">
            <Heading message="Contact me" className="contact__heading" />
            <ul className="contact__list">
                {socialLinks.map((link: SocialLink) =>
                    <li className="contact__item">
                        <a
                            className="contact__link"
                            href={link.url}
                            target="_blank"
                        >
                            {
                                link.icon
                            }
                        </a>
                    </li>
                )}
            </ul>
            <div className="contact__wrapper">
                <Form />
            </div>
        </section>
    );
};

