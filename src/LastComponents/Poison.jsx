import React from 'react';
import poison from './poison.png'
import MyButton from '../UI/MyButton';

const Poison = () => {
    return (
        <section className='container mx-auto flex justify-center items-center mt-10'>
            <div className='flex pr-12 items-center border-2 border-black border-dashed rounded-3xl max-w-[1100px]'>
                <img className='' src={poison} alt="" />
                <div className='flex flex-col items-center text-center'>
                    <h6 className='text-3xl font-semibold mb-3'>Светлое печное топливо</h6>
                    <p className='text-lg text-[#5B5B5B] mb-7'>
                        В целом процесс получения топлива является высокотехнологичным, для его изготовления используется особое современное оборудование. Различие между дизельным и печным топливом заключается главным образом в наличии примесей и органических соединений.
                    </p>
                    <MyButton>Заказать</MyButton>
                </div>
            </div>
        </section>
    );
};

export default Poison;