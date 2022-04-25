const Footer = () => {
    return (
        <footer className="bg-black text-white lg:px-80 md:px-12 px-6 py-20">
            <div className="flex lg:flex-row flex-col font-serif">
                <div className="text-5xl basis-1/2 pb-4">Moment</div>
                <div className="basis-1/2">
                    <div className="h-52 lg:text-3xl text-2xl flex flex-col justify-between pb-16">
                        Contacts
                        <div className="text-sm">
                            <p>Phone:</p>
                            <p className="underline">012-345-6789</p>
                        </div>
                        <div className="text-sm">
                            <p>Email:</p>
                            <p className="underline">museum@rmit.edu.vn</p>
                        </div>
                    </div>
                    <div className="lg:text-2xl text-xl">
                        Socials
                        <div className="w-40 flex flex-row justify-between py-8">
                            <div>*</div>
                            <div>*</div>
                            <div>*</div>
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
