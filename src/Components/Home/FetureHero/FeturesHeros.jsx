import React, { useEffect, useState } from 'react';
import FetureHero from './FetureHero';

const FeturesHeros = () => {
    const [heros, setHeros] = useState([])
    useEffect(() => {
        fetch('/hero.json')
            .then(res => res.json())
            .then(data => {
                setHeros(data)
            })

    }, [])
   
    return (
        <div className='bg-gray-900'>
             <h1 className='text-5xl text-center uppercase font-pera pt-10 text-orange-400'>Our  Feture<div className="text-white font-ital ">Hero's</div> </h1>

            <div className="grid md:grid-cols-3 gap-5">
            {
                heros?.map((hero,index)=> <FetureHero 
                key={index}
                hero={hero}

                />)
            }
         </div>
        </div>
    );
};

export default FeturesHeros;