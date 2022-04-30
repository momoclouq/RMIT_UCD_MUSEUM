import AboutExhibition from "./AboutExhibition";
import Artifacts from "./Artifacts";
import BasicInformation from "./BasicInformation";
import IntroductionPanel from "./IntroductionPanel";

const Homepage = () => {
    return (
        <>
            <IntroductionPanel />
            <AboutExhibition />
            <Artifacts />
            <BasicInformation />
        </>
    );
};

export default Homepage;
