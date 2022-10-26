import React from 'react';
import { useLoaderData } from 'react-router-dom';

const CourseDeatls = () => {
    const course = useLoaderData()
    const {title} = course
    return (
        <div>
            {title}
        </div>
    );
};

export default CourseDeatls;