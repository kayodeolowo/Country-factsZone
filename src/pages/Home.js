import React from 'react'
import { useNavigate } from 'react-router-dom'
import Toggle from './Toggle';

const Home = () => {
  
   const navigate = useNavigate();
    function handleClick(){
        navigate("/Allcountries")
    }

  return (
    <div className=" bg-[url('./img/back-imagee.jpeg')] bg-cover sm:h-screen lg:h-screen w-full md:flex"> 
    
      <div className="pt-20 px-4 brightness-100 blur-none backdrop-blur-sm text-white   md:w-3/4"> 
         <h1 className='text-white text-center   text-[30px] font-bold  font-indie md:text-[40px]'> Countries and Continents Facts Zone   </h1> 


          <h1 className=' mt-20 px-4 font-extrabold text-3xl text-left font-indie sm:text-[40px] md:text-[25px] md:text-left sm:text-center '> How much of these countries and continents do you No? </h1>

         <p className='text-white text-center mt-12 md:mt-2  px-4 text-lg font-bold font-libre leading-8 sm:text-[30px]  md:text-[30px] md:leading-10 sm:text-center sm:font-normal sm:mt-24 md:text-left  '>As of 2017, the global population has reached more than 7.5 billion people, spanning the inhabited continents of Africa, North and South America, Asia, Europe and Australia/Oceania. Encompassing the two most highly populated countries in the world – China and India – Asia is by far the largest of the continents, with a total population of over 4.5 billion people. </p>


              

        
      </div>

       <div className='flex justify-center md:justify-end  mt-20 md:mt-40   backdrop-blur-sm  '>
                    
         <button className='p-6 md:p-3 sm:px-10 rounded-full bg-[#57c541] hover:bg-[#174e0c] hover:text-white font-libre md:h-32 md:mt-40  text-[25px] sm:text-[35px] md:text-[30px] '  onClick={handleClick} > Explore the world </button>

               </div>


       
        <footer className='flex  items-end   justify-center min-h-[300px]   sm:min-h-[0px] mt-[20px] md:hidden '>
        <h1 className='text-white mb-[50px] mt-20 sm:mt-36 text-lg sm:text-[25px] sm:font-semibold md:mt-[170px] '> Built by Kayode Olowo </h1>
    </footer>
    </div>

    
  )
}

export default Home