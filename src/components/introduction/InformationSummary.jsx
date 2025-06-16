import React, { useContext } from 'react';
import { ThemeContext } from '../../layouts/Main';

const InformationSummary = ({item}) => {
    const [theme] = useContext(ThemeContext)
    const lightTheme = theme === "light" ? true : false;
    // const darkTheme = theme === "dark" ? "bg-[#1F2937]" : "bg-[#F6EBFE]";
    return (
        <div className={`${lightTheme ?'bg-[#F6EBFE]':'bg-[#323d4c]'} mx-0.5 text-center  gap-6 sm:py-4`}>
            <div className='w-auto sm:w-[200px] h-[72px]'>
            <p className={`text-[32px] font-semibold ${lightTheme?'text-gray-700':'text-amber-10'}`}>{item.description}</p>
            <p className={`text-[16px] font-normal ${lightTheme?'text-gray-500':'text-gray-300'}`}>{item.title}</p>
            </div>
        </div>
    );
};

export default InformationSummary;