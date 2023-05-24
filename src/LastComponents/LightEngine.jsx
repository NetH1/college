import React from 'react';
import img1 from './LightEngineImages/img1.png'
import img2 from './LightEngineImages/img2.png'
import img3 from './LightEngineImages/img3.png'

const LightEngine = () => {
    return (
        <section className='container mx-auto mt-32'>
         
            <h6 className='text-center font-bold text-5xl'><span className='text-[#DBA833]'>Где используют </span>светлое печное топливо</h6>
            <p className='text-center text-xl mt-2'>Топливо можно использовать для всех видов отечественных и зарубежных котлов</p>
            <div className='flex items-center gap-x-5 justify-center mt-10'>
                <div className='relative'>
                    <img src={img1} alt="" />
                    <p className='absolute w-2/3 bottom-0 left-[30%] border-2 border-[#DBA833] bg-white rounded-lg py-9 px-5'>Для обогрева промышленных, производственных площадей</p>
                </div>
                <div className='relative'>
                    <img src={img2} alt="" />
                    <p className='absolute w-2/3 bottom-0 left-1/4 border-2 border-[#DBA833] bg-white rounded-lg py-9 px-5'>В промышленности для обеспечения работы крупных генераторов</p>
                </div>
                <div className='relative'>
                    <img src={img3} alt="" />
                    <p className='absolute w-2/3 bottom-0 left-[20%] border-2 border-[#DBA833] bg-white rounded-lg py-9 px-5'>В сельском хозяйстве, для обогрева теплиц и живодноводческих ферм</p>
                </div>
            </div>
        </section>
    );
};


export default LightEngine;