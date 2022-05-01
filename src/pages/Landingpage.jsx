import { Route, Routes } from "react-router-dom";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";
import Detailpage from "./detail/DetailPage";
import Homepage from "./homepage/Homepage";
import SearchResultsPage from "./searchResult/SearchResultsPage";

const Landingpage = () => {
    return (
        <>
            <Navbar />

            <div className="mx-auto">
                <Routes>
                    <Route
                        path="/RMIT_UCD_MUSEUM/"
                        element={<Homepage />}
                    ></Route>
                    <Route
                        path="/RMIT_UCD_MUSEUM/search/:searchTerm"
                        element={<SearchResultsPage />}
                    ></Route>
                    <Route
                        path="/RMIT_UCD_MUSEUM/artifact/:artifactId"
                        element={<Detailpage />}
                    ></Route>
                </Routes>
            </div>

            <Footer />
        </>
    );
};

export default Landingpage;
