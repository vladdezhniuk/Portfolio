import React, { createContext, useState } from 'react';

interface ContextState {
    isLoading: boolean;
    setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
}

export const LoaderContext = createContext<ContextState>({} as ContextState);

export const LoaderProvider: React.FC<{ children: React.ReactNode }> = ({
    children,
}) => {
    const [isLoading, setIsLoading] = useState<boolean>(false);

    return (
        <LoaderContext.Provider value={{ isLoading, setIsLoading }}>
            {children}
        </LoaderContext.Provider>
    );
};
