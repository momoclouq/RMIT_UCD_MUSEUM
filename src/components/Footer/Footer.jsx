// import { faFaceGrinBeamSweat } from "@fortawesome/free-solid-svg-icons";
import {
    faFacebook,
    faInstagram,
    faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Footer = () => {
    return (
        <footer className="bg-black text-white lg:px-40 md:px-24 px-10 py-10">
            <div className="flex sm:flex-row flex-col font-serif">
                <div className="text-4xl md:text-5xl basis-1/2 pb-4">
                    Find Your Art
                </div>
                <div className="basis-1/2">
                    <div className="h-52 lg:text-3xl text-2xl flex flex-col justify-between pb-16">
                        <div className="text-3xl mb-5">Contacts</div>
                        <div className="text-sm mb-4">
                            <p className="font-thin">Phone:</p>
                            <p className="underline mt-1 underline-offset-4 font-thin">
                                012-345-6789
                            </p>
                        </div>
                        <div className="text-sm">
                            <p className="font-thin">Email:</p>
                            <p className="underline mt-1 underline-offset-4 font-thin">
                                museum@rmit.edu.vn
                            </p>
                        </div>
                    </div>
                    <div className="lg:text-2xl text-xl">
                        <div className="text-3xl">Socials</div>
                        <div className="w-44 flex flex-row justify-between py-8">
                            <FontAwesomeIcon size="2x" icon={faTwitter} />
                            <FontAwesomeIcon size="2x" icon={faFacebook} />
                            <FontAwesomeIcon size="2x" icon={faInstagram} />
                        </div>
                    </div>
                </div>
            </div>
            <div className="text-sm">
                Powered by <span className="underline">RMIT</span>
            </div>
        </footer>
    );
};

export default Footer;
