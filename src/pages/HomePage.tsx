import { useContext } from "react";
import Card from "../components/Card";
import init from "../lib/init";
import CardSqueletton from "../components/CardSqueletton";
import { WikidataContext } from "../providers/WikidataProvider";

const HomePage = () => {
    const { data } = useContext(WikidataContext);
    return (
        <div className="mx-24 my-4">
            <div>
                <h1>Search you wiki??</h1>
                {/* {!data ? (
                    init().map((wiki, i) => <CardSqueletton key={i} />)
                ) : (
                    data?.map((d) => (
                        <Card
                            key={d?.id}
                            label={d?.label}
                            descrition={d?.description}
                            url={d?.url}
                        />
                    ))
                )} */}
            </div>
        </div>
    );
};

export default HomePage;
