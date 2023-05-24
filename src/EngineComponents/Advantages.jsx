import React from 'react';
import YellowCollection from '../components/YellowCollection';
import f1 from './f1.png'
import f2 from './f2.png'
import f3 from './f3.png'

const Advantages = () => {
    const AdvantageArr = [
        {image:f1, desc:'Мы сотрудничаем с известными нефтеперерабатывающими заводами России. Гарантируем соответствие топлива всем требованиям  '},
        {image:f2, desc:'Точный учет объема топлива при отгрузке обеспечивается современным оборудованием контроля налива.'},
        {image:f3, desc:'Низкие и выгодные для вас цены, индивидуальный условия для постоянных клиентов.'},
    ]
    return (
        <section className='container mx-auto mt-20'>
            <h6 className='text-center font-bold text-5xl'><span className='text-[#DBA833]'>Преимущества </span>работы с нами</h6>
            <p className='text-center text-xl mt-2'>Отработанные логистические схемы и наличие собственного автопарка гарантируют минимальные сроки поставки</p>
            <YellowCollection YellowArr={AdvantageArr}/>
        </section>
    );
};

export default Advantages;