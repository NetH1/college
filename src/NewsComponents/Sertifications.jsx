import React from 'react';
import PropTypes from 'prop-types';
import { s1, s2, s3, s4, s5 } from '../images';

const Sertifications = () => {
    const brd = 'border-[#DBA833] border-dashed border-4'
    return (
        <section className='container mx-auto mt-32'>
            <h6 className='text-center font-bold text-5xl'>Мини-АЗС Нефтекор <span className='text-[#DBA833]'> сертефицированы</span></h6>
            <p className='text-center text-xl mt-2 mb-4'>Мы поставляем продукцию с полным комплектом разрешительной документации</p>
            <div className={`flex flex-col items-center bg-[#F8F8F8] gap-y-4 ${brd} py-4 rounded-tr-[80px] rounded-tl-[80px] rounded-br-[300px] rounded-bl-[300px]`}>
                <div className='flex gap-x-4'>
                <img src={s1} alt="" />
                <img src={s2} alt="" />
                <img src={s3} alt="" />
                </div>
                <div className='flex gap-x-4'>
                    <img src={s4} alt="" />
                    <img src={s5} alt="" />
                </div>
            </div>
        </section>
    );
};


export default Sertifications;