import React from 'react';
import { Helmet } from "react-helmet";
const DynamicTytile = ({title}) => {
    return (
        <div className="application">
            <Helmet>
               
                <title>Hero Univers_{title}</title>
             
            </Helmet>
            
        </div>
    );
};

export default DynamicTytile;