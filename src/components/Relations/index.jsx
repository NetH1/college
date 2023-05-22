import React from 'react';
import truck from './truck.png'
import styles from './relations.module.css'

const Relations = () => {
    return (
        <article className={styles.truck}>
            <div className={`container mx-auto py-40 mt-44`}>
                <div className={``}>
                <h6 className='text-white text-4xl font-semibold'>Свяжитесь <span className='text-[#DBA833]'>с нами!</span></h6>
                <div className="flex gap-x-4 mt-5">
                    <input className="px-4 text-white placeholder:text-white border border-white rounded-md bg-[#1E1E1E] focus:outline-none" type="text" placeholder="Имя" />
                    <input className="px-4 text-white placeholder:text-white border border-white rounded-md bg-[#1E1E1E] focus:outline-none" type="text" placeholder="Телефон" />
                    <button className='text-[#DBA833] bg-white py-2 px-24 rounded-md text-lg font-bold'>Отправить</button>
                </div>
                <p className='text-right'>Согласен с политикой конфиденциальности</p>
                </div>
            </div>
        </article>
    );
};


export default Relations;