
// From Wikidata API Interface
export interface Entity {
   label: string;
   description: string;
   url: string;
   id: string;
}

// wikidata | wikidata Provider Interface

export interface IWikidataProvider {
   data: Entity[] | null;
   setData: React.Dispatch<React.SetStateAction<Entity[] | null>> | null;
}



// export interface I 