import React, { ReactNode, useState } from 'react';

const AppearanceContext = React.createContext({
    toggleShortForm: () => {},
    getShortForm: (): boolean => {
        return false;
    },
});

/**
 * A hook that toggles the short form
 * @returns {function} toggleShortForm
 */
export function useToggleShortForm() {
    const context = React.useContext(AppearanceContext);
    if (!context) {
        throw new Error(
            'useToggleShortForm must be used within a AppearanceProvider'
        );
    }
    return context.toggleShortForm;
}

/**
 * A hook that gets the short form
 * @returns {function} getShortForm
 */
export function useShortForm() {
    const context = React.useContext(AppearanceContext);
    if (!context) {
        throw new Error(
            'useShortForm must be used within a AppearanceProvider'
        );
    }
    return context.getShortForm;
}

interface Props {
    children: ReactNode;
}

/**
 * This is the AppearanceProvider
 * @author cophilot
 * @version 1.0.0
 * @created 2024-3-10
 */
export function AppearanceProvider({ children }: Props) {
    const [useShortForm, setUseShortForm] = useState(false);

    const toggleShortForm = () => {
        setUseShortForm(!useShortForm);
    };

    const getShortForm = () => {
        return useShortForm;
    };

    return (
        <AppearanceContext.Provider
            value={{
                toggleShortForm,
                getShortForm,
            }}>
            {children}
        </AppearanceContext.Provider>
    );
}
