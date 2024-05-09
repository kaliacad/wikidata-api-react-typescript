import { createContext } from 'react';
import { Entity } from '../lib/types';


// / Provide a default value of type Entity

const defaultEntity: Entity = {
    label: "something",
    description: "something",
    url: "kdkd",
    id: 'dkkdire'
};


export const WikidataContext = createContext<Entity>(defaultEntity);