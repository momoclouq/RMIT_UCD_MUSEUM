import React from "react";
import AboutExhibition from "./AboutExhibition";
import BasicInformation from "./BasicInformation";
import FeaturedArts from "./FeaturedArts";
import IntroductionPanel from "./IntroductionPanel";

const Homepage = () => {
    return(
        <>
            <IntroductionPanel />
            <AboutExhibition />
            <FeaturedArts />
            <BasicInformation />
        </>
    )
}

export default Homepage;