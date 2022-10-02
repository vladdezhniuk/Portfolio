
import Map from 'google-map-react';
import { Heading } from '@/app/components/common/Heading';
import { Form } from '@/app/components/Contact/Form';

import { theme } from '@/app/contants/map';

import './index.scss';

export const Contact = () => {
    const LOCATION_URL = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d184551.80858327696!2d-79.51814114754762!3d43.71840381103114!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89d4cb90d7c63ba5%3A0x323555502ab4c477!2sToronto%2C%20ON%2C%20Canada!5e0!3m2!1sen!2spl!4v1664729208662!5m2!1sen!2spl';

    return (
        <section className="contact">
            <div className="contact__form-area">
                <Heading message="Contact me" className="contact__heading" />
                <Form />
            </div>
            <div className="contact__map">
                <Map
                    bootstrapURLKeys={{ key: 'AIzaSyCD6psS1pUr3s0a81MgG6LaApXXO0S2GNE' }}
                    defaultZoom={9}
                    options={{ styles: theme }}
                    defaultCenter={{
                        lat: 43.7,
                        lng: -79.5,
                    }}
                />
            </div>

        </section>
    );
};

