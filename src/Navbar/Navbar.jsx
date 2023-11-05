import { Link, NavLink } from "react-router-dom";
import useAuth from "../hooks/useAuth";


const Navbar = () => {
    const { user, logOut } = useAuth();
    
    const navItems =
        <>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/alljobs">All Jobs</Link></li>
            <li><Link to="/blogs">Blogs</Link></li>
        </>

    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {navItems}
                    </ul>
                </div>
                <a className="btn btn-ghost normal-case text-xl">
                    <img className="w-24 h-19" src="https://i.ibb.co/4YyknPc/dream-jobs-logo.png" alt="" />
                </a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navItems}
                </ul>
            </div>
            <div className="navbar-end mr-6">

                {
                    user?.email ? <div className="dropdown 
  dropdown-end">
                        <label tabIndex={0} className="btn btn-ghost
     btn-circle avatar">
                            <div className="w-15 rounded-full">
                                <img src={user?.photoURL} />
                            </div>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm 
dropdown-content mt-3 z-[1] p-2 shadow 
bg-base-100 rounded-box w-52">
                            <li>
                                <button className="btn btn-sm btn-ghost">
                                    {user?.displayName}
                                </button>
                            </li>
                            <li>
                                <button
                                    onClick={logOut}
                                    className="btn btn-sm btn-ghost">
                                    Logout
                                </button>
                            </li>
                        </ul>
                    </div>
                        :
                        <button><NavLink to="/login">Login</NavLink></button>
                }

            </div>
        </div>
    );
};

export default Navbar;