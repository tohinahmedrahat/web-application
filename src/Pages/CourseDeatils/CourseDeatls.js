import { Button, Card, Toast } from 'flowbite-react';
import React, { useRef } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { useReactToPrint } from 'react-to-print';

const CourseDeatls = () => {
    const course = useLoaderData()
    const { title, image_url, details, price, author, total_view,category_id } = course
    const componentsRef = useRef()
    const downloadPdf = useReactToPrint({
        content: () => componentsRef.current,
        documentTitle: 'download pdf',
        onAfterPrint: () => alert("download start")
    })
    return (
        <div ref={componentsRef}>
            <div className="md:ml-8">
                <Card  >
                    <div className='flex justify-between'>
                        <div className='flex items-center'>
                            <div>
                                <img className='w-10 h-10 rounded-full' src={author.img} alt="" />
                            </div>
                            <div className='ml-4 text-gray-400 text-left'>
                                <h4>{author.name}</h4>
                                <h6>Total View: {total_view}</h6>
                            </div>
                        </div>
                        <div>
                            <Button onClick={downloadPdf}
                                outline={true}
                                gradientDuoTone="purpleToPink"
                            >
                                Download pdf
                            </Button>
                        </div>
                    </div>
                    <img src={image_url} alt="" />
                    <div className='text-left'>
                        <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                            {title}
                        </h5>
                        <h6 className='text-slate-600 my-3'>{details}</h6>
                        <h4 className='text-emerald-600'>Price: ${price}</h4>
                        <Button gradientMonochrome="cyan" className='w-full mt-3'>
                            <Link to={`/enroll/${category_id}`}>Enroll Now</Link>
                        </Button>
                    </div>
                </Card>
            </div>
        </div>
    );
};

export default CourseDeatls;