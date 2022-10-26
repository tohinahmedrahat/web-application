import { Button, Card } from 'flowbite-react';
import React from 'react';
import { Link } from 'react-router-dom';

const CategoriesCard = ({ categorie }) => {
    const { name, id, img } = categorie
    return (
        <div className="max-w-sm">
            <Card >
                <img src={img} alt="" />
                <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    {name}
                </h5>
                <Button gradientMonochrome="cyan">
                    <Link to={`/course/${id}`}>See Course Deatls</Link>
                </Button>
            </Card>
        </div>
    );
};

export default CategoriesCard;