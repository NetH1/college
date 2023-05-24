import React from 'react';
import Header from '../components/Header';
import Advantages from '../EngineComponents/Advantages';
import Neftekor from '../EngineComponents/Neftekor';
import Manufacturers from '../components/Manufacturers';
import GeoghraphyMap from '../components/GeoghraphyMap';
import Clients from '../components/ClientsComponent';
import Reviews from '../components/Reviews';
import News from '../components/NewsComponent';
import Relations from '../components/Relations';
import Team from '../components/Team';
import BigMap from '../components/BigMap';

const EnginePage = () => {
    return (
        <>
            <Header content={
                <div className="text-white flex flex-col justify-center items-center py-60">
                    <h1 className="text-center text-6xl w-1/2 font-bold"><span className="text-[#DBA833]">Поставка</span> светлого <span className="text-[#DBA833]">печного топлива</span> в Москве и Московской области</h1>
                    <div className='flex items-center gap-x-10 mt-10'>
                        <button className='text-[#DBA833] border-[#DBA833] border-dashed border-2 p-3 text-2xl'>Оптовые цены</button>
                        <button className='text-[#DBA833] border-[#DBA833] border-dashed border-2 p-3 text-2xl'>высокое качество топлива</button>
                        <button className='text-[#DBA833] border-[#DBA833] border-dashed border-2 p-3 text-2xl'>быстрая доставка</button>
                    </div>
                    <p className='my-6 text-center'>От 1000 литров и от 46 рублей за литр</p>
                    <button className="bg-[#DBA833] py-3.5 px-14 rounded-md">Заказать звонок</button>
                </div>} />

                <div className='container mx-auto flex justify-center items-center border-4 py-9 px-7 border-[#5B5B5B] border-dashed rounded-3xl mt-20'>
                <h1 className="text-center text-6xl w-3/4 font-bold">
                Вы получите
                <span className="text-[#DBA833]"> персональные условия </span>
                доставки топлива
                <span className="text-[#DBA833]"> в любых объемах </span> 
                и по <span className="text-[#DBA833]"> нужному вам графику.</span>
                </h1>
                </div>

                <Advantages />
                <Neftekor />
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


export default EnginePage;