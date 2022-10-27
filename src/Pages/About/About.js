import { Accordion } from 'flowbite-react';
import React from 'react';
import course from "../../img/course.jpg"

const About = () => {
    return (
        <div className='md:flex'>
            <div className='mr-4'>
                <img className='w-full' src={course} alt="" />
            </div>
            <div className='ml-4 w-full' >
                <Accordion>
                    <Accordion.Panel>
                        <Accordion.Title>
                            about our site
                        </Accordion.Title>
                        <Accordion.Content>
                            <p className="mb-2 text-gray-500 dark:text-gray-400">
                                In higher education a course is a unit of teaching that typically lasts one academic term, is led by one or more instructors, and has a fixed roster of students. A course usually covers an individual subject. Courses generally have a fixed program of sessions every week during the term, called lessons or classes.
                            </p>

                        </Accordion.Content>
                    </Accordion.Panel>
                    <Accordion.Panel>
                        <Accordion.Title>
                            Describe Our Course
                        </Accordion.Title>
                        <Accordion.Content>
                            <p className="mb-2 text-gray-500 dark:text-gray-400">
                                You describe your course in a course overview. The overview contains important information for students who may be interested in taking your course. It introduces the main idea of the course and describes the topics or concepts that the course covers. The overview can also describe the skills and knowledge your students need to be able to succeed in your course, as well as provide information about course requirements and staff.
                            </p>

                        </Accordion.Content>
                    </Accordion.Panel>
                    <Accordion.Panel>
                        <Accordion.Title>
                            Top reviews
                        </Accordion.Title>
                        <Accordion.Content>
                            <p className="mb-2 text-gray-500 dark:text-gray-400">
                                By celina •
                                Jan 20, 2016

                                Very interesting course, better done when in an academic context and with an ongoing project to carry out the exercices for. If you don't have access to a university library, you will be very limited, but the course presents some alternatives for us professionals who are still interested in researching and documenting our work with a more scientific approach.

                                By KCMR •
                                Jun 14, 2020

                                This course has taught me a lot of techniques in searching information for my  academic researches. Thank you to all people behind this, especially to the professors in this course!
                            </p>

                        </Accordion.Content>
                    </Accordion.Panel>
                </Accordion>
            </div>
        </div>
    );
};

export default About;