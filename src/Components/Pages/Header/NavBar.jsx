import { Link } from "react-router-dom";

const NavBar = () => {

    const items = <>
        {
            <>
                <Link to="/">Home</Link>
                <Link>All Toys</Link>
                <Link>My Toys</Link>
                <Link to="/addtoys">Add A Toy</Link>
                <Link> Blogs</Link>
                <Link> Log In</Link>
            </>
        }
    </>

    return (
        <div>

            <div className="navbar bg-base-300  md:flex justify-between"  >
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
                    <div className="w-10 rounded-full">
                        <img src="/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NavBar;