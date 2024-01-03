import { NavLink } from "react-router-dom";
import logo from '../assets/logo.png'
const Navbar = () => {
    return (
        <div className="bg-gray-800 px-10 py-4 flex text-white justify-between text-sm items-center fixed top-[3.5rem] z-40 w-full">
            <div>
                <NavLink to='/'><img src={logo} alt="" className=""/></NavLink>
            </div>
            <div className="flex items-center gap-6">
                <NavLink to='/'><p>HOME</p></NavLink>
                <NavLink to='/aboutUs'><p>ABOUT US</p></NavLink>
                <NavLink to='/ourAgents'><p>OUR AGENTS</p></NavLink>
                <NavLink to='/properties'><p>PROPERTIES</p></NavLink>
                <NavLink to='/gallery'><p>GALLERY</p></NavLink>
                <NavLink to='/blog'><p>BLOG</p></NavLink>
                <NavLink to='/contactUs'><p>CONTACT US</p></NavLink>
                <NavLink to='/search'><p>SEARCH</p></NavLink>
                <NavLink to='/addListing'><button className="border-[1px] border-gray-400 px-2 py-2 rounded-md">ADD Listing</button></NavLink>
            </div>
        </div>
    );
}

export default Navbar;
