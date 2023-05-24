import React from 'react';
import { c1, c2, c3, c4, c5, c6 } from '../images';

const ExampleContainer = () => {
    return (
        <section className='container mx-auto mt-32'>
            <h6 className='text-center font-bold text-5xl'>Примеры наших <span className='text-[#DBA833]'>АЗС на предприятиях</span></h6>
            <div className="flex justify-center flex-col w-full items-center mt-5 gap-y-2">
                <div className='flex gap-x-2'>
                    <img src={c1} alt="" />
                    <img src={c2} alt="" />
                </div>
                <div className='flex gap-x-2'>
                    <img src={c3} alt="" />
                    <img src={c4} alt="" />
                </div>
                <div className='flex gap-x-2'>
                    <img src={c5} alt="" />
                    <img src={c6} alt="" />
                </div>
            </div>
        </section>
    );
};


export default ExampleContainer;