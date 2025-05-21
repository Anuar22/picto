import React from 'react';
import person from '../../assets/person.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload } from '@fortawesome/free-solid-svg-icons';
const Profile = () => {
    return (
        <div className='flex justify-between items-center mt-56 bg-blue-100 rounded-2xl p-5'>
            <div className='bg-white'>
                <img src={person } alt="" />
            </div>
            <div className='w-[70%]'>
                <h2 className='text-[38px] font-semibold mb-8'>I am Professional User Experience Designer</h2>
                <p className='text-[18px]'>I design and develop services for customers specializing creating stylish, modern websites, web services and online stores. My passion is to design digital user experiences.</p>
                <p className='text-[18px] mt-3'>I design and develop services for customers specializing creating stylish, modern websites, web services.</p>
                <div className='mt-7'>
                <a className='btn btn-primary' href="#">My Project</a>
                <a className='btn ms-5 border-[#9929fb] text-[#9929fb] bg-white' href="#"><FontAwesomeIcon icon={faDownload} style={{color: "#9929fb",}} /> Download CV</a>
                </div>
            </div>
            
        </div>
    );
};

export default Profile;