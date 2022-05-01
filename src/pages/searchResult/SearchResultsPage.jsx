import { Link, useParams } from "react-router-dom"
import { artifactBuilder } from "../../components/Artifact/ArtifactBuilder";

const SearchTermDisplay = ({searchTerm}) => {
    return (
        <div className="p-3 pb-1 font-light text-3xl md:text-4xl">
            Results for <span className="italic">{searchTerm}</span>
        </div>
    )
}

const SearchResultCard = ({ artifact }) => {
    return (
        <Link className="w-full" to={`/RMIT_UCD_MUSEUM/artifact/${artifact.index}`}>
            <div className="h-full w-full p-4 mb-2 flex flex-col sm:flex-row border-b-2 hover:bg-neutral-100 hover:drop-shadow-md duration-200">
                <div className="shrink-0 sm:h-full pb-5 sm:w-1/3 flex flex-col justify-center">
                    <img className="max-h-full max-w-full w-full" src={artifact.image} alt={artifact.name}/>
                </div>
                <div className="h-40 md:h-64 grow flex flex-col p-4 justify-center">
                    <div className="text-xl mb-5">{artifact.name}</div>
                    <div className="custom-description">{artifact.description}</div>
                </div>
            </div>
        </Link>
    );
}

const SearchResultsPage = () => {
    let { searchTerm } = useParams();

    return (
        <>
            <div className="container mx-auto">
                <SearchTermDisplay searchTerm={searchTerm} />
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 pb-2">
                    <SearchResultCard artifact={artifactBuilder(1)}/>
                    <SearchResultCard artifact={artifactBuilder(2)}/>
                    <SearchResultCard artifact={artifactBuilder(3)}/>
                    <SearchResultCard artifact={artifactBuilder(4)}/>
                    <SearchResultCard artifact={artifactBuilder(5)}/>
                    <SearchResultCard artifact={artifactBuilder(6)}/>
                </div>
            </div>
        </>
    )
}

export default SearchResultsPage;