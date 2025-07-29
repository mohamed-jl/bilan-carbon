'use client';

import { useEffect, useState } from 'react';
import { scope1Factors, scope2Factors, scope3Factors } from '@/constants/factors';

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

const defaultResults: scopeData = {
    scope1: {
        data: {
            tunis: [], sfax: [], sousse: []
        }, isDone: false
    },
    scope2: { data: { tunis: [], sfax: [], sousse: [] }, isDone: false },
    scope3: { data: { tunis: [], sfax: [], sousse: [] }, isDone: false },
};

function useData() {
    const [scopes, setScopes] = useState<scopeData | null>(null);

    const [results, setResults] = useState<scopeData>(defaultResults);

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
        if (scopes?.scope1.isDone && scopes?.scope2.isDone && scopes?.scope3.isDone) {
            const scope1Tunis = scopes?.scope1.data.tunis.map((val: number, index: number) => val * scope1Factors[index]) || [];
            const scope1Sfax = scopes?.scope1.data.sfax.map((val: number, index: number) => val * scope1Factors[index]) || [];
            const scope1Sousse = scopes?.scope1.data.sousse.map((val: number, index: number) => val * scope1Factors[index]) || [];
            const scope2Tunis = scopes?.scope2.data.tunis.map((val: number, index: number) => val * scope2Factors[index]) || [];
            const scope2Sfax = scopes?.scope2.data.sfax.map((val: number, index: number) => val * scope2Factors[index]) || [];
            const scope2Sousse = scopes?.scope2.data.sousse.map((val: number, index: number) => val * scope2Factors[index]) || [];
            const scope3Tunis = scopes?.scope3.data.tunis.map((val: number, index: number) => val * scope3Factors[index]) || [];
            const scope3Sfax = scopes?.scope3.data.sfax.map((val: number, index: number) => val * scope3Factors[index]) || [];
            const scope3Sousse = scopes?.scope3.data.sousse.map((val: number, index: number) => val * scope3Factors[index]) || [];
            setResults({
                scope1: { data: { tunis: scope1Tunis, sfax: scope1Sfax, sousse: scope1Sousse }, isDone: true },
                scope2: { data: { tunis: scope2Tunis, sfax: scope2Sfax, sousse: scope2Sousse }, isDone: true },
                scope3: { data: { tunis: scope3Tunis, sfax: scope3Sfax, sousse: scope3Sousse }, isDone: true },
            });
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
        results,
    };
}

export default useData;
