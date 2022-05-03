import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Searchbar() {
    return (
        <div>
            <input className="text-black" type="text" placeholder="" />
            <div className="searchIcon">
                <FontAwesomeIcon icon={faMagnifyingGlass} />
            </div>
        </div>
    );
}

export default Searchbar;
