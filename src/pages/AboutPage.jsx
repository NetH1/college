import React from 'react';
import GeoghraphyMap from '../components/GeoghraphyMap';
import Clients from '../components/ClientsComponent';
import Reviews from '../components/Reviews';
import Header from '../components/Header';
import MyButton from '../UI/MyButton';
import SortEngine from '../AboutComponents/SortEngine';
import Manufacturers from '../components/Manufacturers';
import News from '../components/NewsComponent';
import Relations from '../components/Relations';
import Team from '../components/Team';
import BigMap from '../components/BigMap';

const AboutPage = () => {
    return (
        <>
        <Header content={(<div>
                <div className="text-white flex flex-col justify-center items-center py-60">
                    <h1 className="text-center text-6xl w-1/2 font-bold"><span className="text-[#DBA833]">Поставка</span> дизельного топлива <span className="text-[#DBA833]">Евро 5</span> в Москве и Московской области</h1>
                    <div className='flex items-center gap-x-10 mt-10'>
                        <button className='text-[#DBA833] border-[#DBA833] border-dashed border-2 p-3 text-2xl'>Оптовые цены</button>
                        <button className='text-[#DBA833] border-[#DBA833] border-dashed border-2 p-3 text-2xl'>высокое качество топлива</button>
                        <button className='text-[#DBA833] border-[#DBA833] border-dashed border-2 p-3 text-2xl'>быстрая доставка</button>
                    </div>
                    <p className='my-6 text-center'>От 1000 литров и от 46 рублей за литр</p>
                    <button className="bg-[#DBA833] py-3.5 px-14 rounded-md">Заказать звонок</button>
                </div>
            </div>)} />
            <SortEngine />
            <Manufacturers />
            <GeoghraphyMap />
            <Clients />
            <Reviews />
            <News />
          <Relations />
          <Team />
          <BigMap />
        </>
    );
};

export default AboutPage;