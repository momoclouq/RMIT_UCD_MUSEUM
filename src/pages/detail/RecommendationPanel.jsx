import { Link } from "react-router-dom";
import artifact1 from "../../images/artifact1.jpg";

const RecommendationCard = ({artifactImg, title, id, alt}) => {
    return (
        <div className="relative duration-300 w-full md:w-1/3 p-10">
            <Link to={`/artifact/${id}`}><img className="w-full rounded shadow-lg shadow-slate-300 brightness-90 aspect-square duration-300 hover:brightness-100" src={artifactImg} alt={alt} /></Link>
            <div className="text-center font-light text-slate-800 lg:text-2xl text-base py-6">{title}</div>
        </div>
    )
}

const RecommendationPanel = () => {
    return (
        <div className="box-border border-t-2 p-10 content-center bg-white">
            <div className="mx-auto text-black font-extralight text-3xl decoration-1 underline underline-offset-8 p-3">EXPLORE MORE</div>
            <div className="flex flex-col sm:flex-row flex-wrap justify-between align-center">
                <RecommendationCard artifactImg={artifact1} title="Ancient stone masks" id={1} alt="Some rocks and rocks" />
                <RecommendationCard artifactImg={artifact1} title="Ancient stone masks" id={1} alt="Some rocks and rocks" />
                <RecommendationCard artifactImg={artifact1} title="Ancient stone masks" id={1} alt="Some rocks and rocks" />
            </div>
        </div> 
    );
}

export default RecommendationPanel;