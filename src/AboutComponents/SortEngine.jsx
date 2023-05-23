import React from 'react';
import zel1 from './zel1.png'
import zel2 from './zel2.png'
import zel3 from './zel3.png'
import MyButton from '../UI/MyButton';

const SortEngine = () => {
    const sotr = [
        {image:zel1, title:'Летнее дизельное топливо (Сорт С)', desc:'Летнее дизтопливо получают в результате перегонки сырой нефти, путём смешивания гидроочищенных прямогонных и вторичных углеводородных фракций с температурой выкипания от 40 до 250 град С. '},
        {image:zel2, title:'Межсезонное дизельное топливо (Сорт Е)', desc:'Предназначено для работы двигателей при температуре окружающей среды до -15 °С. Обеспечивает быстрый запуск двигателя и его стабильную работу, подходит для сельскохозяйственной и грузовой техники.'},
        {image:zel3, title:'Зимнее дизельное топливо (Сорт F)', desc:'Это особая марка дизельного топлива, которое обладает морозоустойчивыми свойствами. Именно такое топливо необходимо для корректной и безопасной работы двигателей при минусовых температурах. '},
    ]
    return (
        <section className='container gap-y-6 mx-auto flex justify-center flex-col items-center mt-10'>
        {sotr.map((x,index) =>
            <div key={index} className='flex pr-12 items-center border-2 border-black border-dashed rounded-3xl max-w-[1100px]'>
                <img className='' src={x.image} alt="" />
                <div className='flex flex-col items-center text-center'>
                <h6 className='text-3xl font-semibold mb-3'>{x.title}</h6>
                <p className='text-lg text-[#5B5B5B] mb-7'>{x.desc}</p>
                <MyButton>Заказать</MyButton>
                </div>
            </div>
        )}
        </section>
    );
};


export default SortEngine;