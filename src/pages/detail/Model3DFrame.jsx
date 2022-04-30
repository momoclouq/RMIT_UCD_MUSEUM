import { artifactBuilder } from "../../components/Artifact/ArtifactBuilder";

const Model3DFrame = ({ id }) => {
    return (
        <div className="basis-full mx:basis-3/5 rounded-[30px] overflow-hidden">
            {artifactBuilder(id).component}
        </div>
    );
};

export default Model3DFrame;
