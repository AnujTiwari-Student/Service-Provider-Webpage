"use client";

import React, { useState } from 'react'
import { Input } from './ui/input'
import { Button } from './ui/button'

interface FormValues {
  fullName: string;
  phoneNumber: string;
  businessName: string;
  businessMail: string;
}

interface Errors {
  fullName?: string;
  phoneNumber?: string;
  businessName?: string;
  businessMail?: string;
}

function Consultant() {
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
    <div className='bg-white shadow-lg rounded-xl p-6 mx-6 md:mx-28 xl:mx-0 xl:w-2/5 xl:ml-28'>
      <div>
        <h1 className='text-lg md:text-2xl font-bold'>
          Leave your contacts and we will call you back within 30 minutes
        </h1>
      </div>
      <div>
        <form className='flex flex-col my-4 md:space-y-6' onSubmit={handleSubmit}>
          <div className='flex flex-col md:flex-row md:space-x-10'>
            <div className='flex-col mb-4 md:mb-0'>
              <p>Full Name</p>
              <Input
                name='fullName'
                placeholder='My Name'
                value={formValues.fullName}
                onChange={handleChange}
              />
              {errors.fullName && <p className='text-red-500'>{errors.fullName}</p>}
            </div>
            <div className='flex-col mb-4 md:mb-0'>
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
            <div className='flex-col mb-4 md:mb-0'>
              <p>Business Name</p>
              <Input
                name='businessName'
                placeholder='ABC Technologies PVT LTD'
                value={formValues.businessName}
                onChange={handleChange}
              />
              {errors.businessName && <p className='text-red-500'>{errors.businessName}</p>}
            </div>
            <div className='flex flex-col md:flex-row md:space-x-4'>
              <div className='flex-col mb-4 md:mb-0'>
                <p>Business Mail</p>
                <Input
                  name='businessMail'
                  placeholder='demo@gmail.com'
                  value={formValues.businessMail}
                  onChange={handleChange}
                />
                {errors.businessMail && <p className='text-red-500'>{errors.businessMail}</p>}
              </div>
              <div className='bg-green-600 text-white hover:text-black rounded-lg'>
                <Button variant='ghost' className='md:h-full md:w-auto w-full' type='submit'>
                  Get consultation
                </Button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Consultant;
