import React from 'react';

const RegisterPage = () => {
    return (
        <div className="max-w-md mx-auto mt-10 p-6 border rounded-md shadow">
            <h2 className="text-xl font-bold mb-4">Register</h2>
            <input className="w-full border p-2 mb-3" type="text" placeholder="Full Name" />
            <input className="w-full border p-2 mb-3" type="email" placeholder="Email" />
            <input className="w-full border p-2 mb-3" type="password" placeholder="Password" />
            <button className="w-full bg-green-500 text-white p-2">Register</button>
        </div>
    );
};

export default RegisterPage;