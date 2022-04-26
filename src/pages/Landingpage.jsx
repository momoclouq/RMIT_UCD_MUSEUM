import { Route, Routes } from "react-router-dom";
import App from "../App";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";
import Basicpage from "./basic/Basicpage";
import Detailpage from "./detail/DetailPage";
import Homepage from "./homepage/Homepage";

const Landingpage = () => {
    return (
        <>
            <Navbar />

            <div className="mx-auto">
                <Routes>
                    <Route path="/RMIT_UCD_MUSEUM/" element={<Homepage />} ></Route>
                    <Route path="/RMIT_UCD_MUSEUM/basic" element={<Basicpage />}></Route>
                    <Route path="/RMIT_UCD_MUSEUM/artifact/:artifactId" element={<Detailpage />}></Route>
                </Routes>
            </div>
            
            <Footer />
        </>
    );
}

export default Landingpage;