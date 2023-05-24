import React from 'react';
import cam from '../components/NewsComponent/camera.png'
import { Link } from 'react-router-dom';

const Blog = () => {
    const newsArr = [
        { id: 1 },
        { id: 2 },
        { id: 3 },
        { id: 4 },
        { id: 5 },
        { id: 6 },
    ]
    return (
        <section className='mt-44 container mx-auto'>
            <h4 className='text-5xl font-bold text-center'><span className='text-[#DBA833]'>Новости</span> топливного рынка</h4>
            <ul className='flex flex-col items-center justify-center w-full mt-8 gap-y-7'>
                {newsArr.map(x =>
                    <li className='border-black border max-w-[1200px] flex rounded-lg' key={x.id}>
                        <img src={cam} className='bg-[#F8F8F8] py-4 px-14' width={450} height={306} alt="" />
                        <div className='p-5'>
                            <p className='mb-2 font-semibold text-xl'>Заголовок новости Заголовок новости Заголовок</p>
                            <p className='mb-8'>
                                Текст новости  новости Текст новости  новости Текст новости Текст новости  Текст новости  новости Текст новости  новости Текст новости Текст новости  Текст новости  новости Текст новости  новости Текст новости Текст новости  Текст новости  новости Текст новости  новости Текст новости Текст новости
                            </p>
                            <Link to='/records'><button className='w-full text-[#DBA833] border border-[#DBA833] font-bold py-1 px-3 rounded-md'>Читать далее</button></Link>
                        </div>
                    </li>
                )}
            </ul>
            <div className='flex items-center mt-16 gap-x-10 justify-center'>
                <div className='flex items-center'>
                    <svg width="32" height="8" viewBox="0 0 32 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M31 4.5C31.2761 4.5 31.5 4.27614 31.5 4C31.5 3.72386 31.2761 3.5 31 3.5L31 4.5ZM0.646444 3.64644C0.451183 3.84171 0.451183 4.15829 0.646444 4.35355L3.82842 7.53553C4.02369 7.73079 4.34027 7.73079 4.53553 7.53553C4.73079 7.34027 4.73079 7.02369 4.53553 6.82842L1.70711 4L4.53553 1.17157C4.7308 0.976308 4.7308 0.659726 4.53553 0.464464C4.34027 0.269202 4.02369 0.269202 3.82842 0.464464L0.646444 3.64644ZM31 3.5L0.999998 3.5L0.999998 4.5L31 4.5L31 3.5Z" fill="#B6B6B6" />
                    </svg>

                    Назад
                </div>
                <div className='flex gap-x-7 items-center'>
                    <button className=' hover:text-[#DBA833] border-2 border-black hover:border-[#DBA833] font-bold p-2 text-lg rounded-lg py-1 px-3'>1</button>
                    <button className=' hover:text-[#DBA833] border-2 border-black hover:border-[#DBA833] font-bold p-2 text-lg rounded-lg py-1 px-3'>2</button>
                    <button className=' hover:text-[#DBA833] border-2 border-black hover:border-[#DBA833] font-bold p-2 text-lg rounded-lg py-1 px-3'>3</button>
                    <button className=' hover:text-[#DBA833] border-2 border-black hover:border-[#DBA833] font-bold p-2 text-lg rounded-lg py-1 px-3'>4</button>
                    <button className=' hover:text-[#DBA833] border-2 border-black hover:border-[#DBA833] font-bold p-2 text-lg rounded-lg py-1 px-3'>5</button>
                    <button className=' hover:text-[#DBA833] border-2 border-black hover:border-[#DBA833] font-bold p-2 text-lg rounded-lg py-1 px-3'>6</button>
                    <button className=' hover:text-[#DBA833] border-2 border-black hover:border-[#DBA833] font-bold p-2 text-lg rounded-lg py-1 px-3'>7</button>
                    <p className=''>...</p>
                    <button className=' hover:text-[#DBA833] border-2 border-black hover:border-[#DBA833] font-bold p-2 text-lg rounded-lg py-1 px-3'>22</button>

                </div>
                <div className='flex items-center'>
                    Вперёд
                    <svg width="32" height="8" viewBox="0 0 32 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 3.5C0.723858 3.5 0.5 3.72386 0.5 4C0.5 4.27614 0.723858 4.5 1 4.5V3.5ZM31.3536 4.35355C31.5488 4.15829 31.5488 3.84171 31.3536 3.64645L28.1716 0.464466C27.9763 0.269204 27.6597 0.269204 27.4645 0.464466C27.2692 0.659728 27.2692 0.976311 27.4645 1.17157L30.2929 4L27.4645 6.82843C27.2692 7.02369 27.2692 7.34027 27.4645 7.53553C27.6597 7.7308 27.9763 7.7308 28.1716 7.53553L31.3536 4.35355ZM1 4.5H31V3.5H1V4.5Z" fill="#5B5B5B" />
                    </svg>
                </div>
            </div>
        </section>
        
    );
};


export default Blog;