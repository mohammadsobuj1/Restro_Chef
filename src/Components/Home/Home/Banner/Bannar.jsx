


const Bannar = () => {




    return (
        <div>




            <div className="carousel h-96 md:h-screen w-full">
                <div id="item1" className="carousel-item w-full">
                    <div className="hero h-full" style={{ backgroundImage: `url("https://cdn.pixabay.com/photo/2018/05/08/11/36/avenger-3382834_640.jpg")` }}>
                        <div className="hero-overlay bg-opacity-60"></div>
                        <div className="hero-content text-center text-neutral-content">
                            <div className="max-w-md">

                                <h1 className="text-3xl md:text-5xl font-bold uppercase text-white font-ital">wlcome Our <p className="text-orange-400  ">Hero's univers</p></h1>
                                <p className="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                                <button className="btn btn-primary">Get Started</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="item2" className="carousel-item w-full">


                    <div className="hero h-full" style={{ backgroundImage: `url("https://img.freepik.com/free-vector/astronaut-alien-planet-far-galaxy-space_107791-14701.jpg?size=626&ext=jpg&ga=GA1.1.1318835724.1670345660&semt=ais")` }}>
                        <div className="hero-overlay bg-opacity-60"></div>
                        <div className="hero-content text-center text-neutral-content">
                            <div className="max-w-md">
                                <h1 className="text-5xl font-bold uppercase text-white font-ital">wlcome Our <p className="text-orange-400  ">Hero's univers</p></h1>
                                <p className="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                                <button className="btn btn-primary">Get Started</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="item3" className="carousel-item w-full">
                    <div className="hero h-full" style={{ backgroundImage: `url("https://img.freepik.com/free-vector/banner-with-astronaut-alien-planet-flying-spaceship_107791-6344.jpg?size=626&ext=jpg&ga=GA1.1.1318835724.1670345660&semt=ais")` }}>
                        <div className="hero-overlay bg-opacity-60"></div>
                        <div className="hero-content text-center text-neutral-content">
                            <div className="max-w-md">
                                <h1 className="text-5xl font-bold uppercase text-white font-ital">wlcome Our <p className="text-orange-400  ">Hero's univers</p></h1>
                                <p className="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                                <button className="btn btn-primary">Get Started</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="item4" className="carousel-item w-full">
                    <div className="hero h-full" style={{ backgroundImage: `url("https://img.freepik.com/premium-vector/colonization-comic-art-day-time_42859-80.jpg?size=626&ext=jpg&ga=GA1.1.1318835724.1670345660&semt=ais")` }}>
                        <div className="hero-overlay bg-opacity-60"></div>
                        <div className="hero-content text-center text-neutral-content">
                            <div className="max-w-md">
                                <h1 className="text-5xl font-bold uppercase text-white font-ital">wlcome Our <p className="text-orange-400  ">Hero's univers</p></h1>
                                <p className="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                                <button className="btn btn-primary">Get Started</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex justify-center w-full py-2 gap-2">
                <a href="#item1" className="btn btn-xs">1</a>
                <a href="#item2" className="btn btn-xs">2</a>
                <a href="#item3" className="btn btn-xs">3</a>
                <a href="#item4" className="btn btn-xs">4</a>
            </div>



        </div>
    );
};

export default Bannar;