import {
    faBars,
    faMagnifyingGlass,
    faXmark,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import mainlogo from "../../images/logo.png";
import Searchbar from "./Searchbar";

import { useState } from "react";

const pages = [
    ["Home", "/RMIT_UCD_MUSEUM"],
    ["Artifact", "/RMIT_UCD_MUSEUM/#artifacts"],
    ["Time and Place", "/RMIT_UCD_MUSEUM/#basicInfo"],
];

const Navbar = () => {
    const [isSideMenuOpen, setIsSideMenuOpen] = useState(false);
    const [isSearchBarOpen, setIsSearchBarOpen] = useState(false);

    const showSideMenu = () => {
        if (isSideMenuOpen) {
            setIsSideMenuOpen(false);
        } else {
            setIsSideMenuOpen(true);
            setIsSearchBarOpen(false);
        }
    };
    const showSearchBar = () => {
        if (isSearchBarOpen) {
            setIsSearchBarOpen(false);
        } else {
            setIsSearchBarOpen(true);
            setIsSideMenuOpen(false);
        }
    };

    return (
        <div className="flex bg-black text-white">
            <a className="flex-none" href={"/RMIT_UCD_MUSEUM"}>
                <img
                    className="h-16 p-2 museum-logo"
                    src={mainlogo}
                    alt="logo"
                />
            </a>
            <div className="grow">
                <nav className="flex h-16 text-white justify-center items-center">
                    <ul className="hidden menu-list lg:flex lg:flex-row md:flex md:flex-row text-xl font-thin uppercase space-x-4">
                        {pages.map(([title, url]) => (
                            <a
                                href={url}
                                onClick={() => {
                                    setIsSearchBarOpen(false);
                                    setIsSideMenuOpen(false);
                                }}
                                className="px-3 py-2 hover:underline hover:decoration-1 hover:underline-offset-8"
                            >
                                {title}
                            </a>
                        ))}
                    </ul>
                </nav>
            </div>
            <div className="flex flex-none h-16 w-16 lg:justify-center md:justify-center justify-between">
                <button
                    onClick={() => {
                        showSearchBar();
                    }}
                >
                    <FontAwesomeIcon className="h-5" icon={faMagnifyingGlass} />
                </button>
                <button
                    onClick={() => {
                        showSideMenu();
                    }}
                    className="lg:hidden md:hidden menu-button pr-4"
                >
                    <FontAwesomeIcon
                        className="h-6"
                        icon={isSideMenuOpen ? faXmark : faBars}
                    />
                </button>
            </div>
            {isSideMenuOpen ? sideMenu() : ""}
            {isSearchBarOpen ? <Searchbar /> : ""}
        </div>
    );
};

const sideMenu = () => {
    return (
        <div className=" lg:hidden md:hidden fixed w-full bg-black top-16 ">
            <ul className="menu-list flex flex-col md:text-center text-xl font-thin uppercase pb-4">
                {pages.map(([title, url]) => (
                    <li className="menu-list-item py-2 px-8 text-right hover:underline hover:decoration-1 hover:underline-offset-8">
                        <a href={url}>{title}</a>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Navbar;
