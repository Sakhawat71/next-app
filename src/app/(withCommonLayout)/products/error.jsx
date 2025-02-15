"use client";

import { useEffect } from "react";

export default function GlobalError({ error, reset }) {
    useEffect(() => {
        console.error("Error occurred:", error);
    }, [error]);

    return (
        <div className="flex flex-col items-center justify-center h-screen text-center">
            <h1 className="text-4xl font-bold text-red-600">Something Went Wrong!</h1>
            <p className="text-lg text-gray-500 mt-2">{error.message || "An unexpected error occurred."}</p>
            <button onClick={() => reset()} className="mt-4 px-6 py-2 bg-blue-500 text-white rounded-md">
                Try Again
            </button>
        </div>
    );
}
