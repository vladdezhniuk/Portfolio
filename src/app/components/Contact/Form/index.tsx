import React from 'react';

import './index.scss';

export const Form = () =>
    <form className="form">
        <input
            type="text"
            placeholder="Name"
            className="form__name"
        />
        <input
            type="email"
            placeholder="Enter email"
            className="form__email"
        />
        <input
            type="text"
            placeholder="Message"
            className="form__message"
        />
        <button
            type="submit"
            className="form__submit"
            datatype="Hit me up"
        >
                Hit me up
        </button>
    </form>;

