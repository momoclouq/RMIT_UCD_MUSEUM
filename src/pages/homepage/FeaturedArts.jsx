import { Link } from "react-router-dom";
import artifact1 from "../../images/artifact1.jpg";

const FeaturedCard = ({artifactImg, title, id, alt}) => {
    return (
        <div className="border-2 duration-300 rounded border-transparent hover:border-slate-300 p-10 w-full md:w-1/3">
            <Link to={`/RMIT_UCD_MUSEUM/artifact/${id}`}><img className="w-full rounded shadow-lg shadow-slate-300 brightness-90 aspect-square duration-300 hover:brightness-100" src={artifactImg} alt={alt} /></Link>
            <div className="text-center font-light text-neutral-900 text-3xl py-6">{title}</div>
            <div className="text-center font-extralight">This artwork presented individuals feelings. Julia idea and observation is that nowadays people sometimes are misled by their inner emotions and not always express themselves as individuals.</div>
        </div>
    )
}

const FeaturedArts = () => {
    return (
        <div className="box-border p-10 content-center bg-white">
            <div className="mx-auto text-red-400 font-extralight text-center text-3xl p-7">FEATURED ARTIFACTS</div>
            <div className="flex flex-col sm:flex-row flex-wrap justify-between align-center">
                <FeaturedCard artifactImg={artifact1} title="Ancient stone masks" id={1} alt="Some rocks and rocks" />
                <FeaturedCard artifactImg={artifact1} title="Ancient stone masks" id={1} alt="Some rocks and rocks" />
                <FeaturedCard artifactImg={artifact1} title="Ancient stone masks" id={1} alt="Some rocks and rocks" />
            </div>
        </div> 
    );
}

export default FeaturedArts;