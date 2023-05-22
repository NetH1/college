import React from 'react';
import cam from './camera.png'

const News = () => {
    const newsArr = [
        {id:1},
        {id:2},
        {id:3},
    ]
    return (
        <section className='mt-44'>
            <h4 className='text-5xl font-bold text-center'><span className='text-[#DBA833]'>Новости</span> топливного рынка</h4>
            <ul className='flex items-center justify-center gap-x-10 mt-8'>
            {newsArr.map(x => 
            <li className='border-black border max-w-[310px] flex flex-col' key={x.id}>
                <img src={cam} className='bg-[#F8F8F8] py-4 px-14' width={310} height={190} alt="" />
                <div className='p-5'>
                <p className='mb-2 font-semibold text-xl'>Заголовок новости </p>
                <p className='mb-8'>Текст новости  новости Текст новости  новости Текст новости Текст новости  Текст новости  новости Текст новости  новости Текст новости Текст новости  </p>
                <button className='w-full text-[#DBA833] border border-[#DBA833] font-bold py-1 px-3 rounded-md'>Подробнее</button>
                </div>
            </li>
            )}
            </ul>
            <button className='mt-10 text-[#DBA833] border border-[#DBA833] font-bold py-1 px-16 text-lg rounded-md block mx-auto'>Смотреть все новости</button>
        </section>
    );
};


export default News;