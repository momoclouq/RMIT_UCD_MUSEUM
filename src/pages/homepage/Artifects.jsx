import { Link } from "react-router-dom";
import artifact1 from "../../images/artifact1.jpg";

const ArtifactCard = ({ artifactImg, title, id, alt }) => {
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
            <div className="text-center font-extralight">
                This artwork presented individuals...
            </div>
        </div>
    );
};

const Artifects = () => {
    return (
        <div className="box-border content-center bg-white">
            <div className="py-10 px-12 lg:px-20">
                <div className="mx-auto text-red-400 font-extralight text-center text-3xl p-7">
                    FEATURED ARTIFACTS
                </div>
                <div className="flex flex-col sm:flex-row flex-wrap justify-between align-center">
                    <ArtifactCard
                        artifactImg={artifact1}
                        title="Ancient stone masks"
                        id={1}
                        alt="Some rocks and rocks"
                    />
                    <ArtifactCard
                        artifactImg={artifact1}
                        title="Ancient stone masks"
                        id={2}
                        alt="Some rocks and rocks"
                    />
                    <ArtifactCard
                        artifactImg={artifact1}
                        title="Ancient stone masks"
                        id={3}
                        alt="Some rocks and rocks"
                    />
                </div>
            </div>
            <div className="bg-zinc-100 py-4 px-12 lg:px-20">
                <div className="mx-auto text-red-400 font-extralight text-center text-3xl p-7">
                    NEW ARTIFACTS
                </div>
                <div className="flex flex-col sm:flex-row flex-wrap justify-between align-center">
                    <ArtifactCard
                        artifactImg={artifact1}
                        title="Ancient stone masks"
                        id={4}
                        alt="Some rocks and rocks"
                    />
                    <ArtifactCard
                        artifactImg={artifact1}
                        title="Ancient stone masks"
                        id={5}
                        alt="Some rocks and rocks"
                    />
                    <ArtifactCard
                        artifactImg={artifact1}
                        title="Ancient stone masks"
                        id={6}
                        alt="Some rocks and rocks"
                    />
                </div>
            </div>
        </div>
    );
};

export default Artifects;
