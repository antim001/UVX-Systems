import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import SearchBar from './../SearchBar/SearchBar';
import hero from '../../assets/hero.png';
import { useSelector } from 'react-redux';
import CategoriesDropdown from './../Categories/Categories';

const Navbar = () => {
    const user = JSON.parse(localStorage.getItem('users'));
    const navigate = useNavigate();
    
    const logout = () => {
        localStorage.clear('users');
        navigate('/login');
    }

    const cartItems = useSelector((state) => state.cart);
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    }

    const navList = (
        <ul className="flex flex-col lg:flex-row lg:space-x-3 text-black font-medium text-md px-5">
            <li className="py-2 lg:py-0">
                <Link to={'/'}>Home</Link>
            </li>
            <li className="py-2 lg:py-0 ">
                <Link to={'/allproduct'}>All Product</Link>
            </li>
            <li className="py-2 lg:py-0">
                <Link to={'/'}><CategoriesDropdown /></Link>
            </li>
            {
                !user ? (
                    <>
                        <li className="py-2 lg:py-0">
                            <Link to={'/signup'}>Signup</Link>
                        </li>
                        <li className="py-2 lg:py-0">
                            <Link to={'/login'}>Login</Link>
                        </li>
                    </>
                ) : null
            }
            {
                user?.role === "user" && (
                    <li className="py-2 lg:py-0">
                        <Link to={'/user-dashboard'}>{user?.name}</Link>
                    </li>
                )
            }
            {
                user?.role === 'admin' && (
                    <li className="py-2 lg:py-0">
                        <Link className=' font-bold rounded-r-xl' to={'/admin-dashboard'}>{user?.name}</Link>
                    </li>
                )
            }
            {
                user && (
                    <li className='cursor-pointer' onClick={logout}>Logout</li>
                )
            }
            <li className="py-2 lg:py-0">
                <Link to={'/cart'}>
                    Cart({cartItems.length})
                </Link>
            </li>
        </ul>
    );

    return (
        <nav className="bg-gray-300 sticky top-0 z-10 mb-4">
            <div className="flex justify-between items-center py-3 px-5 lg:px-3">
                <div className="left flex items-center">
                    <Link to={'/'}>
                        <img className='w-40' src={hero} alt="" />
                    </Link>
                </div>
                
                <div className="hidden lg:block lg:flex-grow lg:flex lg:justify-center">
                    <SearchBar />
                </div>
                
                <div className="hidden lg:flex lg:items-center lg:ml-auto">
                    {navList}
                </div>

                <div className="lg:hidden">
                    <button onClick={toggleDropdown} className="text-black focus:outline-none">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}></path>
                        </svg>
                    </button>
                </div>
            </div>

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
}

export default Navbar;
