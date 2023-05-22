import React from 'react';
import { team_image_1, team_image_2, team_image_3 } from '../../images';
import crown from './crown.png'


const Team = () => {
    const teamArr = [
        {image:team_image_1, name:'Олег Костенко', profession:'Менеджер по работе с клиентами', tel:'+ 7 999 999 99 99'},
        {image:team_image_2, name:'Олег Костенко', profession:'Менеджер по работе с клиентами', tel:'+ 7 999 999 99 99'},
        {image:team_image_3, name:'Олег Костенко', profession:'Менеджер по работе с клиентами', tel:'+ 7 999 999 99 99'},
    ]
    return (
        <section className={`relative bg-[#1F1F1F] z-10 py-10`}>
        <img className='absolute -z-10' src={crown} alt="" />
        <img className='absolute right-0 bottom-12 -z-10' src={crown} alt="" />
                <div className='container mx-auto '>
                <h6 className=' font-bold text-5xl text-center text-white'>Наша <span className='text-[#DBA833]'>команда</span></h6>
            <ul className='flex justify-center gap-x-7 mt-5'>
                {teamArr.map((x, index) => 
                <li className='flex flex-col items-center gap-y-2' key={index}>
                    <img src={x.image} alt="" />
                    <p className='font-bold text-3xl text-[#DBA833]'>{x.name}</p>
                    <p className='font-bold text-lg text-white'>{x.profession}</p>
                    <p className='text-lg text-[#B9B9B9]'>{x.tel}</p>
                </li>
                )}
            </ul>
                </div>
        </section>
    );
};


export default Team;