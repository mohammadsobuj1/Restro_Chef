

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
        <div>
            <h1 className='text-5xl text-center'>Our Heros </h1>


            <Tabs>
                <TabList>
                    <Tab><div
                        onClick={() => handleTabClick("all")}
                        className={`
                        py-3 px-5 font-medium text-xl rounded-xl ${activeTab == "all" ? "   bg-red-500 text-white" : ""
                            }`}
                    >
                        All
                    </div></Tab>
                    <Tab><div
                        onClick={() => handleTabClick("marvel")}
                        className={`
                        py-3 px-5 font-medium text-xl rounded-xl ${activeTab == "marvel" ? "   bg-red-500 text-white" : ""
                            }`}
                    >
                        Marvel
                    </div></Tab>
                    <Tab> <div
                        onClick={() => handleTabClick("dc")}
                        className={`py-3 px-5 font-medium text-xl rounded-xl ${activeTab == "dc" ? " bg-red-500 text-white" : ""
                            }`}
                    >
                        DC
                    </div></Tab>
                    <Tab><div
                        onClick={() => handleTabClick("starwear")}
                        className={`py-3 px-5 font-medium text-xl rounded-xl ${activeTab == "starwear" ? "  bg-red-500 text-white" : ""
                            }`}
                    >
                        Star Wear
                    </div></Tab>
                </TabList>

                <TabPanel>
                    All heros Here
                </TabPanel>
                <TabPanel>
                    Marvel Heros are Here
                </TabPanel>
                <TabPanel>
                    DC Heros are Here
                </TabPanel>
                <TabPanel>
                    Star Wear Heros are Here
                </TabPanel>
            </Tabs>

            <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-5 w-[90%] mx-auto">
                {
                    toys.map(toy => <Toy
                        key={toy._id}
                        toy={toy}

                    />)
                }
            </div>
        </div>
    );
};

export default Toys;