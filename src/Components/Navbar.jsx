import { Link } from "react-router-dom";


const Navbar = () => {
    return (
        <div className="navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
        <li><Link to = '/'>Homepage</Link></li>
        <li><Link to = '/addcoffee'>Add Coffee</Link></li>
        <li><Link to = '/users'>Users</Link></li>
      
      </ul>
    </div>
  </div>
  <div className="navbar-center">
    <a className="btn btn-ghost text-xl">Coffee Shop</a>
  </div>
  <div className="navbar-end flex gap-4">
    <Link to = '/signup'>
    <button className="relative rounded px-5 py-2.5 overflow-hidden group bg-[#936748] relative hover:bg-gradient-to-r   text-white hover:ring-2 hover:ring-offset-2  transition-all ease-out duration-300">
<span className="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span>
<span className="relative">Sign Up</span>
</button>
    </Link>
    <Link to = '/signin'>
    <button className="relative rounded px-5 py-2.5 overflow-hidden group bg-[#f5efeb] relative  text-white hover:ring-2 hover:ring-offset-2 transition-all ease-out duration-300">
<span className="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span>
<span className="relative text-red-950">Sign In</span>
</button>
    </Link>
    
  </div>
</div>
    );
};

export default Navbar;