import React from 'react';
import DynamicTytile from '../DyanamicTitle/DynamicTytile';

const Bologs = () => {
    return (
        <div>
             <DynamicTytile title="Bolg" />
            <h1 className='font-sans font-bold underline text-orange-500 mt-5 text-center text-3xl'>Answer & Qustion</h1>
            <div className="md:flex border-4 bg-gray-300 border-orange-300 p-8 w-[80%] mx-auto mt-12 rounded-md">
                <div className=''>

                    <h1 className=" font-bold text-2xl text mt-4 text-gray-700">  1.
                        What is an access token and refresh token? How do they work and where should we store them on the client-side
                        ?</h1>
                    <div className='text-gray-600 text-sm mt-4 leading-6 font-italic '> <div className='font-bold text-xl'>Access Token : </div> Access tokens are typically short-lived and have an expiration time. They are included in the header or as a parameter of API requests to prove the client's identity and permissions. The server verifies the access token to ensure that the client has the required authorization to perform the requested actions.Access tokens are used in token-based authentication to allow an application to access an API. The application receives an access token after a user successfully authenticates and authorizes access, then passes the access token as a credential when it calls the target API. The passed token informs the API that <br />      <div className='font-bold text-xl'>Refresh : </div> A refresh token is a long-lived credential that is used to obtain a new access token without requiring the user to reauthenticate. It is usually issued along with the access token and is used exclusively for obtaining new access tokens. special token that is used to obtain additional access tokens. This allows you to have short-lived access tokens without having to collect credentials every time one expires.
                    </div>



                    <h1 className=" font-bold text-2xl text mt-4 text-gray-700">2. Compare SQL and NoSQL databases?? </h1>
                    <div className='text-gray-600 text-sm mt-4 leading-6 font-italic '>SQL and NoSQL are two broad categories of database management systems, each with its own characteristics and use cases. Here's a comparison between SQL and NoSQ
                        Use Cases: SQL databases are suitable for applications with complex and structured data, where transactions and relationships between entities are crucial. They are widely used in traditional enterprise applications, financial systems, and applications requiring strong data consistency.
                        Scalability: SQL databases often use vertical scaling (scaling up by adding more resources to a single machine) for performance improvements. However, scaling horizontally (scaling out across multiple machines) can be challenging due to the need to maintain data consistency across distributed systems.
                    </div>




                    <h1 className=" font-bold text-2xl text mt-4 text-gray-700">  3. What is express js? What is Nest JS ?</h1>
                    <div className='text-gray-600 text-sm mt-4 leading-6 font-italic '>
                        Express.js builds on top of Node.js, so it inherits the same scalability benefits.
                        Express.js is a web application framework that runs on top of Node.js. It provides a set of tools and features for building web applications, such as routing, middleware, and templates. Express.js is known for being lightweight and flexible, which makes it a popular choice for building RESTful APIs and web applications.
                        <br />
                        Nest. js is one of the fastest-growing Node. js frameworks for building efficient, scalable, and enterprise-grade backend applications using Node. js. It is known for producing highly testable, maintainable, and scalable applications using modern JavaScript and TypeScript.
                    </div>



                    <h1 className=" font-bold text-2xl text mt-4 text-gray-700">  4. WWhat is MongoDB aggregate and how does it work?</h1>
                    <div className='text-gray-600 text-sm mt-4 leading-6 font-italic '>
                        Aggregation is a way of processing a large number of documents in a collection by means of passing them through different stages. The stages make up what is known as a pipeline. The stages in a pipeline can filter, sort, group, reshape and modify documents that pass through the pipeline.
                        The aggregation pipeline consists of multiple stages, each stage representing a specific data transformation operation. These stages are applied sequentially, with the output of one stage becoming the input for the next stage. The aggregate method takes an array of stages as its paramete
                    </div>
                </div>

            </div>


        </div>


    );
};

export default Bologs;