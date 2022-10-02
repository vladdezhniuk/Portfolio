import { FormEvent, useState } from 'react';


import './index.scss';

export const Form = () => {
    const FORM_ENDPOINT = 'https://public.herotofu.com/v1/20b89e10-426a-11ed-9b17-6fdf7f94f506';
    const [name, setName] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [message, setMessage] = useState<string>('');

    const handleSubmit = async(event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        try {
            await fetch(FORM_ENDPOINT, {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    name,
                    email,
                    message,
                }),
            });
        } catch (error) { }
    };

    return (
        <form
            className="form"
            action={FORM_ENDPOINT}
            method="post"
            onSubmit={handleSubmit}
        >
            <input
                type="text"
                placeholder="Name"
                className="form__name"
                id="name"
                onChange={e => setName(e.target.value)}
            />
            <input
                type="email"
                placeholder="Enter email"
                className="form__email"
                id="email"
                onChange={e => setEmail(e.target.value)}
            />
            <input
                type="text"
                id="message"
                placeholder="Message"
                className="form__message"
                onChange={e => setMessage(e.target.value)}
            />
            <button
                type="submit"
                className="form__submit"
                datatype="Hit me up"
            >
                Hit me up
            </button>
        </form>
    );
};
