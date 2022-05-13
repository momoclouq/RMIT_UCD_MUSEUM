import { useNavigate, useParams } from "react-router-dom";
import { artifactBuilder } from "../../components/Artifact/ArtifactBuilder";
import ArtifactInfo from "./ArtifactInfo";
import Model3DFrame from "./Model3DFrame";
import RecommendationPanel from "./RecommendationPanel";

const Detailpage = () => {
    let { artifactId } = useParams();
    let navigate = useNavigate();

    const artifact = artifactBuilder(artifactId);

    return (
        <>
            <button onClick={() => { navigate("/RMIT_UCD_MUSEUM") }} className="m-2 px-5 py-1 border rounded"><span>Return Home</span></button>
            <div className="flex flex-col p-5 lg:my-10 md:my-10 lg:mx-20 md:mx-12 xl:flex-row lg:min-h-screen">
                <Model3DFrame artifact={artifact.component} />
                <ArtifactInfo
                    date={artifact.date}
                    name={artifact.name}
                    description={artifact.description}
                    author={artifact.author}
                />
            </div>
            <RecommendationPanel />
        </>
    );
};

export default Detailpage;
