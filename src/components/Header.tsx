import { useState, useContext } from "react";
import { WikidataContext } from '../providers/WikidataProvider';
import getWikiData from '../api/getWikiData.ts';



const Header = () => {
    const { setData } = useContext(WikidataContext);
    const [query, setQuery] = useState("");

    // control input field
    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setQuery(event.target.value);
    };

    // handle for submition

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        try {
            async function laodAPI() {
                getWikiData(query).then(entities => {
                    setData?.(entities);
                    console.log(entities);
                });
            }
            laodAPI();
        } catch (error) {
            console.log("i caught a bug");
        }
    };


    return (
        <header className="border-b border-[#8b97c6] w-full sticky top-0 py-4 bg-[#1e202a]">
            <div className='mx-24'>
                <form onSubmit={handleSubmit} className="flex justify-between items-center border gap-2 bg-[#1e202a]">
                    <input
                        type="text"
                        value={query}
                        onChange={handleInputChange}
                        placeholder="Entrez votre recherche"
                        className="flex-1 text-black"
                    />
                    <button
                        type="submit"
                        className="bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                        </svg>
                    </button>
                </form>

            </div>
        </header>
    );
};

export default Header;