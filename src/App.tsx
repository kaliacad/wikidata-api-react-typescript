import { useState } from "react";
import getWikiData from "./api/getWikiData";
import Card from "./components/Card";
import { Entity } from "./lib/types";

const App: React.FC = () => {
   const [query, setQuery] = useState("");
   const [data, setData] = useState<Entity[]>([]);

   // control input field
   const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setQuery(event.target.value);
   };

   // handle for submition

   const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      console.log("Recherche de:", query);

      getWikiData(query).then(entities => setData(entities));

      setQuery("");
   };

   return (
      <div className="max-w-md mx-auto mt-10" >
         <h1 className="text-2xl font-bold text-gray-900">
            Recherche wikidata
         </h1>
         <form onSubmit={handleSubmit} className="mb-4">
            <input
               type="text"
               value={query}
               onChange={handleInputChange}
               placeholder="Entrez votre recherche"
               className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
            />
            <button
               type="submit"
               className="w-full mt-2 bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
            >
               Rechercher
            </button>
         </form>
         <div>
            {
               data.length > 1 && data ? (
                  data.map(d => (
                     <Card
                        key={d.id}
                        label={d.label}
                        descrition={d.description}
                        url={d.url}
                     />
                  ))
               ) : (
                  <h1>Loading...</h1>
               )
            }
         </div>
      </div>
   );
};

export default App;