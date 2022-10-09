import React, { useState } from 'react'

function Details  ({title, image_url, population, region, capital}) {
    const [mode, setMode] = useState (true)
        const [toggleBtn, setToggleBtn] = useState('<i class="far fa-sun"></i> Light Mode')

       const darkModeToggle = () =>{
        if (mode) {
            document.documentElement.classList.add('dark')
             setToggleBtn('<i class="fas fa-moon"></i> Dark Mode')
            setMode(current => current = !current)
        }

        if (!mode) {
            document.documentElement.classList.remove('dark')
              setToggleBtn('<i class="far fa-sun"></i> Light Mode')
            setMode(current => current = !current)
        }
    }

  return (
    
     <div className="container rounded-lg shadow-lg  dark:bg-gray-700 dark:text-white pb-4 hover:bg-gray-200 dark:hover:bg-gray-900">
        
        



            <img src={image_url} className="h-40 object-cover w-full rounded-tl-lg rounded-tr-lg" alt={title} />
            
            <div className="p-4">
                <h3 className="font-bold mb-4">{title}</h3>
                <p className="text-xs">Population: <span className="text-gray-700 dark:text-gray-300">{population}</span></p>
                <p className="text-xs">Region: <span className="text-gray-700 dark:text-gray-300">{region}</span></p>
                <p className="text-xs">Capital: <span className="text-gray-700 dark:text-gray-300">{capital}</span></p>  
            </div>
        </div>
  )
}

export default Details