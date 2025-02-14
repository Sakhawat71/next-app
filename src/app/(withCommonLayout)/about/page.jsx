'use client'
import { useRouter } from 'next/navigation';
import style from './About.module.css';

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
            <div className='my-10'>
                <h3 className={style.text_color}>Hello Everyone</h3>
            </div>
        </div>
    );
};

export default AboutPage;