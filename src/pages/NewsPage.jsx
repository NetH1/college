import React from 'react';
import Header from '../components/Header';
import NewsContainers from '../NewsComponents/NewsContainers';

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

        </>
    );
};


export default NewsPage;