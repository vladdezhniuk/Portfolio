import React, { useContext } from 'react';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import { LoaderContext } from '@/app/context/loader';

interface DelayedLinkProps {
    to: string;
    className: string;
    children: React.ReactNode;
    datatype: string;
    setIsNavbarVisible?: React.Dispatch<React.SetStateAction<boolean>>;
}

/** Delays route change for improve loader behavior */
export const NavLinkWithDelay: React.FC<DelayedLinkProps> = (
    {
        to,
        className,
        children,
        datatype,
        setIsNavbarVisible,
    }) => {
    const { isLoading, setIsLoading } = useContext(LoaderContext);
    const location = useLocation();
    const navigate = useNavigate();

    /** Handles route change, changes loader context */
    const changeRoute = (e: any) => {
        setIsNavbarVisible &&
            setIsNavbarVisible(false);
        if (location.pathname === to || isLoading) { return; }

        e.preventDefault();
        setIsLoading(true);
        setTimeout(() => {
            navigate(to);
        }, 1500);
        setTimeout(() => {
            setIsLoading(false);
        }, 2000);
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
