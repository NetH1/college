import React from 'react';
import Header from '../components/Header';
import NewsContainers from '../NewsComponents/NewsContainers';
import MiniAZS from '../NewsComponents/MiniAZS';
import ExampleContainer from '../NewsComponents/ExampleContainer';
import Sertifications from '../NewsComponents/Sertifications';
import GeoghraphyMap from '../components/GeoghraphyMap';
import Clients from '../components/ClientsComponent';
import Reviews from '../components/Reviews';
import News from '../components/NewsComponent';
import Relations from '../components/Relations';
import Team from '../components/Team';
import BigMap from '../components/BigMap';

const NewsPage = () => {
    return (
        <>
            <Header content={(
                <div className="text-white flex flex-col justify-center items-center py-60">
                    <h1 className="text-6xl w-[55%] font-bold text-center"><span className="text-[#DBA833]">Мини-АЗС</span> НЕФТЕКОР</h1>
                    <p className='my-4 text-center'>Получите собственную АЗС на вашем предприятии</p>
                    <button className="bg-[#DBA833] py-3.5 px-14 rounded-md">Заказать звонок</button>
                </div>
            )}/>
            <NewsContainers />
            <MiniAZS />
            <ExampleContainer />
            <Sertifications />
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


export default NewsPage;