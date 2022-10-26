import React from 'react';
import { Link, Outlet, useLoaderData } from 'react-router-dom';

const Course = () => {
    const categories = useLoaderData()
    return (
        <div className='md:w-3/4 mx-auto mt-4'>
            <div className='md:flex'>
                <div className='flex flex-col md:w-1/4'>
                    {
                        categories.map(categorie => <Link className='bg-slate-700 text-white my-2 py-2 font-bold' key={categorie.id} to={`/course/${categorie.id}`}>{categorie.name}</Link>)
                    }
                </div>
                <div className='w-3/4'>
                    <Outlet></Outlet>
                </div>
            </div>
        </div>
    );
};

export default Course;