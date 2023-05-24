import React from 'react';
import Header from '../components/Header';
import BigMap from '../components/BigMap';
import MyButton from '../UI/MyButton';

const ContactsPage = () => {
    return (
        <>
            <Header content={<div className="text-white flex flex-col justify-center items-center py-60">
                <h1 className="text-6xl w-[55%] font-bold text-center">Контакты ООО<span className="text-[#DBA833]"> "НЕФТЕКОР ВВ"</span></h1>
                <p className='my-4 text-center'>Поставка нефтепродуктов в Москве и Московской области</p>
            </div>} />

            <div className='border-4 border-[#DBA833] border-dashed rounded-[41px] container mx-auto flex justify-around items-center my-16 py-14'>
                <form className='bg-[#F8F8F8] border-2 border-[#B6B6B6] py-6 px-10 flex flex-col gap-y-5 rounded-3xl'>
                    <h1 className="text-4xl font-bold"><span className="text-[#DBA833]">Свяжитесь </span> с нами</h1>
                    <div className='flex gap-x-2'>
                        <input className='p-2 focus:outline-none border-2 border-black rounded-md' placeholder='Имя' type="text" />
                        <input className='p-2 focus:outline-none border-2 border-black rounded-md' placeholder='Компания' type="text" />
                    </div>
                    <div>
                        <input className='w-full p-2 focus:outline-none border-2 border-black rounded-md' placeholder='Email' type="text" />
                    </div>
                    <div>
                        <input className='w-full p-2 focus:outline-none border-2 border-black rounded-md' placeholder='Телефон' type="text" />
                    </div>
                    <button className='text-[#DBA833] border-[#DBA833] border-2 py-2 w-full block mx-auto font-bold text-lg rounded-md'>
                        Отправить
                    </button>
                </form>

                <div className='flex flex-col font-medium'>
                <p className='py-3 border-b border-b-[#B6B6B6]'>141077</p>
                <p className='py-3 border-b border-b-[#B6B6B6]'>Московская Обл., г. Королев, ул. 50-летия ВЛКСМ, дом 4г, офис 7</p>
                <p className='py-3 border-b border-b-[#B6B6B6]'>ОГРН 1155018004151</p>
                <p className='py-3 border-b border-b-[#B6B6B6]'>ИНН 5018181082</p>
                <p className='py-3 border-b border-b-[#B6B6B6]'>Тел.: +7 (495) 796 53 83</p>
                <p className='py-3'>Email: info@neftekor.ru</p>
                </div>

            </div>

            <BigMap />
        </>
    );
};



export default ContactsPage;