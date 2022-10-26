import { Button, Label, Modal, TextInput } from 'flowbite-react';
import React from 'react';
import { useLoaderData } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth/useAuth';

const Enroll = () => {
    const course = useLoaderData()
    const { user } = useAuth()
    const { title, price, author } = course
    const enrollSubmit = event => {
        event.preventDefault();
        alert("your request has been accepted")
    }
return (
    <div className='md:w-3/4 md:mx-auto text-left'>
        <form onSubmit={enrollSubmit} className="flex flex-col gap-4">
            <div>
                <div className="mb-2 block">
                    <Label
                        htmlFor="email1"
                        value="Your email"
                    />
                </div>
                <TextInput
                    id="email1"
                    type="email"
                    placeholder={user.email}
                    disabled={true}
                />
            </div>
            <div>
                <div className="mb-2 block">
                    <Label
                        htmlFor="email1"
                        value="Course Name"
                    />
                </div>
                <TextInput
                    id="email1"
                    type="email"
                    placeholder={title}
                    disabled={true}
                />
            </div>
            <div>
                <div className="mb-2 block">
                    <Label
                        htmlFor="password1"
                        value="Course Price"
                    />
                </div>
                <TextInput
                    id="password1"
                    placeholder={`$ ${price}`}
                    type="name"
                    disabled={true}
                />
            </div>
            <div>
                <div className="mb-2 block">
                    <Label
                        htmlFor="password1"
                        value="Course Instructor"
                    />
                </div>
                <TextInput
                    id="password1"
                    type="name"
                    placeholder={author.name}
                    disabled={true}
                />
            </div>
            <div>
                <div className="mb-2 block">
                    <Label
                        htmlFor="password1"
                        value="Your name"
                    />
                </div>
                <TextInput
                    id="password1"
                    type="name"
                    required={true}
                />
            </div>

            <Button type="submit">
                Submit
            </Button>
        </form>
        
    </div>
);
};

export default Enroll;