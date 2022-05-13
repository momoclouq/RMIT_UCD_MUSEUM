import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Searchbar = ({isOpen}) => {
    const [text, setText] = useState(null);
    const navigate = useNavigate();

    const search = (searchTerm) => {
        navigate(`/RMIT_UCD_MUSEUM/search/${searchTerm}`);
    };

    const visibility = (() => {
        if(!isOpen) {
            return "invisible lg:visible";
        } 
        return "";
    })();

    return (
        <div class={`flex justify-center absolute top-[13px] lg:right-12 right-20 ${visibility}`}>
            <div class="mb-3">
                <input
                    autoFocus
                    type="search"
                    onChange={(event) => {
                        setText(event.target.value);
                    }}
                    onKeyPress={(event) => {
                        if (event.key === "Enter") {
                            search(text);
                        }
                    }}
                    class="
        form-control
        block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
      "
                    id="searchBar"
                    placeholder="enter artifact name"
                />
            </div>
        </div>
    );
};

export default Searchbar;
