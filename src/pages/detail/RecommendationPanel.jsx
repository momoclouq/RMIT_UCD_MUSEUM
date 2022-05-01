import { Link } from "react-router-dom";
import { artifactBuilder } from "../../components/Artifact/ArtifactBuilder";

const RecommendationCard = ({ artifactImg, title, id, alt }) => {
    return (
        <div className="duration-300 w-full md:w-1/3 px-10 py-5">
            <Link to={`/RMIT_UCD_MUSEUM/artifact/${id}`}>
                <img
                    className="w-full rounded shadow-lg shadow-slate-300 brightness-90 aspect-square duration-300 hover:brightness-100"
                    src={artifactImg}
                    alt={alt}
                />
            </Link>
            <div className="text-center font-light text-slate-800 lg:text-2xl text-base py-6">
                {title}
            </div>
        </div>
    );
};

const RecommendationPanel = () => {
    return (
        <div className="border-t-2 p-5 sm:p-10 content-center bg-white">
            <div className="text-black font-extralight text-2xl md:text-3xl decoration-1 p-3">
                EXPLORE MORE
            </div>
            <div className="flex flex-col sm:flex-row flex-wrap justify-between align-center">
                    {
                        [1, 2, 3].map((value) => {
                            const artifact = artifactBuilder(value);
                            return (
                                <RecommendationCard
                                    artifactImg={artifact.image}
                                    title={artifact.name}
                                    id={artifact.index}
                                    alt={artifact.name}
                                />
                            )
                        })
                    }
            </div>
        </div>
    );
};

export default RecommendationPanel;
