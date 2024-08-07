import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import SearchBar from './../SearchBar/SearchBar';
import logo from '../../assets/logo.png';
import { useSelector } from 'react-redux';
import CategoriesDropdown from './../Categories/Categories';
import { AiOutlineShoppingCart } from "react-icons/ai";
import { FaUser } from "react-icons/fa";

const Navbar = () => {
    const user = JSON.parse(localStorage.getItem('users'));
    const navigate = useNavigate();
    const logout = () => {
        localStorage.removeItem('users');
        navigate('/login');
    };
    // cart items
    const cartItems = useSelector((state) => state.cart);
    const [isOpen, setIsOpen] = useState(false);
    const [userDropdownOpen, setUserDropdownOpen] = useState(false);

    // Toggle the dropdown menu
    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    // Toggle the user dropdown menu
    const toggleUserDropdown = () => {
        setUserDropdownOpen(!userDropdownOpen);
    };

    // navList Data
    const navList = (
        <ul className="flex flex-col lg:flex-row lg:space-x-3 text-light-blue-800 font-medium text-md px-5">
            {/* Home */}
            <li className="py-2 lg:py-0">
                <Link to={'/'}>Home</Link>
            </li>

            {/* All Product */}
            <li className="py-2 lg:py-0">
                <Link to={'/allproduct'}>All Product</Link>
            </li>
            {/* categories */}
            <li className="py-2 lg:py-0">
                <Link to={'/'}><CategoriesDropdown /></Link>
            </li>

            {/* Signup */}
            {!user ? (
                <li className="py-2 lg:py-0">
                    <Link to={'/signup'}>Signup</Link>
                </li>
            ) : ""}
            {/* login */}
            {!user ? (
                <li className="py-2 lg:py-0">
                    <Link to={'/login'}>Login</Link>
                </li>
            ) : ""}
            {/* User */}
            {user && (
                <li className="py-2 lg:py-0 relative">
                    <button onClick={toggleUserDropdown} className="focus:outline-none">
                      
                      <  FaUser></FaUser>
                      
                    </button>
                    {userDropdownOpen && (
                        <ul className="absolute right-0  lg:right-16 mt-2 w-48 bg-white shadow-lg rounded-lg py-2 z-10">
                           <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer" onClick={() => { setUserDropdownOpen(false); logout(); }}>
                               Name: {user.name}
                            </li>
                            <li className="px-4 py-2 hover:bg-gray-200">
                                <Link to={'/user-dashboard'} onClick={() => setUserDropdownOpen(false)}>Dashboard</Link>
                            </li>
                            <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer" onClick={() => { setUserDropdownOpen(false); logout(); }}>
                                Logout
                            </li>
                            
                        </ul>
                    )}
                </li>
            )}
            {/* Cart */}
            <li className="py-2 lg:py-0 relative">
                <Link to={'/cart'} className="relative inline-block">
                    <AiOutlineShoppingCart className="text-2xl" />
                    
                </Link>
            </li>
        </ul>
    );

    return (
        <nav className="bg-gray-300 sticky top-0 z-10 mb-4">
            {/* main */}
            <div className="flex justify-between items-center py-3 px-5 lg:px-3">
                {/* left */}
                <div className="left">
                    <Link to={'/'}>
                        <img className='w-28 max-h-28' src={logo} alt="" />
                    </Link>
                </div>

                {/* Hamburger menu */}
                <div className="lg:hidden">
                    <button onClick={toggleDropdown} className="text-black focus:outline-none">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}></path>
                        </svg>
                    </button>
                </div>

                {/* Search Bar - hidden on small screens */}
                <div className="hidden lg:block">
                    <SearchBar />
                </div>
                {/* right - hidden on small screens */}
                <div className="hidden lg:flex lg:items-center">
                    {navList}
                </div>
            </div>

            {/* Dropdown menu */}
            {isOpen && (
                <div className="lg:hidden bg-gray-300">
                    {navList}
                    <div className="py-3">
                        <SearchBar />
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
