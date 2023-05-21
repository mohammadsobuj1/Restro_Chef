import React from 'react';

const Bologs = () => {
    return (
        <div>
            <h1 className='font-sans font-bold underline text-orange-500 mt-5 text-center text-3xl'>Answer & Qustion</h1>
            <div className="md:flex border-4 bg-gray-300 border-orange-300 p-8 w-[80%] mx-auto mt-12 rounded-md">
                <div className=''>

                    <h1 className=" font-bold text-2xl text mt-4 text-gray-700">  1. Tell us the differences between uncontrolled and controlled components.
                        ?</h1>
                    <p className='text-gray-600 text-sm mt-4 leading-6 font-italic '> <div className='font-bold text-xl'>uncontrolled: </div>  An uncontrolled component is one where the component manages its own state internally. For example, an uncontrolled  element might manage its own value based on user input, and the component's value can be accessed through the DOM. With an uncontrolled component, the state of the component is not stored in the parent component or in any other state management system. <br />      <div className='font-bold text-xl'>controlled: </div>  A controlled component, on the other hand, is one where the parent component manages the component's state. This means that the parent component passes the value of the component as a prop, and also passes a callback function that is called whenever the component's value changes. The parent component is responsible for updating the value of the component, and can also access the component's value at any time.

                        be accessed through the DOM. With controlled components, the value of the component is accessed through the props passed down by the parent component
                    </p>



                    <h1 className=" font-bold text-2xl text mt-4 text-gray-700">2.  How to validate React props using PropTypes? </h1>
                    <p className='text-gray-600 text-sm mt-4 leading-6 font-italic '>With React props, you can send data to a component when you call on that component, including numbers, strings, functions, objects, and arrays. If you have multiple components, you can pass data from one component to another.

                        To pass props between components, you can add them when the component is called, just like you would pass arguments when calling on a regular JavaScript function.
                        When developing a React application, you’ll need to structure and define your props to avoid bugs and errors. Just like a function might have mandatory</p>




                    <h1 className=" font-bold text-2xl text mt-4 text-gray-700">  3. Tell us the difference between nodejs and express js.?</h1>
                    <p className='text-gray-600 text-sm mt-4 leading-6 font-italic '> Node.js:
                        ode.js provides a runtime environment for executing JavaScript code on the server-side, while Express.js provides a framework for building web applications and RESTful APIs.

                        Node.js is a runtime environment that allows you to run JavaScript on the server-side. It provides a platform for building fast, scalable and high-performance server-side applications. Node.js is built on top of the V8 JavaScript engine used by Google Chrome, which means that it has excellent performance and is capable of handling a large number of concurrent connections.
                        <br />

                        Express.js builds on top of Node.js, so it inherits the same scalability benefits.
                        Express.js is a web application framework that runs on top of Node.js. It provides a set of tools and features for building web applications, such as routing, middleware, and templates. Express.js is known for being lightweight and flexible, which makes it a popular choice for building RESTful APIs and web applications.
                    </p>



                    <h1 className=" font-bold text-2xl text mt-4 text-gray-700">  4. What is a custom hook, and why will you create a custom hook?</h1>
                    <p className='text-gray-600 text-sm mt-4 leading-6 font-italic '>
                        Sometimes the logic required for a component can become too complex and can lead to a bloated component. Custom hooks can help by abstracting away that complexity into a single, reusable function
                        Custom React JS hooks offer reusability as when a custom hook is created, it can be reused easily, which makes the code cleaner and reduces the time to write the code. It also enhances the rendering speed of the code as a custom hook does not need to be rendered again and again while rendering the whole code..</p>
                </div>

            </div>


        </div>


    );
};

export default Bologs;