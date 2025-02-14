'use client'
import { useRouter } from 'next/navigation';

const AboutPage = () => {
    const route = useRouter();

    const handleNavigation = () => {
        route.push('/dashboard')
    };


    return (
        <div>
            <h2 className='text-center'>About </h2>

            <button
                onClick={handleNavigation}
                className='border-black p-1 bg-gray-400 rounded-lg text-white'
            >
                DashBoard
            </button>
        </div>
    );
};

export default AboutPage;