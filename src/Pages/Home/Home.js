import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import banner from "../../img/banner.jpg"
import CategoriesCard from '../CategoriesCard/CategoriesCard';

const Home = () => {
    const categories = useLoaderData()
    return (
        <div className='bg-slate-400'>
            <div className='md:flex md:w-3/4 md:mx-auto pt-4'>
            <div className='md:w-3/4'>
                <h1 className='capitalize text-white text-3xl font-bold md:mt-24'>welcome to our learning world</h1>
                <h5 className='capitalize text-lg text-gray-700 mt-3 mb-6'>we have the best mentor all over the world <br /> we believe that we can give you best coruse for learning</h5>
                <Link className='rounded bg-orange-400 px-6 py-4 text-white font-bold' to="/course">Our Course</Link>
            </div>
            <div className='md:ml-4'>
                <img src={banner} alt="" />
            </div>
        </div>
        <div className='md:grid-cols-3 md:grid md:gap-3 md:ml-6 mt-6'>
            {
                categories.map(categorie => <CategoriesCard key={categorie.id} categorie={categorie}></CategoriesCard> )
            }
        </div>
        </div>
    );
};

export default Home;