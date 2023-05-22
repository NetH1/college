import React from 'react';
import { logo, telegram, vk, whatsapp, yandex } from '../images';

const Footer = () => {
    return (
        <footer className='container mx-auto relative z-20 py-10'>
            <nav className='flex items-center justify-between'>
            <img src={logo} alt="" />
                <ul className='text-[#DBA833] text-sm font-medium'>
                    <li>Отсутствие посредников на всех этапах топливного обеспечения. </li>
                    <li className='my-4'>Закупка напрямую с НПЗ, собственное производство емкостей, ТРК и мини АЗС. </li>
                    <li>Поставка топлива своими бензовозами.</li>
                </ul>
                <ul className='text-lg'>
                    <li>Главная</li>
                    <li className='my-4'>Дизельное топливо</li>
                    <li>Мини-АЗС</li>
                </ul>
                <ul className='text-lg'>
                    <li>Печное топливо</li>
                    <li className='my-4'>Судовое топливо</li>
                    <li>Блог</li>
                </ul>
                <div>
                    <button>Личный кабинет</button>
                </div>
            </nav>
            <div className='flex items-center justify-between border-t border-t-[#B6B6B6] border-dashed mt-9 pt-7 '>
                <div className='flex gap-x-14'>
                    <p>©2022 Все права защищены</p>
                    <p className='underline'>Политика конфиденциальности</p>
                </div>
                <div className='flex'>
                    <span className='font-bold mr-5'>Мы в соцсетях:</span>
                    <div className='flex gap-x-5'>
                        <img src={yandex} alt="" />
                        <img src={vk} alt="" />
                        <img src={whatsapp} alt="" />
                        <img src={telegram} alt="" />
                    </div>
                </div>
            </div>
        </footer>
    );
};


export default Footer;