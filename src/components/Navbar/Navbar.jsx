import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { useState } from "react";

const pages = [
    ["Home", "/RMIT_UCD_MUSEUM"],
    ["Basic", "/RMIT_UCD_MUSEUM/basic"],
    ["Time and Place", "/RMIT_UCD_MUSEUM/basic"],
    ["Other", "RMIT_UCD_MUSEUM/basic"],
];

const Navbar = () => {
    const [isSideMenuOpen, setIsSideMenuOpen] = useState(false);

    const showSideMenu = () => {
        isSideMenuOpen ? setIsSideMenuOpen(false) : setIsSideMenuOpen(true);
    };

    return (
        <nav className="flex h-20 bg-black text-white justify-between lg:justify-center items-center">
            <div></div>
            <ul className="hidden menu-list lg:flex lg:flex-row text-xl font-thin uppercase space-x-4">
                {pages.map(([title, url]) => (
                    <a
                        href={url}
                        className="px-3 py-2 hover:underline hover:decoration-1 hover:underline-offset-8"
                    >
                        {title}
                    </a>
                ))}
            </ul>
            <button
                onClick={() => {
                    showSideMenu();
                }}
                className="lg:hidden menu-button pr-8 "
            >
                <FontAwesomeIcon
                    size="2x"
                    icon={isSideMenuOpen ? faXmark : faBars}
                />
            </button>

            {isSideMenuOpen ? sideMenu() : ""}
        </nav>
    );
};

const sideMenu = () => {
    return (
        <div className="lg:hidden fixed w-full bg-black top-20 ">
            <ul className="menu-list flex flex-col text-xl font-thin uppercase pb-4">
                {pages.map(([title, url]) => (
                    <li className="menu-list-item py-2 px-8 md:text-center text-right hover:underline hover:decoration-1 hover:underline-offset-8">
                        <a href={url}>{title}</a>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Navbar;
