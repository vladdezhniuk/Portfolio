import React from 'react';

import { Heading } from '@/app/components/common/Heading';
import { Form } from '@/app/components/Contact/Form';

import './index.scss';

export const Contact = () =>
    <section className="contact">
        <div className="contact__form-area">
            <Heading message='Contact me' className='contact__heading' />
            <Form />
        </div>
        <div className="contact__map-area"></div>
    </section>;

