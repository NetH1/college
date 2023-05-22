import React from 'react';
import yaht from './yaht.png'
import contain from './contain.png'
import battery from './battery.png'

const YahtContain = () => {
    return (
        <section>
            <div className='flex'>
                <div>
                    <img src={contain} alt="" />
                </div>
                <div>
                    <img src={yaht} alt="" />
                </div>
            </div>
            <div>
                <img src={battery} alt="" />
            </div>
        </section>
    );
};

export default YahtContain;