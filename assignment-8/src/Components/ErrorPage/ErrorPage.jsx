import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const ErrorPage = () => {

    useEffect(() => {
        document.title = "ErrorPage"
    },[])
    const navigate = useNavigate();

    const handleNavigateToHome = () => {
        navigate("/home/all")
    }
    return (
        <div className='flex flex-col items-center justify-center'>
            <h1 className='text-3xl font-bold'>Hello</h1>
            <h1 className='text-xl font-bold mt-10'>I'm sorry to see you on this page.</h1>
            <h1 className='text-xl font-bold text-red-500'>This error is caused by Surge.sh or Axios; it is not the developer's fault.</h1>

            <button onClick={handleNavigateToHome} className='bg-gradient-to-r from-gray-700 to-green-200  px-5 py-3 text-xl font-bold text-black mt-20 rounded-md'>Back to Home</button>
        </div>
    );
};

export default ErrorPage;