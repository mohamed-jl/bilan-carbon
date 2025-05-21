'use client';

import { useState, useEffect } from 'react';

interface scopeData {
  socope1: { data: any; isDone: boolean };
  socope2: { data: any; isDone: boolean };
  socope3: { data: any; isDone: boolean };
}

const defaultScopes: scopeData = {
  socope1: { data: {}, isDone: false },
  socope2: { data: {}, isDone: false },
  socope3: { data: {}, isDone: false },
};

function useData() {
  const [scopes, setScopes] = useState<scopeData>(()=>{
    const data = JSON.parse(localStorage.getItem('scopes') || '')
    if(data) return data
    return defaultScopes
  });

  // Load from localStorage only on client after mount
  useEffect(() => {
    const data = localStorage.getItem('scopes');
    if (data) {
      setScopes(JSON.parse(data));
    }
  }, []);

  // Save to localStorage on every update
  useEffect(() => {
    localStorage.setItem('scopes', JSON.stringify(scopes));
  }, [scopes]);

  const setScope1 = (data: any) =>
    setScopes((prev) => ({
      ...prev,
      socope1: { data, isDone: true },
    }));

  const setScope2 = (data: any) =>
    setScopes((prev) => ({
      ...prev,
      socope2: { data, isDone: true },
    }));

  const setScope3 = (data: any) =>
    setScopes((prev) => ({
      ...prev,
      socope3: { data, isDone: true },
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
