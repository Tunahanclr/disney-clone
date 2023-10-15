import { Field, Form, Formik } from 'formik';
import React from 'react';

export default function Signup() {
  return (
    <div className='h-[89vh] p-2 flex flex-col items-center'>
      <div className='mt-9 w-full max-w-md sm:max-w-sm'>
        <Formik
          initialValues={{
            step: 1,
            lastStep: 3,
            name: '',
            email: '',
            password: ''
          }}
          onSubmit={(values, actions) => {
            console.log('values', values);
          }}
        >
          {(formik) => (
            <Form>
              <p className='text-[#cacaca] text-xs sm:text-[11px] text-left'>STEP {formik.values.step} OF 5</p>
              {formik.values.step === 1 && (
                <>
                  <h3 className='text-lg mt-2 sm:text-xl md:text-2xl leading-tight text-[#f9f9f9] mb-4 font-bold'>
                    Enter your email address
                  </h3>
                  <p className='text-[#f9f9f9] mt-2 text-xs sm:text-sm md:text-sm leading-6 '>
                    You will use this email and password to log into your Disney+ account to watch your favourite shows and movies.
                  </p>
                  <Field className='bg-[#31343e] mt-6 focus:border-gray-500 text-[12px] sm:text-[15px] text-white border border-transparent transition-all h-[40px] sm:h-[48px] outline-none rounded w-full py-1 sm:py-2 px-2 sm:px-3' placeholder='Email address ' type='email' name='email'/>
                  <div className='flex justify-start gap-1 mt-7'>
                    <Field name='checkbox' type='checkbox' className='w-[18px] sm:w-[20px] cursor-pointer h-[18px] sm:h-[20px] rounded-[3px]' />
                    <p className='text-[#cacaca] text-xs sm:text-[12px]'>
                    Yes! I would like to receive special offers and updates about Disney+ and other products and services from <span className='text-blue-500 border-b border-blue-800'>The Walt Disney Family of compaines</span> by email.
                    </p>
                    <div>
                    </div>
                  </div>
                </>
              )}
              <button className=' font-bold bg-[#0072d2] m-w-[141px] text-[#f9f9f9] px-6 w-full rounded mt-8 active:bg-blue-800 transition-allall cursor-pointer h-[48px]'>CANTINUE</button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
}
