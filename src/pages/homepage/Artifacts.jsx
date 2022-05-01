import { Link } from "react-router-dom";
import { artifactBuilder } from "../../components/Artifact/ArtifactBuilder";

const ArtifactCard = ({ artifactImg, title, id, alt, description }) => {
    return (
        <div className="border-2 duration-300 rounded border-transparent hover:border-slate-300 p-10 w-full md:w-1/3">
            <Link to={`/RMIT_UCD_MUSEUM/artifact/${id}`}>
                <img
                    className="w-full rounded shadow-lg shadow-slate-300 brightness-90 aspect-square duration-300 hover:brightness-100"
                    src={artifactImg}
                    alt={alt}
                />
            </Link>
            <div className="text-center font-light text-neutral-900 text-3xl py-6">
                {title}
            </div>
            <div className="text-center font-extralight custom-description">
                {description}
            </div>
        </div>
    );
};

const Artifacts = () => {
    return (
        <div id="artifacts" className="box-border content-center bg-white">
            <div className="py-10 px-12 lg:px-20">
                <div className="mx-auto text-red-400 font-extralight text-center text-3xl p-7">
                    FEATURED ARTIFACTS
                </div>
                <div className="flex flex-col sm:flex-row flex-wrap justify-between align-center">
                    {
                        [1, 2, 3].map((value) => {
                            const artifact = artifactBuilder(value);
                            return (
                                <ArtifactCard
                                    artifactImg={artifact.image}
                                    title={artifact.name}
                                    id={artifact.index}
                                    alt={artifact.name}
                                    description={artifact.description}
                                />
                            )
                        })
                    }
                </div>
            </div>
            <div className="bg-zinc-100 py-4 px-12 lg:px-20">
                <div className="mx-auto text-emerald-800 font-extralight text-center text-3xl p-7">
                    NEW ARTIFACTS
                </div>
                <div className="flex flex-col sm:flex-row flex-wrap justify-between align-center">
                    {
                        [4, 5, 6].map((value) => {
                            const artifact = artifactBuilder(value);
                            return (
                                <ArtifactCard
                                    artifactImg={artifact.image}
                                    title={artifact.name}
                                    id={artifact.index}
                                    alt={artifact.name}
                                    description={artifact.description}
                                />
                            )
                        })
                    }
                </div>
            </div>
        </div>
    );
};

export default Artifacts;
