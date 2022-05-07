import Navbar from "../../components/Navbar/Navbar";
import AboutExhibition from "./AboutExhibition";
import Artifacts from "./Artifacts";
import BasicInformation from "./BasicInformation";
import IntroductionPanel from "./IntroductionPanel";

const Homepage = () => {
    return (
        <>
            <Navbar />
            <IntroductionPanel />
            <AboutExhibition />
            <Artifacts />
            <BasicInformation />
        </>
    );
};

export default Homepage;
