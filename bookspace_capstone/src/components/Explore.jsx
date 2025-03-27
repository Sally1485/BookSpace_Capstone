import React from 'react'
import { useEffect } from 'react'

function Explore() {
  return (
    <div>
     <img src={'/images/logo.png'} alt="Logo" className='h-8 w-8' />
     <h1>Explore</h1>
     const SearchBar = useEffect
     <input type="text" id='search' name='search' placeholder='search'/>
     <input type="button" value="Search" />
        <div>
        <img src={'/images/Fiction.png'} alt="fiction image" className='h-8 w-8' />
        <img src={'/images/Non-fiction.png'} alt="non-fiction image" className='h-8 w-8' />
        <img src={'/images/poetry.png'} alt="poetry image" className='h-8 w-8' />
       <img src={'/images/comics.png'} alt="comics image" className='h-8 w-8' />

            </div> 
    </div>
  )
}

export default Explore