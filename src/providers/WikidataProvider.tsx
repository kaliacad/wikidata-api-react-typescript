import { createContext, useState, ReactNode } from 'react';
import { Entity, IWikidataProvider } from '../lib/types';


// const defaultType: IWikidataProvider = {
//     data: [{
//         label: "some string",
//         description: 'same description',
//         url: 'djdjjfe',
//         id: 'dkaerie'
//     }],
//     setData: null
// };



export const WikidataContext = createContext<IWikidataProvider>(null!);

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
