import { Link } from "react-router-dom";
import { AuthContext } from "../../../AuthProvider/AuthProvider";
import { useContext } from "react";
import ActiveLink from "../../../ActiveLink/ActiveLink";


const NavBar = () => {
    const { user, logOut } = useContext(AuthContext)

    const logOutHandelar = () => {
        logOut()
            .then(() => {


            })
            .catch(error => {
                console.log(error.message)
            })
    }

    const items = <>
        {
            <>
                <ActiveLink to="/">Home</ActiveLink>
                <ActiveLink to="/alltoys">All Toys</ActiveLink>
                {
                    user ? <>
                        <ActiveLink to="/mytoys">My Toys</ActiveLink>
                        <ActiveLink to="/addtoys">Add A Toy</ActiveLink>
                    </> : ""
                }
                <ActiveLink to="blog"> Blogs</ActiveLink>
               
            </>
        }
    </>

    return (
        <div>

            <div className="navbar bg-base-300  md:flex justify-between  px-12"  >
                <div className="">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost sm:hidden">
                            X
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 ">
                            {items}
                        </ul>
                    </div>
                    <a className=" normal-case text-xl">daisyUI</a>
                </div>
                <div className=" hidden sm:flex">
                    <ul className="menu menu-horizontal px-1 gap-5">
                        {items}
                    </ul>
                </div>
                <div className="">
                    <div className="dropdown dropdown-end md:flex align-middle">
                        <div className="mt-3 mr-2">

                            {
                                user ? <div className='md:flex gap-3'>
                                    <div className='flex gap-2  hover:text-gray-400 '>
                                        <Link onClick={logOutHandelar} className='text-xl font-bold font-italic' to='/login'>Log Out</Link>

                                    </div>
                                    <div className="tooltip  tooltip-secondary tooltip-bottom " data-tip={user.displayName}>
                                        <label tabIndex={0} className=" btn-circle avatar">
                                            <div className="w-10 rounded-full">
                                                <img src={user?.photoURL} alt="" />
                                            </div>
                                        </label>

                                    </div>

                                </div>

                                    :
                                    <div className='flex gap-2 font-italic hover:text-orange-400 '>
                                        {/* <FaRegUserCircle className='text-2xl mt-1' /> */}
                                        <Link className='text-xl font-bold' to='/login'>Log In</Link>

                                    </div>
                            }


                        </div>


                    </div>
                </div>
            </div>
        </div>

    );
};

export default NavBar;