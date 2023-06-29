import { Description } from '@/app/components/About/Description';
import { Map } from '@/app/components/About/Map';

import './index.scss';

export const About: React.FC = () => {
    return (
        <section className="about">
            <Description />
            <Map />
        </section>
    );
};
