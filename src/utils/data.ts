'use client';

import { useEffect, useState } from 'react';

interface scopeData {
    scope1: { data: any; isDone: boolean };
    scope2: { data: any; isDone: boolean };
    scope3: { data: any; isDone: boolean };
}

const defaultScopes: scopeData = {
    scope1: { data: {}, isDone: false },
    scope2: { data: {}, isDone: false },
    scope3: { data: {}, isDone: false },
};

function useData() {
    const [scopes, setScopes] = useState<scopeData | null>(null);

    useEffect(() => {
        const stored = localStorage.getItem('scopes');
        if (stored) {
            try {
                setScopes(JSON.parse(stored));
            } catch {
                setScopes(defaultScopes);
            }
        } else {
            setScopes(defaultScopes);
        }
    }, []);

    useEffect(() => {
        if (scopes) {
            localStorage.setItem('scopes', JSON.stringify(scopes));
        }
    }, [scopes]);

    const updateIfReady = (updater: (prev: scopeData) => scopeData) => {
        setScopes((prev) => {
            if (!prev) return prev; // still loading
            return updater(prev);
        });
    };

    const setScope1 = (data: any) =>
        updateIfReady((prev) => ({
            ...prev,
            scope1: { data, isDone: true },
        }));

    const setScope2 = (data: any) =>
        updateIfReady((prev) => ({
            ...prev,
            scope2: { data, isDone: true },
        }));

    const setScope3 = (data: any) =>
        updateIfReady((prev) => ({
            ...prev,
            scope3: { data, isDone: true },
        }));

    const resetScopes = () => setScopes(defaultScopes);

    return {
        scopes,
        setScope1,
        setScope2,
        setScope3,
        resetScopes,
    };
}

export default useData;
