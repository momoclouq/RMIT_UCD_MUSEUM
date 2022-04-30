import AboutExhibition from "./AboutExhibition";
import Artifects from "./Artifects";
import BasicInformation from "./BasicInformation";
import IntroductionPanel from "./IntroductionPanel";

const Homepage = () => {
    return (
        <>
            <IntroductionPanel />
            <AboutExhibition />
            <Artifects />
            <BasicInformation />
        </>
    );
};

export default Homepage;
