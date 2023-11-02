import React, { useState } from 'react'
import { useNavigate, useLocation } from 'react-router';
import Footer from "./Footer"



function Countrydetails() {
  const [mode, setMode] = useState(true)
  let { state } = useLocation()
  const navigate = useNavigate();
  const fixNum = (x) => {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

  return (
    <div>
      <div className='bg-gray-100 dark:bg-gray-800 dark:text-white overflow-hidden rounded-md border-2 border-gray-300 dark:border-gray-700 mx-4 shadow-md lg:max-w-[1000px]  md:max-w-[800px] md:mx-auto mt-14'>
      <div className=" ml-8 mx-auto mb-8 mt-4">
        <button className="px-8 py-2 bg-white text-gray-600 shadow-md dark:bg-gray-700 dark:text-white rounded-lg" onClick={() => navigate(-1)}>
          <i className="fa fa-arrow-left" />  Back </button>

      </div>


      <div className="container  flex flex-col md:flex-row mx-auto   pl-0 pr-0">
        <img src={state.flag} className="md:w-1/2 w-full rounded-md mx-auto mb-4 px-8 lg:min-h-[300px] " alt={state.name} />
        <div className="p-8 pl-8">
          <h2 className="font-bold text-2xl mb-8">{state.name}</h2>
          <div className="flex flex-col  lg:grid grid-cols-2 gap-x-20 gap-y-4  text-base lg:text-[16px]">
            <p className='font-semibold '>Native Name: <span className="dark:text-gray-400 font-normal  text-gray-700 ">{state.nativeName}</span></p>
            <p className='font-semibold '>Population: <span className="dark:text-gray-400 font-normal  text-gray-700 "> {fixNum(state.population)}</span></p>
            <p className='font-semibold'>Region: <span className="dark:text-gray-400 font-normal  text-gray-700 ">{state.region}</span></p>

            <p className='font-semibold '>Capital: <span className="dark:text-gray-400 font-normal  text-gray-700 ">{state.capital}</span></p>

            <p className='font-semibold '>Sub Region: <span className="dark:text-gray-400  font-normal text-gray-700 ">{state.subregion}</span></p>
            <p className='font-semibold '>calling Code: <span className="dark:text-gray-400 font-normal  text-gray-700 ">+{state.callingCodes}</span></p>
            <p className='font-semibold '>Currencies: <span className="dark:text-gray-400 font-normal  text-gray-700 ">{state.currencies.map(cur => cur.name)}</span></p>
            <p className='font-semibold'>Languages: <span className="dark:text-gray-400 font-normal  text-gray-700 ">{state.languages.map(lang => lang.name + ', ')}</span></p>
          </div>

        </div>
      </div>


      
    </div>

<div className='mt-10'>
<Footer/>
</div>
    </div>
  )
}

export default Countrydetails