import React from 'react';
import { manufacturers1, manufacturers2, manufacturers3, manufacturers4, manufacturers5 } from '../../images';

const Manufacturers = () => {
    const manufacturers = [
        {image:manufacturers1},
        {image:manufacturers2},
        {image:manufacturers3},
        {image:manufacturers4},
        {image:manufacturers5},
    ]
    return (
        <section className='mt-44 container mx-auto'>
            <h3 className='text-5xl font-bold text-center text-[#DBA833]'>Производители качественного топлива</h3>
            <p className='text-center text-2xl mb-5 mt-1'>С которыми у нас прямые договора. Вы получите топливо без посредников</p>
            <ul className='flex items-center justify-center gap-x-8'>
                {manufacturers.map((x,index) => 
                <li key={index}><img src={x.image} alt="" /></li>
                )}
            </ul>
        </section>
    );
};


export default Manufacturers;