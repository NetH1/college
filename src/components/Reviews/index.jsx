import React from 'react';
import { reviews } from '../../images';
import styles from './reviews.module.css'

const Reviews = () => {
    const reviewscomments = [
        { title: 'ООО "ДЭКА"', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.' },
        { title: 'ООО "Уваровская ПМК 22"', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.' },
        { title: 'ООО "ВТОРМЕТАЛЛ"', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.' },
    ]
    return (
        <section className='container mx-auto border-2 border-[#DBA833] border-dashed rounded-[150px] bg-[#F8F8F8] py-10 px-14 max-w-[1200px] mt-44'>
            <h4 className='text-center font-bold text-5xl mb-5'>Отзывы</h4>
            <ul className=' flex flex-col items-center gap-y-7 '>
                {reviewscomments.map((x, index) =>
                    <li className='flex items-center justify-around bg-white border border-black py-7 rounded-[50px]' key={index}>
                        <div className='w-1/4 flex items-center'>
                        <p className={`${styles.text_vertical} text-lg font-medium text-[#B6B6B6] text-center`}>Наведите, чтобы <br /> посмотреть письмо</p>
                        <img className='ml-4' src={reviews} alt="" />
                        </div>
                        <div className='w-1/2'>
                        <p className='text-[#DBA833] text-3xl font-semibold'>{x.title}</p>
                        <p className='text-lg font-medium text-[#5B5B5B] mt-2'>{x.description}</p>
                        </div>
                    </li>
                )}
            </ul>
        </section>
    );
};


export default Reviews;