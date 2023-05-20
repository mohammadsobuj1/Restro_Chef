

import { useEffect, useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import Toy from './Toy';

const Toys = () => {
    const [activeTab, setActiveTab] = useState("all");
    const [toys, setToys] = useState([]);


    useEffect(() => {
        fetch(`https://assainment-11-sarver.vercel.app/alltoys/${activeTab}`)
            .then(res => res.json())
            .then(data => {
                setToys(data)
            })
    }, [activeTab])

    const handleTabClick = (tabName) => {
        setActiveTab(tabName);

    };

    return (
        <div className="bg-slate-300">
            <h1 className='text-5xl text-center uppercase font-pera py-10 text-orange-500'>Our Hero's <div className="text-gray-700 font-ital ">Categorey</div> </h1>


            <Tabs>
                <TabList>
                    <Tab><div
                        onClick={() => handleTabClick("all")}
                        className={`
                        py-3 px-5 font-medium text-xl rounded-xl ${activeTab == "all" ? "   bg-orange-500 font-ital text-white" : ""
                            }`}
                    >
                        All
                    </div></Tab>
                    <Tab><div
                        onClick={() => handleTabClick("marvel")}
                        className={`
                        py-3 px-5 font-medium text-xl rounded-xl ${activeTab == "marvel" ? "   bg-orange-500 font-ital text-white" : ""
                            }`}
                    >
                        Marvel
                    </div></Tab>
                    <Tab> <div
                        onClick={() => handleTabClick("dc")}
                        className={`py-3 px-5 font-medium text-xl rounded-xl ${activeTab == "dc" ? " bg-orange-500 font-ital text-white" : ""
                            }`}
                    >
                        DC
                    </div></Tab>
                    <Tab><div
                        onClick={() => handleTabClick("starwear")}
                        className={`py-3 px-5 font-medium text-xl rounded-xl ${activeTab == "starwear" ? "  bg-orange-500 font-ital text-white " : ""
                            }`}
                    >
                        Star Wear
                    </div></Tab>
                </TabList>

                <TabPanel >
                    <h1 className='text-3xl md:text-5xl m-8 underline text-center uppercase font-pera mt-10 text-orange-500'>ALL <div className="text-gray-700 font-ital ">heros's here</div> </h1>
                </TabPanel>
                <TabPanel>
                <h1 className='text-3xl md:text-5xl m-8 underline text-center uppercase font-pera mt-10 text-orange-500'>marvel <div className="text-gray-700 font-ital ">heros's here</div> </h1>
                </TabPanel>
                <TabPanel>
                <h1 className='text-3xl md:text-5xl m-8 underline text-center uppercase font-pera mt-10 text-orange-500'>dc <div className="text-gray-700 font-ital ">heros's here</div> </h1>
                </TabPanel>
                <TabPanel>
                <h1 className='text-3xl md:text-5xl m-8 underline text-center uppercase font-pera mt-10 text-orange-500'>star wear <div className="text-gray-700 font-ital ">heros's here</div> </h1>
                </TabPanel>
            </Tabs>

            <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-5 w-[90%] mx-auto ">
                {
                    toys?.map(toy => <Toy
                        key={toy._id}
                        toy={toy}

                    />)
                }
            </div>
        </div>
    );
};

export default Toys;