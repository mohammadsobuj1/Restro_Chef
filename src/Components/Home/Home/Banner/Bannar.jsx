


const Bannar = () => {




    return (
        <div>




            <div className="carousel h-screen w-full">
                <div id="item1" className="carousel-item w-full">
                    <div className="hero h-full" style={{ backgroundImage: `url("https://images.unsplash.com/photo-1608889175250-c3b0c1667d3a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fG1hcnZlbCUyMHN1cGVyJTIwaGVyb3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60")` }}>
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
                <div id="item2" className="carousel-item w-full">


                    <div className="hero h-full" style={{ backgroundImage: `url("https://media.istockphoto.com/id/978966990/photo/kid-with-superhero-mask-jumping-on-sofa.jpg?b=1&s=170667a&w=0&k=20&c=fBftZhrs5j08zesoITOc-FzT4AFF3JT_yWC-PRIw0Pw=")` }}>
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
                    <div className="hero h-full" style={{ backgroundImage: `url("https://images.unsplash.com/photo-1569003339405-ea396a5a8a90?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8c3VwZXJoZXJvfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60")` }}>
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
                    <div className="hero h-full" style={{ backgroundImage: `url("https://img.freepik.com/free-vector/superhero-character-with-pop-art-style_197582-180.jpg?size=626&ext=jpg&ga=GA1.2.1318835724.1670345660&semt=ais")` }}>
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