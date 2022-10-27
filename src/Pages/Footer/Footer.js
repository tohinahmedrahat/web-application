import { Button, Label, TextInput } from 'flowbite-react';
import React from 'react';
import { FaPhoneSquareAlt, FaAddressCard } from 'react-icons/fa';

const Footer = () => {
    return (
        <div className='md:flex justify-between bg-black mt-3 md:px-8 py-4'>
            <div>
                <h2 className='text-gray-300 pt-3 text-xl font-bold'>Web Application learning </h2>
                <h3 className='text-gray-300 pt-3 font-bold'>Dhaka City</h3>
                <h5 className='text-gray-300 pt-3 font-bold'><FaAddressCard className='inline mr-1 text-green-400'></FaAddressCard>address@gmail.com</h5>
                <h6 className='text-gray-300 pt-3 font-bold'><FaPhoneSquareAlt className='inline mr-1 text-green-400'></FaPhoneSquareAlt>(970) 262-1413</h6>
            </div>
            <div>
                <h3 className='text-gray-300 pt-3 text-xl font-bold'>Quick Links</h3>
                <ul>
                    <li className='text-gray-300 pt-3 font-bold'>Privacy Policy</li>
                    <li className='text-gray-300 pt-3 font-bold'>Discussion</li>
                    <li className='text-gray-300 pt-3 font-bold'>Terms & Conditions</li>
                    <li className='text-gray-300 pt-3 font-bold'>Customer Support</li>
                </ul>
            </div>
            <div>
                <h4 className='text-gray-300 pt-3 text-xl font-bold text-left'>Subscribe</h4>
                <div className="mb-2 block">
                    <Label
                        htmlFor="base"
                        value="Base input"
                    />
                </div>
                <TextInput
                    id="base"
                    type="text"
                    sizing="md"
                    value="enter your email"
                />
                <Button className='mt-4'>
                    Subscribe Now
                </Button>
            </div>
        </div>
    );
};

export default Footer;