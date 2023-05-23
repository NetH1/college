import React from 'react';

const MyButton = ({children}) => {
    return (
        <button className='text-[#DBA833] border-[#DBA833] border-2 py-4 px-28 block mx-auto font-bold text-lg'>
            {children}
        </button>
    );
};


export default MyButton;