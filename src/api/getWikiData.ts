import axios from 'axios';
import { Entity } from '../lib/types';


interface SearchResponse {
   search: Entity[];
}

type Params = {
   origin: string;
   action: string;
   format: string;
   search: string;
   language: string;
   limit: string;
};

const getWikiData = async (searchQuery: string = ""): Promise<Entity[]> => {
   const url: string = "https://www.wikidata.org/w/api.php";

   const params: Params = {
      origin: "*",
      action: "wbsearchentities",
      format: "json",
      search: searchQuery,
      language: "fr",
      limit: "max"
   };

   try {
      const response = await axios.get<SearchResponse>(url, { params });
      const data = response.data;

      const final_data: Entity[] = data.search.map(entity => ({
         label: entity.label,
         description: entity.description,
         url: entity.url,
         id: entity.id
      }));

      return final_data;
   } catch (error) {
      return [];
   }
}

export default getWikiData;