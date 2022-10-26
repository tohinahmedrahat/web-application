import { ListGroupItem } from 'flowbite-react/lib/esm/components/ListGroup/ListGroupItem';
import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const Course = () => {
    const categories = useLoaderData()
    return (
        <div>
            {
                categories.map(categorie => <Link to={`/course/${categorie.id}`}>{categorie.name}</Link> )
            }
        </div>
    );
};

export default Course;