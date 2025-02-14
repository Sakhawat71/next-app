import Image from 'next/image';
import React from 'react';

export const metadata = {
    title : 'Contact | Next App',
}

const ContactPage = () => {
    return (
        <div className='grid grid-cols-2 gap-10'>
            <img
                src="https://i.ibb.co.com/3m19PvWc/pexels-pixabay-159866.jpg"
                alt="book"
                width={500}
                height={500}
                className='mx-auto'
            />
            <Image
                src="https://i.ibb.co.com/3m19PvWc/pexels-pixabay-159866.jpg"
                alt='book'
                width={500}
                height={500}
                className='mx-auto'
            />
        </div>
    );
};

export default ContactPage;