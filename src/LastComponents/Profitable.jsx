import React from 'react';
import YellowCollection from '../components/YellowCollection';
import snow from './ProfitableImages/snow.png'
import nose from './ProfitableImages/nose.png'
import central_heating from './ProfitableImages/central_heating.png'

const Profitable = () => {
    const ProArr =[
        {image:central_heating, desc:'Высокая теплоотдача'},
        {image:nose, desc:'Отсутствие запаха при горении' },
        {image:snow, desc: 'Низкая температура замерзания'}
    ]
    return (
        <section className='container mx-auto mt-32'>
        <h6 className='text-center font-bold text-5xl'><span className='text-[#DBA833]'>Почему выгодно </span>покупать печное топливо?</h6> 
            <YellowCollection  YellowArr={ProArr} />
        </section>
    );
};


export default Profitable;