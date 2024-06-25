import React, { useState } from 'react';
import Layout from './../components/Layout/Layout';
import toast from 'react-hot-toast';

const OrderProcedPage = () => {
    const [orderInfo, setOrderInfo] = useState({
        name: '',
        address: '',
        email: '',
        phoneNumber: '',
        paymentMethod: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setOrderInfo({
            ...orderInfo,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Here you can handle form submission, e.g., sending data to backend, displaying success message, etc.
        toast.success('Order placed successfully!');
        // Optionally, clear form fields after submission
        setOrderInfo({
            name: '',
            address: '',
            email: '',
            phoneNumber: '',
            paymentMethod: '',
        });
    };

    return (
        <Layout>
            <div className="container mx-auto px-4 max-w-7xl lg:px-0">
                <div className="mx-auto max-w-2xl py-8 lg:max-w-7xl">
                    <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                        Order Proceed Page
                    </h1>
                    <form onSubmit={handleSubmit} className="mt-8 space-y-6">
                        <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                            <div className="mb-4">
                                <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">
                                    Name
                                </label>
                                <input
                                    id="name"
                                    name="name"
                                    type="text"
                                    autoComplete="name"
                                    required
                                    value={orderInfo.name}
                                    onChange={handleChange}
                                    className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    placeholder="Name"
                                />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="address" className="block text-gray-700 text-sm font-bold mb-2">
                                    Address
                                </label>
                                <input
                                    id="address"
                                    name="address"
                                    type="text"
                                    autoComplete="address"
                                    required
                                    value={orderInfo.address}
                                    onChange={handleChange}
                                    className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    placeholder="Address"
                                />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">
                                    Email address
                                </label>
                                <input
                                    id="email"
                                    name="email"
                                    type="email"
                                    autoComplete="email"
                                    required
                                    value={orderInfo.email}
                                    onChange={handleChange}
                                    className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    placeholder="Email address"
                                />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="phoneNumber" className="block text-gray-700 text-sm font-bold mb-2">
                                    Phone Number
                                </label>
                                <input
                                    id="phoneNumber"
                                    name="phoneNumber"
                                    type="tel"
                                    autoComplete="tel"
                                    required
                                    value={orderInfo.phoneNumber}
                                    onChange={handleChange}
                                    className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    placeholder="Phone Number"
                                />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="paymentMethod" className="block text-gray-700 text-sm font-bold mb-2">
                                    Payment Method
                                </label>
                                <select
                                    id="paymentMethod"
                                    name="paymentMethod"
                                    required
                                    value={orderInfo.paymentMethod}
                                    onChange={handleChange}
                                    className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                >
                                    <option value="">Select Payment Method</option>
                                    <option value="creditCard">Credit Card</option>
                                    <option value="debitCard">Debit Card</option>
                                    <option value="netBanking">Net Banking</option>
                                    <option value="wallet">Wallet</option>
                                </select>
                            </div>
                        </div>

                        <div className="flex items-center justify-center">
                            <button
                                type="submit"
                                className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                            >
                                Place Order
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </Layout>
    );
};

export default OrderProcedPage;
