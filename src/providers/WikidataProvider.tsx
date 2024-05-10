import { useState, ReactNode } from 'react';
import { Entity } from '../lib/types';
import { WikidataContext } from '../contexts/WikidataContext';


// Type for children prop

type PropsWikidataProvider = {
    children: ReactNode; 
};

const WikidataProvider: React.FC<PropsWikidataProvider> = ({ children }) => {
    const [data, setData] = useState<Entity[] | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<boolean>(false);

    return (
        <WikidataContext.Provider value={{ data, setData, loading, setLoading, error, setError }}>
            {children}
        </WikidataContext.Provider>
    );
};

export default WikidataProvider;
