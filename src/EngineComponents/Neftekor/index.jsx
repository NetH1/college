import React from 'react';
import styles from './neftekor.module.css'

const Neftekor = () => {
    return (
        <section className={`${styles.bg_image} mt-28`}>
            <h6 className='text-center font-bold text-5xl text-white'>НЕФТЕ<span className='text-[#DBA833]'>КОР</span></h6>
            <p className='text-center text-xl mt-2 text-white'>надежный поставщик нефтепродуктов</p>
            <button className="bg-[#DBA833] py-3.5 px-14 rounded-md text-white block mx-auto mt-5">Заказать звонок</button>
        </section>
    );
};


export default Neftekor;