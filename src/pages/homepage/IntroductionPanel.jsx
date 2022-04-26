import React from 'react';

const IntroductionPanel = () => {
    return (
        <div className="flex px-8 py-20 flex-col justify-center content-center bg-intro-panel bg-center bg-no-repeat bg-cover bg-blend-darken">
            <div className="mx-auto text-white bg-transparent text-2xl p-7">OPENING THURSDAY AUGUST 28</div>
            <div className="mx-auto text-white lg:text-7xl text-4xl p-7 ">FINE ART EXHIBITION</div>
            <div className="mx-auto text-slate-200 p-7">Time: 8 PM</div>
            <div className="mx-auto text-slate-200 p-7">Location: Ho Chi Minh</div>
            <div className="mx-auto text-slate-200 p-7">
                <button className="w-32 p-3 duration-300 rounded bg-white text-slate-600 hover:text-white hover:bg-red-700">Buy tickets</button>
            </div>
        </div> 
    )
}

export default IntroductionPanel;