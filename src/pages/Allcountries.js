import React, { useEffect, useState } from 'react'
  import { Link } from 'react-router-dom'
import Details from './Details'
import Aos from 'aos';
import 'aos/dist/aos.css';






const Allcountries = () => {
    const [countries, setCountries] = useState ([])
     const [mode, setMode] = useState(true)
    const [toggleBtn, setToggleBtn] = useState('<i class="far fa-sun"></i> Light Mode')
    const [loading, setLoading] = useState (false)

     useEffect (()=> {
        getCountries()
         Aos.init({ duration: 2000});
    },[])   

   

     

    const getCountries = async() =>{
        const res = await fetch ('https://restcountries.com/v2/all')
        const data = await res.json()
        await setCountries(data)
        setLoading(true)
    }
//fetch all countries

     const searchCountries = async term => {
        
        
        if(term.length < 0 || term === ''   ) 
         return 
        const res = await fetch(`https://restcountries.com/v2/name/${term}`) 
        const data = await res.json()
        await console.log(data)
        await setCountries(data)
         
    }
    //search countries
    

      const toggleDarkMode = () => {
        if(mode){
            document.documentElement.classList.add('dark')
            setToggleBtn('<i class="fas fa-moon"></i> Dark Mode')
            setMode(current => current = !current)
        }
        if(!mode) {
            document.documentElement.classList.remove('dark')
            setToggleBtn('<i class="far fa-sun"></i> Light Mode')
            setMode(current => current = !current)
        }
    }



    const filterRegion = async region => {
        if(region === '')
         return
        const res = await fetch(`https://restcountries.com/v2/region/${region}`) 
        const data = await res.json()
        await setCountries(data)
    }

    
  
    

  return (

<section className='bg-gray-100 dark:bg-gray-800 dark:text-white w-full wrap overflow-hidden overflow-x-hidden'> 
    <div className="w-screen shadow-md py-6 px-3 bg-white dark:bg-gray-700 dark:text-white mb-16">
                <div className="flex container mx-auto">
                    <h1 className="font-bold text-xl">Where in the world?</h1>
                    <div className="ml-auto font-medium">
                        <button onClick={() => toggleDarkMode()} dangerouslySetInnerHTML={{__html: toggleBtn}}>
                        </button>
                    </div>
                </div>
            </div>
   
    <div className='w-11/12 mx-auto '>
        
       
        <div className='flex container mx-auto mb-16'>
            
            <i class="fa fa-search my-auto -mr-9 z-10 pr-2 pl-3 py-5 rounded-md text-gray-400"> </i>
                <input type="text" placeholder="search countries" className="pl-10 p-2 shadow-md rounded-md w-1/2 lg:w-1/3 min-w-[150px] h-[40px] mt-2 dark:bg-gray-700"onChange={ term => searchCountries(term.target.value) } > 
                
                </input> 

               

               
                 <select className="ml-auto my-2 p-2 shadow-md rounded-md  w-1/3 font-medium dark:bg-gray-700" onChange={ val => filterRegion(val.target.value)}>
                    <option value="">Filter by Region</option>
                    <option value="africa">Africa</option>
                    <option value="americas">America</option>
                    <option value="asia">Asia</option>
                    <option value="europe">Europe</option>
                    <option value="oceania">Oceania</option>
                </select>
        </div>


             <div className='flex justify-center '> 
                     {loading? getCountries : <div className='flex flex-col justify-center items-center'>
                         <img className='h-10 w-10 animate-spin' src="./image/earth.png"/>
                         <h1 className=' mt-2'>Loading</h1>
                          </div> }

                </div>


        <div  data-aos="fade-left"  className="container w-full items-center wrap grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 font-bold gap-10 lg:gap-16 md:gap-8 mx-auto  ">
                {countries.map( (country, index ) => <Link to= "/countrydetails" 
                 state={country}  
                  key={index}><Details 
                                                title={country.name} 
                                                image_url={country.flag} 
                                                population={country.population}
                                                region={country.region}
                                                capital={country.capital}
                                            /></Link> )}
            </div>


         
       

    </div> 

    
    

</section>
    
  )
}

export default Allcountries