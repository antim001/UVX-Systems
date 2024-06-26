/* eslint-disable react/no-unescaped-entities */
import { Link } from "react-router-dom";
import { useContext } from 'react';
import myContext from './../../context/MyContext';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { toast } from "react-hot-toast";
import { Timestamp , addDoc, collection } from "firebase/firestore";
import {auth,fireDB} from "../../firebase/firebaseConfig"
import { createUserWithEmailAndPassword } from "firebase/auth";
import Loader from './../../components/loader/Loader';
const Signup = () => {
    const context=useContext(myContext);
    const {loading,setLoading}=context;
    const navigate=useNavigate();
    //user sign up state
    const [userSignup,setUserSignup]=useState({
        name:"",
        email:"",
        password:"",
        role:"user"
    });
    //user sign up function
    const userSignupFunction=async()=>{
        //validation
        if(userSignup.name==="" || userSignup.email==="" || userSignup.password=== ""){
            return toast.error("All fields are required")
        }
        setLoading(true);
        try{
 const users=await createUserWithEmailAndPassword(auth,userSignup.email,userSignup.password)
   // create user object
   const user = {
    name: userSignup.name,
    email: users.user.email,
    uid: users.user.uid,
    role: userSignup.role,
    time: Timestamp.now(),
    date: new Date().toLocaleString(
        "en-US",
        {
            month: "short",
            day: "2-digit",
            year: "numeric",
        }
    )
} 
//create user referenc  
const userRefrence=collection(fireDB,"user");
//Add user detail
addDoc(userRefrence, user);
setUserSignup({
    name: "",
    email: "",
    password: ""
})
toast.success("Signup Successfully");
setLoading(false);
navigate('/login')
}catch(error){
 console.log(error);
 setLoading(false)
        }
    }
    return (
        <div className='flex justify-center items-center h-screen'>
           {loading && <Loader></Loader>}
           {/* sign up Form  */}
            <div className="login_Form bg-blue-50 px-1 lg:px-8 py-6 border border-blue-100 rounded-xl shadow-md">

                {/* Top Heading  */}
                <div className="mb-5">
                    <h2 className='text-center text-2xl font-bold text-blue-500 '>
                        Signup
                    </h2>
                </div>

                {/* Input One  */}
                <div className="mb-3">
                    <input
                        type="text"
                        placeholder='Full Name'
                        value={userSignup.name}
                        onChange={(e)=>{
                            setUserSignup({
                                ...userSignup,
                                name:e.target.value
                            })
                        }}
                        className='bg-blue-50 border border-blue-200 px-2 py-2 w-96 rounded-md outline-none placeholder-blue-200'
                    />
                </div>

                {/* Input Two  */}
                <div className="mb-3">
                    <input
                        type="email"
                        placeholder='Email Address'
                        value={userSignup.email}
                        onChange={(e)=>{
                            setUserSignup({
                                ...userSignup,
                                email:e.target.value
                            })
                        }}
                        className='bg-blue-50 border border-blue-200 px-2 py-2 w-96 rounded-md outline-none placeholder-blue-200'
                    />
                </div>

                {/* Input Three  */}
                <div className="mb-5">
                    <input
                        type="password"
                        placeholder='Password'
                        value={userSignup.password}
                        onChange={(e)=>{
                            setUserSignup({
                                ...userSignup,
                                password:e.target.value
                            })
                        }}
                        className='bg-blue-50 border border-blue-200 px-2 py-2 w-96 rounded-md outline-none placeholder-blue-200'
                    />
                </div>

                {/* Signup Button  */}
                <div className="mb-5">
                    <button
                    onClick={
                       userSignupFunction 
                    }
                        type='button'
                        className='bg-blue-500 hover:bg-blue-600 w-full text-white text-center py-2 font-bold rounded-md '
                    >
                        Signup
                    </button>
                </div>

                <div>
                    <h2 className='text-black'>Have an account <Link className=' text-blue-500 font-bold' to={'/login'}>Login</Link></h2>
                </div>

            </div>
        </div>
    );
}

export default Signup;