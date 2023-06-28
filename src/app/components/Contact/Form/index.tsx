import { FormEvent, useEffect, useMemo, useState } from 'react';

import { Loader } from '../../common/Loader';

import { FormClient } from '@/api/form';

import './index.scss';

export const Form = () => {
    const client = useMemo(() => new FormClient(), []);
    const [name, setName] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [message, setMessage] = useState<string>('');
    const [isSuccess, setIsSuccess] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const editName = (event: React.ChangeEvent<HTMLInputElement>) => {
        setIsSuccess(false);
        setName(event.target.value);
    };
    const editEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
        setIsSuccess(false);
        setEmail(event.target.value);
    };
    const editMessage = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        setIsSuccess(false);
        setMessage(event.target.value);
    };

    const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setIsLoading(true);
        client.contactMe(name, email, message).finally(() => {
            setIsLoading(false);
            setIsSuccess(true);
        });
    };

    return (
        <form
            className="form"
            method="post"
            onSubmit={handleSubmit}
        >
            <input
                type="text"
                placeholder="Name"
                className="form__name"
                id="name"
                onChange={editName}
            />
            <input
                type="email"
                placeholder="Enter email"
                className="form__email"
                id="email"
                onChange={editEmail}
            />
            <textarea
                id="message"
                placeholder="Message"
                className="form__message"
                rows={5}
                onChange={editMessage}
            />
            <button
                type="submit"
                className="form__submit"
                tabIndex={0}
                datatype={isLoading ? '' : isSuccess ? 'Thank You!' : 'Hit me up'}
            >
                {
                    isLoading
                        ?
                        <Loader spinnerSize='24px' />
                        :
                        null
                }
            </button>
        </form>
    );
};
