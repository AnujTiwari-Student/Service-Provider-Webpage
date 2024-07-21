"use client";

import React, { useState } from 'react'
import { Input } from './ui/input';
import { Button } from './ui/button';
import { Smartphone, Code, Book, Utensils, Headphones, Brain, Award } from 'lucide-react';

interface Errors {
    fullName?: string;
    phoneNumber?: string;
    businessName?: string;
    businessMail?: string;
}

interface FormValues {
    fullName: string;
    phoneNumber: string;
    businessName: string;
    businessMail: string;
}

function MediaComponent() {
    const [formValues, setFormValues] = useState<FormValues>({
        fullName: '',
        phoneNumber: '',
        businessName: '',
        businessMail: ''
    });

    const [errors, setErrors] = useState<Errors>({});

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormValues({
            ...formValues,
            [name]: value
        });
    };

    const validateForm = (): Errors => {
        const newErrors: Errors = {};

        if (!formValues.fullName) {
            newErrors.fullName = 'Full Name is required';
        }
        if (!formValues.phoneNumber) {
            newErrors.phoneNumber = 'Phone Number is required';
        } else if (!/^\+91\d{10}$/.test(formValues.phoneNumber)) {
            newErrors.phoneNumber = 'Phone Number is invalid';
        }
        if (!formValues.businessName) {
            newErrors.businessName = 'Business Name is required';
        }
        if (!formValues.businessMail) {
            newErrors.businessMail = 'Business Mail is required';
        } else if (!/\S+@\S+\.\S+/.test(formValues.businessMail)) {
            newErrors.businessMail = 'Business Mail is invalid';
        }

        return newErrors;
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const validationErrors = validateForm();
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
        } else {
            setErrors({});
            // Submit form
            console.log('Form submitted successfully', formValues);
        }
    };

    return (
        <div>
            <div className='p-6 md:py-12 w-full md:px-28 flex flex-col xl:flex-row justify-between' style={{ background: 'linear-gradient(90deg, #FABC1F 0%, #7CA546 100%)' }}>
                <div>
                    <h1 className='text-2xl md:text-3xl font-bold text-white'>Lets discuss</h1>
                    <h1 className='text-2xl md:text-3xl font-bold text-white'>Your project</h1>
                    <p className='text-lg font-semibold text-white my-8 xl:w-2/3'>
                        Lets figure out how to create an effective application,
                        its cost and terms of its development
                    </p>
                </div>
                <div className='bg-white rounded-xl p-6'>
                    <form className='flex flex-col md:space-y-6' onSubmit={handleSubmit}>
                        <div className='flex flex-col md:flex-row md:space-x-10'>
                            <div className='flex flex-col mb-4 md:mb-0'>
                                <p>Full Name</p>
                                <Input
                                    name='fullName'
                                    placeholder='My Name'
                                    value={formValues.fullName}
                                    onChange={handleChange}
                                />
                                {errors.fullName && <p className='text-red-500'>{errors.fullName}</p>}
                            </div>
                            <div className='flex flex-col mb-4 md:mb-0'>
                                <p>Phone Number</p>
                                <Input
                                    name='phoneNumber'
                                    placeholder='+91 0000000000'
                                    value={formValues.phoneNumber}
                                    onChange={handleChange}
                                />
                                {errors.phoneNumber && <p className='text-red-500'>{errors.phoneNumber}</p>}
                            </div>
                        </div>
                        <div className='flex flex-col md:flex-row md:space-x-10'>
                            <div className='flex flex-col mb-4 md:mb-0'>
                                <p>Business Name</p>
                                <Input
                                    name='businessName'
                                    placeholder='ABC Technologies PVT LTD'
                                    value={formValues.businessName}
                                    onChange={handleChange}
                                />
                                {errors.businessName && <p className='text-red-500'>{errors.businessName}</p>}
                            </div>
                            <div className='flex flex-col mb-4 md:mb-0'>
                                <p>Business Mail</p>
                                <Input
                                    name='businessMail'
                                    placeholder='demo@gmail.com'
                                    value={formValues.businessMail}
                                    onChange={handleChange}
                                />
                                {errors.businessMail && <p className='text-red-500'>{errors.businessMail}</p>}
                            </div>
                        </div>
                        <div className='text-white hover:text-black rounded-lg flex xl:justify-end'>
                            <Button variant='ghost' className='md:h-full md:w-max w-full bg-yellow-400' type='submit'>
                                Discuss the project
                            </Button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default MediaComponent;
