import { useState, useContext } from "react";
import Layout from "../../components/Layout/Layout";
import myContext from "../../context/MyContext";
import Loader from "../../components/loader/Loader";

const UserDashboard = () => {
    // user
    const user = JSON.parse(localStorage.getItem('users'));

    const context = useContext(myContext);
    const { loading, getAllOrder } = context;

    // State to manage active tab
    const [activeTab, setActiveTab] = useState('order'); // 'order' or 'profile'

    return (
        <Layout>
            <div className="container mx-auto px-4 py-5 lg:py-8">
                {/* Top */}
                <div className="top">
                    {/* main */}
                    <div className="bg-blue-50 py-5 rounded-xl border border-blue-100">
                        {/* image */}
                        <div className="flex justify-center">
                            <img src="https://cdn-icons-png.flaticon.com/128/2202/2202112.png" alt="" />
                        </div>
                        {/* text */}
                        <div>
                            {/* Name */}
                            <h1 className="text-center text-lg">
                                <span className="font-bold">Name : </span>
                                {user?.name}
                            </h1>

                            {/* Email */}
                            <h1 className="text-center text-lg">
                                <span className="font-bold">Email : </span>
                                {user?.email}
                            </h1>

                            {/* Date */}
                            <h1 className="text-center text-lg">
                                <span className="font-bold">Date : </span>
                                {user?.date}
                            </h1>

                            {/* Role */}
                            <h1 className="text-center text-lg">
                                <span className="font-bold">Role : </span>
                                {user?.role}
                            </h1>
                        </div>
                    </div>
                </div>

                {/* Tabs */}
                <div className="flex justify-center my-4">
                    <button
                        className={`px-4 py-2 mx-2 rounded ${
                            activeTab === 'order' ? 'bg-gray-800 text-white' : 'bg-gray-200 text-gray-800'
                        }`}
                        onClick={() => setActiveTab('order')}
                    >
                        Order Details
                    </button>
                    <button
                        className={`px-4 py-2 mx-2 rounded ${
                            activeTab === 'profile' ? 'bg-gray-800 text-white' : 'bg-gray-200 text-gray-800'
                        }`}
                        onClick={() => setActiveTab('profile')}
                    >
                        Profile Update
                    </button>
                </div>

                {/* Content based on active tab */}
                {activeTab === 'order' && (
                    <div className="max-w-6xl mx-auto px-2 md:px-0">
                        <h2 className="text-2xl lg:text-3xl font-bold mb-4">Order Details</h2>
                        <div className="flex justify-center relative top-10">
                            {loading && <Loader />}
                        </div>
                        {/* Order Details Section */}
                        {getAllOrder.filter((order) => order.userid === user?.uid).map((order, index) => (
                            <div key={index} className="mt-5 flex flex-col overflow-hidden rounded-xl border border-blue-100 md:flex-row">
                                {/* Left */}
                                <div className="w-full border-r border-blue-100 bg-blue-50 md:max-w-xs">
                                    <div className="p-8">
                                        <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-1">
                                            <div className="mb-4">
                                                <div className="text-sm font-semibold text-black">Order Id</div>
                                                <div className="text-sm font-medium text-gray-900">#{order.id}</div>
                                            </div>
                                            <div className="mb-4">
                                                <div className="text-sm font-semibold">Date</div>
                                                <div className="text-sm font-medium text-gray-900">{order.date}</div>
                                            </div>
                                            <div className="mb-4">
                                                <div className="text-sm font-semibold">Total Amount</div>
                                                <div className="text-sm font-medium text-gray-900">₹ {order.cartItems.reduce((total, item) => total + item.price * item.quantity, 0)}</div>
                                            </div>
                                            <div className="mb-4">
                                                <div className="text-sm font-semibold">Order Status</div>
                                                <div className="text-sm font-medium text-green-800">{order.status}</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* Right */}
                                <div className="flex-1">
                                    <div className="p-8">
                                        <ul className="-my-7 divide-y divide-gray-200">
                                            {order.cartItems.map((item, idx) => (
                                                <li key={idx} className="flex flex-col justify-between space-x-5 py-7 md:flex-row">
                                                    <div className="flex flex-1 items-stretch">
                                                        <div className="flex-shrink-0">
                                                            <img
                                                                className="h-40 w-40 rounded-lg border border-gray-200 object-contain"
                                                                src={item.productImageUrl}
                                                                alt="Product"
                                                            />
                                                        </div>
                                                        <div className="ml-5 flex flex-col justify-between">
                                                            <div className="flex-1">
                                                                <p className="text-sm font-bold text-gray-900">{item.title}</p>
                                                                <p className="mt-1.5 text-sm font-medium text-gray-500">{item.category}</p>
                                                            </div>
                                                            <p className="mt-4 text-sm font-medium text-gray-500">x {item.quantity}</p>
                                                        </div>
                                                    </div>
                                                    <div className="ml-auto flex flex-col items-end justify-between">
                                                        <p className="text-right text-sm font-bold text-gray-900">₹ {item.price}</p>
                                                    </div>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                )}

                {activeTab === 'profile' && (
                    <div className="max-w-6xl mx-auto px-2 md:px-0">
                        <h2 className="text-2xl lg:text-3xl font-bold mb-4">Profile Update</h2>
                        {/* Profile Update Section */}
                        <div className="p-8 border rounded-xl border-blue-100 bg-blue-50">
                            {/* Form for Profile Update */}
                            <form>
                                {/* Form fields */}
                                <div className="mb-4">
                                    <label htmlFor="name" className="block text-sm font-semibold text-gray-700">Name</label>
                                    <input
                                        type="text"
                                        id="name"
                                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-gray-400 focus:ring-1 focus:ring-gray-400"
                                        defaultValue={user?.name}
                                        readOnly
                                    />
                                </div>
                                <div className="mb-4">
                                    <label htmlFor="email" className="block text-sm font-semibold text-gray-700">Email</label>
                                    <input
                                        type="email"
                                        id="email"
                                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-gray-400 focus:ring-1 focus:ring-gray-400"
                                        defaultValue={user?.email}
                                        readOnly
                                    />
                                </div>
                                {/* Add more fields for profile update */}
                                {/* Submit button */}
                                <button
                                    type="submit"
                                    className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                                >
                                    Update Profile
                                </button>
                            </form>
                        </div>
                    </div>
                )}
            </div>
        </Layout>
    );
};

export default UserDashboard;
