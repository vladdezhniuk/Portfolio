import { Description } from '@/app/components/About/Description';
import { Skills } from '@/app/components/About/Skills';

import './index.scss';

export const About: React.FC = () => {
    const experienceTitle = 'Experience';

    return (
        <section className="about">
            <Description />
            <Skills />
        </section>
    );
};
