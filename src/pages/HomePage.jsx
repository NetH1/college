import React from 'react';
import Team from '../components/Team';
import Reviews from '../components/Reviews';
import News from '../components/NewsComponent';
import ContainersComponent from '../components/ContainersComponent';
import Clients from '../components/ClientsComponent';
import Manufacturers from '../components/Manufacturers';
import Relations from '../components/Relations';
import Header from '../components/Header';
import BigMap from '../components/BigMap';
import YahtContain from '../HomeComponents/YahtContain';

const HomePage = () => {
    return (
        <>
            <Header content={(<div>
                <div className="text-white flex flex-col justify-center items-center py-60">
                    <h1 className="text-6xl w-[55%] font-bold"><span className="text-[#DBA833]">Поставка нефтепродуктов</span> в Москве и Московской области</h1>
                    <p className='my-4'>От 1000 литров и от 46 рублей за литр</p>
                    <button className="bg-[#DBA833] py-3.5 px-14 rounded-md">Заказать звонок</button>
                </div>
                <h2 className="text-white font-bold text-5xl text-center pt-40 pb-10">Нефтепродукты</h2>
            </div>)} />
            <YahtContain />
            <ContainersComponent />
            <Manufacturers />
            <Clients />
            <Reviews />
            <News />
            <Relations />
            <Team />
            <BigMap />
        </>
    );
};


export default HomePage;