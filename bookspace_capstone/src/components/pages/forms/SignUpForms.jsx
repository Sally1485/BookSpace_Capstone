import React from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { signUpUserWithEmailAndPassword } from '../../../../services/SignUp.service';
const validationSchema = Yup.object({
    email: Yup.string().email('invalid email').required('email is required'),
 password: Yup.string().required('password is required'),

 });

function SignUpForms() {
    
  return (
    <div >
         <Formik 
          initialValues={{ email: "", password: ""}}
          validationSchema={validationSchema}
          onSubmit={ async (values) =>{
            try{ 
                await signUpUserWithEmailAndPassword(values.email, values.password);
                console.log("Successfully signed up!", values);
              } catch (error) {
                console.error("Sign up failed:", error.message);
            }
        
          }}
          >
          {({handleSubmit}) => (
            <div class =" m-auto w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow-sm sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700"> 
                <div className='flex justify-center mt-10 text-lg sm:text-xl md:text-2xl font-bold'>
               <h2>Sign Up</h2> 
               </div>
               <div className='flex justify-center rounded-lg shadow-md mt-10  p-5' >
            <Form onSubmit={handleSubmit}  >
            <div className='mb-4'>
        <label htmlFor="email">Email:</label>
        <Field type="email" name="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" />
        <ErrorMessage name = 'email' component = 'p' />
        </div>
        <div className='mb-4'>
        <label htmlFor="password">Password:</label>
        <Field type="password" name="password" id="password" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" />
        <ErrorMessage name = 'password' component = 'p' />
        </div>
        <div className='flex mt-3 justify-center bg-red-700 hover:bg-red-500 rounded-2xl sm:rounded-lg md:rounded-xl'>
        <button type='submit'>Submit</button>
        </div>
          </Form>
          </div>
          </div>
          )}
          </Formik>
        
        
    </div>
  )
}

export default SignUpForms