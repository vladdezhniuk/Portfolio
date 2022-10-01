import React, { MouseEventHandler, useContext } from 'react';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import { LoaderContext } from '@/app/context/loader';

class DelayedLinkProps {
    constructor(
        public to: string,
        public className: string,
        public children: React.ReactNode,
        public datatype: string
    ) { }
}

/** Delays route change for improve loader behavior */
export const NavLinkWithDelay: React.FC<DelayedLinkProps> = ({ to, className, children, datatype }) => {
    const { isLoading, setIsLoading } = useContext(LoaderContext);
    const location = useLocation();
    const navigate = useNavigate();

    /** Handles route change, changes loader context */
    const changeRoute = (e: any) => {
        if (location.pathname === to || isLoading) { return; }

        e.preventDefault();
        setIsLoading(true);
        setTimeout(() => {
            navigate(to);
        }, 1000);
        setTimeout(() => {
            setIsLoading(false);
        }, 1500);
    };

    return (
        <NavLink
            to={to}
            className={className}
            onClick={changeRoute}
            datatype={datatype}
        >
            {children}
        </NavLink>
    );
};
