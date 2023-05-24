import React from 'react';

const YellowCollection = ({YellowArr}) => {
    return (
        <div className='flex justify-evenly gap-x-10 items-stretch h-full'>
            {YellowArr.map(x =>
            <div className='border-4 border-[#DBA833] py-5 px-10 border-dashed flex flex-col items-center text-[#DBA833] mt-7 rounded-3xl'>
                <img className='block mx-auto pb-5' src={x.image} alt="" />
                <p className='text-center w-full'>{x.desc}</p>
            </div>
            )}
        </div>
    );
};


export default YellowCollection;