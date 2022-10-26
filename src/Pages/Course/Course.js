import { ListGroupItem } from 'flowbite-react/lib/esm/components/ListGroup/ListGroupItem';
import React from 'react';
import { Link, Outlet, useLoaderData } from 'react-router-dom';

const Course = () => {
    const categories = useLoaderData()
    return (
        <div className='md:w-3/4 mx-auto mt-4'>
            <div className='md:flex'>
            <div className='flex flex-col'>
                {
                    categories.map(categorie => <Link to={`/course/${categorie.id}`}>{categorie.name}</Link>)
                }
            </div>
            <div>
                <Outlet></Outlet>
            </div>
        </div>                                                                  
        </div>
    );
};

export default Course;