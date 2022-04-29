import { useParams } from "react-router-dom";
import { artifactBuilder } from "../../components/Artifact/ArtifactBuilder";
import ArtifactInfo from "./ArtifactInfo";
import Model3DFrame from "./Model3DFrame";
import RecommendationPanel from "./RecommendationPanel";

const Detailpage = () => {
    let { artifactId } = useParams();

    const artifact = artifactBuilder(artifactId);

    return (
        <>
            <div className="flex flex-col p-5 lg:my-10 md:my-10 lg:mx-20 md:mx-12 md:flex-row lg:h-screen">
                <Model3DFrame artifact={artifact.component} />
                <ArtifactInfo
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
