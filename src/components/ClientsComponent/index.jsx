import React from 'react';
import { atlant, atp, deka, flower, lo22, lom } from '../../images';

const Clients = () => {
    const clients = [
        {image:lom},
        {image:atlant},
        {image:lo22},
        {image:deka},
        {image:flower},
        {image:atp},
    ]
    return (
        <section className='mt-44 container mx-auto'>
            <h3 className='text-5xl font-bold text-center text-[#DBA833]'>Клиенты</h3>
            <p className='text-center text-2xl mb-5 mt-1'>Мы поставляем дизельное топливо более 15 лет</p>
            <ul className='flex items-center justify-center gap-x-5'>
                {clients.map((x,index) => 
                <li key={index}><img src={x.image} alt="" /></li>
                )}
            </ul>
        </section>
    );
};


export default Clients;