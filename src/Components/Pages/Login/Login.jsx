import React, { useContext, useState } from 'react';
import { AuthContext } from '../../../AuthProvider/AuthProvider';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const Login = () => {
    const { logIn, googlelogIn } = useContext(AuthContext)
    const navigate = useNavigate()
    const location = useLocation()
    const [error, setError] = useState("")
    const forms = location?.state?.from?.pathname || "/"
    const submitHandelar = (event) => {
        setError("")
        event.preventDefault()
        const form = event.target;

        const email = form.email.value;
        const password = form.password.value;

        logIn(email, password)
            .then(result => {

                navigate(forms)
                form.reset();



            })
            .catch(error => {
                setError(error.message)
            })


    }

    const googleHandaler = () => {
        googlelogIn()
            .then(result => {
                navigate(forms)
            })
    }



    return (
        <div style={{ backgroundImage: `url("https://images.unsplash.com/photo-1608889175250-c3b0c1667d3a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fG1hcnZlbCUyMHN1cGVyJTIwaGVyb3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60")` }}>
            <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
                <div className="sm:mx-auto sm:w-full sm:max-w-sm">

                    <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Sign in to your account</h2>
                </div>

                <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                    <form onSubmit={submitHandelar} className="space-y-6" action="#" method="POST">

                        <div>
                            <label className="block text-sm font-medium leading-6 text-gray-900">Email address</label>
                            <div className="mt-2">
                                <input id="email" name="email" type="email" autoComplete="email" required className="block w-full rounded-md border-0 py-1.5 text-gray-900 px-2 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                            </div>
                        </div>


                        <div>
                            <div className="flex items-center justify-between">
                                <label className="block text-sm font-medium leading-6 text-gray-900">Password</label>
                                <Link className=' text-sm font-bold  leading-6 text-blue-700 '>forget password ?</Link>
                            </div>
                            <div className="mt-2 ">
                                <input id="password" name="password" type="password" autoComplete="current-password" required className="block w-full rounded-md px-2 border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />

                            </div>
                        </div>
                        <p className='font-semibold  text-red-500 text-center'>{error}</p>
                        <div>
                            <button type="submit" className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Sign in</button>
                        </div>
                    </form>

                    <p className='text-center text-gray-700 mt-3 font-bold'>---------Or Continue With----------</p>

                    <div className="flex flex-col max-w-sm gap-2 mt-5">


                        <button onClick={googleHandaler} type="button" className="py-2 px-4 flex justify-center items-center  bg-white hover:bg-white focus:ring-red-500 focus:ring-offset-red-200 text-black w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ">
                            <svg width="20" height="20" fill="currentColor" className="mr-2 text-red-500" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
                                <path d="M896 786h725q12 67 12 128 0 217-91 387.5t-259.5 266.5-386.5 96q-157 0-299-60.5t-245-163.5-163.5-245-60.5-299 60.5-299 163.5-245 245-163.5 299-60.5q300 0 515 201l-209 201q-123-119-306-119-129 0-238.5 65t-173.5 176.5-64 243.5 64 243.5 173.5 176.5 238.5 65q87 0 160-24t120-60 82-82 51.5-87 22.5-78h-436v-264z">
                                </path>
                            </svg>
                            Sign in with Google
                        </button>



                    </div>



                    <p className=' mt-4 font-semibold text-gray-600 text-center'>to registration Click here <Link className=' btn btn-link text-blue-700 text-xl font-bold' to="/registration">Registration</Link></p>

                </div>
            </div>
        </div>
    );
};

export default Login;