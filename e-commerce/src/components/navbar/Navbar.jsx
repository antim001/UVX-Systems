import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import SearchBar from './../SearchBar/SearchBar';
import hero from '../../assets/hero.png'
import { useSelector } from 'react-redux';

const Navbar = () => {
    const user =JSON.parse(localStorage.getItem('users'))
    const navigate=useNavigate();
    const logout =()=>{
       localStorage.clear('users')
       navigate('/login')
    }
    //cart items
    const cartItems=useSelector((state)=>state.cart)
    const [isOpen, setIsOpen] = useState(false);

    // Toggle the dropdown menu
    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    }

    // navList Data
    const navList = (
        <ul className="flex flex-col lg:flex-row lg:space-x-3 text-white font-medium text-md px-5">
            {/* Home */}
            <li className="py-2 lg:py-0">
                <Link to={'/'}>Home</Link>
            </li>

            {/* All Product */}
            <li className="py-2 lg:py-0">
                <Link to={'/allproduct'}>All Product</Link>
            </li>

            {/* Signup */}
            {
                !user ?<li className="py-2 lg:py-0">
                <Link to={'/signup'}>Signup</Link>
            </li>:""
            }
            {/* //login */}
            {
                !user ?<li className="py-2 lg:py-0">
                <Link to={'/login'}>Login</Link>
            </li>:""
            }
            {/* User */}
           {
            user?.role==="user" && <li className="py-2 lg:py-0">
            <Link to={'/user-dashboard'}>{user?.name}</Link>
        </li>
           }
             {/* admin */}
             {
                user?.role==='admin' && <li className="py-2 lg:py-0">
                <Link to={'/admin-dashboard'}>{user?.name}</Link>
            </li>
             }
 {/* /logout */}
 {
    user && <li className='cursor-pointer' onClick={logout}>Logout
    
    </li>
 }
            {/* Cart */}
            <li className="py-2 lg:py-0">
                <Link to={'/cart'}>
                    Cart({cartItems.length})
                </Link>
            </li>
        </ul>
    );

    return (
        <nav className="bg-pink-600 sticky top-0 z-10">
            {/* main */}
            <div className="flex justify-between items-center py-3 px-5 lg:px-3">
                {/* left */}
                <div className="left">
                    <Link to={'/'}>
                        <img className='w-40' src={hero} alt="" />
                    </Link>
                </div>

                {/* Hamburger menu */}
                <div className="lg:hidden">
                    <button onClick={toggleDropdown} className="text-white focus:outline-none">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}></path>
                        </svg>
                    </button>
                </div>

                {/* right - hidden on small screens */}
                <div className="hidden lg:flex lg:items-center">
                    {navList}
                </div>

                {/* Search Bar - hidden on small screens */}
                <div className="hidden lg:block">
                    <SearchBar />
                </div>
            </div>

            {/* Dropdown menu */}
            {isOpen && (
                <div className="lg:hidden bg-pink-600">
                    {navList}
                    <div className="py-3">
                        <SearchBar />
                    </div>
                </div>
            )}
        </nav>
    );
}

export default Navbar;
