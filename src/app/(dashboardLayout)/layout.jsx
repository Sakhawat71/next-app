import Sidebar from '@/components/shared/Sidebar';
import React from 'react';

const DashboardLayout = ({children}) => {
    return (
        <div className='grid grid-cols-2'>
            <Sidebar />
            <main className="container mx-auto p-4 flex-grow min-h-[75vh]">{children}</main>
        </div>
    );
};

export default DashboardLayout;