import React from 'react'


function Home() {
  
  return (
    
    <div>
        <h1 className='text-center'>BookSpace</h1>
        <img src={'/images/logo.png'} alt="Logo" />
       <h2>Sign In</h2>   
    <form>
<label htmlFor="username">Username:</label>
<input type="text" name="username" id="username" placeholder="username" />
<label htmlFor="password">Password:</label>
<input type="password" name="password" id="password" placeholder="password" />
<label htmlFor="confirm password">Password:</label>
<input type="password" name=" confirm password" id=" confirm password" placeholder=" confirm password" />
<label htmlFor="email">Email:</label>
<input type="email" name="email" id="email" placeholder="email" />
<button>Submit</button>
  </form>
  </div>
  )
}

export default Home;