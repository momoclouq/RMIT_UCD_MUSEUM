import { useNavigate } from "react-router-dom";

const LeftPanel = () => {
    return (
        <div className="basis-full md:basis-2/5 p-10 md:p-12 lg:p-28">
            <div className="p-8 text-4xl md:text-5xl text-center font-font-light">
                Date & Location
            </div>
            <div className="text-center font-light">
                Buy tickets on the internet or at the museum
            </div>
        </div>
    );
};

const RightPanel = () => {
    const navigate = useNavigate();

    const moveToSearch = () => {
        navigate("/RMIT_UCD_MUSEUM/search/id");
    }

    return (
        <div className="basis-full md:basis-3/5 p-10 md:p-12 lg:p-28">
            <div className="text-4xl font-extralight py-5">
                New art collection exhibition in Ho Chi Minh
            </div>
            <div className="py-5 font-extralight">Date: July 8 2022</div>
            <div className="py-5 font-extralight">Time: 8am - 10pm</div>
            <div className="py-5 font-extralight">
                Location: Fine art museum Ho Chi Minh city
            </div>
            <div className="py-5 font-extralight">Price: 50.000</div>
            <button onClick={moveToSearch} className="mt-3 px-7 py-3 border-2 border-black hover:bg-white duration-300">
                Buy tickets
            </button>
        </div>
    );
};

const BasicInformation = () => {
    return (
        <div id="basicInfo" className="flex flex-col md:flex-row">
            <LeftPanel />
            <RightPanel />
        </div>
    );
};

export default BasicInformation;
