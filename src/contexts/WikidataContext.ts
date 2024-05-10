import { createContext } from 'react';
import { IWikidataProvider } from '../lib/types';


export const WikidataContext = createContext<IWikidataProvider>(null!);