import React from 'react';

const Profession = () => {
    return (
        <div className='content flex items-center justify-between h-full'>
            <div className='w-132.25 h-84.5 flex flex-col justify-between'>
                <div className='w-full h-67'>
                <p className="section-title">What I do?</p>
                <div className='h-40 mt-6 w-full'>
                    <p className='text-lg font-normal text-gray-400 mb-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla purus arcu, varius eget velit non, laoreet imperdiet orci. Mauris ultrices eget lorem ac vestibulum. Suspendis imperdiet,</p>
                    <p className=' text-lg font-normal text-gray-400'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla purus arcu, varius eget velit non.</p>
                </div>
                </div>
                <a href="#" className='btn btn-primary text-white w-31.5 h-12 text-[16px] font-semibold'>Say Hello!</a>
            </div>
            <div className='w-162 h-134 bg-green-300'>Bello</div>
        </div>
    );
};

export default Profession;