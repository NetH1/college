import React from 'react';
import y1 from './y1.png'
import y2 from './y2.png'
import y3 from './y3.png'
import YellowCollection from '../components/YellowCollection';


const MiniAZS = () => {
    const YellowArr = [
        {image:y1, desc:'Мы производим Мини АЗС более 8 лет и наработали большой опыт'},
        {image:y2, desc:'За это время мы ввели в эксплуатацию более 100 Мини-АЗС'},
        {image:y3, desc:'У нас возможно приобретение Мини АЗС Б/У'},
    ]
    return (
        <section className='container mx-auto mt-32'>
           <h6 className='text-center font-bold text-5xl'><span className='text-[#DBA833]'>Почему выгодно </span>заказывать мини-АЗС у нас?</h6> 
           <p className='text-center text-xl mt-2'>Доставим, подключим и проведем обучение персонала</p>
           <YellowCollection YellowArr={YellowArr} />
        </section>
    );
};

export default MiniAZS;