import React from 'react';
import yaht from './yaht.png'
import contain from './contain.png'
import battery from './battery.png'
import MyButton from '../UI/MyButton';

const YahtContain = () => {
    return (
        <section className='relative'>
            <div className='flex relative'>
                <div className='relative'>
                    <img className='max-w-[900px]' src={contain} alt="" />
                    <div className='absolute bottom-0 right-0 bg-[#2C2C2C] backdrop-blur-sm opacity-80 p-20 rounded-lg w-2/3'>
                        <h5 className='font-semibold text-3xl text-white'>Судовое топливо</h5>
                        <p className='mt-3 text-lg text-white'>Мы предоставляем судовое дизельное топливо как для физических лиц, так и компаниям</p>
                        <button className='mt-7 bg-[#DBA833] py-3.5 px-14 rounded-md text-white font-bold'>Подробнее</button>
                    </div>
                </div>
                <div className='relative'>
                    <img className='w-full  h-full' src={yaht} alt="" />
                    <div className='absolute top-0 left-0 bg-[#2C2C2C] backdrop-blur-sm opacity-80 p-20 rounded-lg w-2/3'>
                        <h5 className='font-semibold text-3xl text-white'>Дизельное топливо</h5>
                        <p className='mt-3 text-lg text-white'>Мы являемся надежным поставщиком дизельного топлива в Москве и Московской области.</p>
                        <button className='mt-7 bg-[#DBA833] py-3.5 px-14 rounded-md text-white font-bold'>Подробнее</button>
                    </div>
                </div>
            </div>
            <div className='relative'>
                <img src={battery} alt="" />
                <div className='absolute top-0 left-[52%] bg-[#2C2C2C] backdrop-blur-sm opacity-80 p-20 rounded-lg w-1/3 h-full'>
                        <h5 className='font-semibold text-3xl text-white'>Печное топливо</h5>
                        <p className='mt-3 text-lg text-white'>Печное топливо может служить для отопления коммерческой недвижимости и частных домов, строительных площадок, в качестве топлива для небольших котельных и сельхоз организаций.</p>
                        <button className='mt-7 bg-[#DBA833] py-3.5 px-14 rounded-md text-white font-bold'>Подробнее</button>
                    </div>
            </div>
        </section>
    );
};

export default YahtContain;