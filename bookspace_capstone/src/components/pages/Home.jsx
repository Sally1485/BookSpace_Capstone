import React from 'react'
import SignInPage from './SignInPage'
import SignUpPage from './SignUpPage'

function Home() {
  return (
    <div className='p-8 sm:p-4 md:p-6 bg-amber-400'>
    <h1 className='mt-6   text-center ml-3  text-6xl sm:text-2xl md:text-4xl font-semibold'>BookSpace</h1>
    <div className='flex justify-center mt-20 mb-20'>
    <img src={'/images/logo.png'}  alt="Logo" />
    </div>
  <SignUpPage />
  <div className='mt-6 text-center ml-3  text-4xl sm:text-xl md:text-2xl font-semibold'>
    <h2>OR</h2>
  </div>
    <SignInPage />
    </div>
    
  )
}

export default Home