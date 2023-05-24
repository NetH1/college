import React from 'react';
import Header from '../components/Header';
import Blog from '../BlogComponets/Blog';
import Clients from '../components/ClientsComponent';
import Relations from '../components/Relations';
import Team from '../components/Team';
import BigMap from '../components/BigMap';

const BlogPage = () => {
    return (
        <>
            <Header content={<div className="text-white flex flex-col justify-center items-center py-60">
                <h1 className="text-6xl font-bold text-center">Блог</h1>
                <p className='my-4 text-center'>Новости топливного рынка</p>
            </div>} />

            <Blog />
            <Clients />
            <Relations />
            <Team />
            <BigMap />
        </>
    );
};


export default BlogPage;