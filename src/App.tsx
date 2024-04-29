
import React, { useState } from "react";

const App: React.FC = () => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<string[]>([]);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log("Recherche de:", query);
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
        {results.map((result, index) => (
          <div
            key={index}
            className="bg-gray-100 rounded-md p-3 mb-2 border border-gray-200"
          >
            {result}
          </div>
        ))}
      </div>
    </div>
  );
};

export default App
