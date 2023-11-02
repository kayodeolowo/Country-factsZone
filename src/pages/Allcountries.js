import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Details from './Details'
import Aos from 'aos';
import 'aos/dist/aos.css';
import Toggle from './Toggle';
import Footer from './Footer'


const Allcountries = () => {
    const [countries, setCountries] = useState([])
    const [mode, setMode] = useState(true)
    const [toggleBtn, setToggleBtn] = useState('<i class="far fa-sun"></i> Light Mode')
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        getCountries()
        Aos.init({ duration: 2000 });
    }, [])

    const getCountries = async () => {
        try {
            const res = await fetch('https://restcountries.com/v2/all')
            const data = await res.json()
            setCountries(data)
        } catch (error) {
            console.error('Error fetching countries:', error)
        } finally {
            setLoading(false) // Set loading to false once data is fetched
        }
    }
    //fetch all countries

    const searchCountries = async term => {
        if (term.length < 0 || term === '')
            return
        const res = await fetch(`https://restcountries.com/v2/name/${term}`)
        const data = await res.json()
        await console.log(data)
        await setCountries(data)

    }
    //search countries


    const filterRegion = async region => {
        if (region === '')
            return
        const res = await fetch(`https://restcountries.com/v2/region/${region}`)
        const data = await res.json()
        await setCountries(data)
    }

    return (

        <section className='bg-gray-100 dark:bg-gray-800 dark:text-white container mt-4  mx-auto  w-[95%] lg:w-[90%] '>

            <div className="rounded-md shadow-md py-4 px-3 bg-white dark:bg-gray-700 dark:text-white mb-8">
                <div className="flex container mx-auto">
                    <h1 className="font-bold text-xl">Where in the world?</h1>
                    <div className="ml-auto font-medium">
                        <Toggle />
                    </div>
                </div>
            </div>

            <div className=' '>
                <div className='flex container mx-auto mb-10'>
                    <i className="fa fa-search my-auto -mr-9 z-10 pr-2 pl-3 py-5 rounded-md text-gray-400"> </i>
                    <input type="text" placeholder="search countries" className="pl-10 p-2 shadow-md rounded-md w-1/2 lg:w-1/3 min-w-[150px] h-[40px] mt-2 dark:bg-gray-700" onChange={term => searchCountries(term.target.value)} >
                    </input>
                    <select className="ml-auto my-2 p-2 shadow-md rounded-md  w-1/3 font-medium dark:bg-gray-700" onChange={val => filterRegion(val.target.value)}>
                        <option value="">Filter by Region</option>
                        <option value="africa">Africa</option>
                        <option value="americas">America</option>
                        <option value="asia">Asia</option>
                        <option value="europe">Europe</option>
                        <option value="oceania">Oceania</option>
                    </select>
                </div>


                
                {loading && <div className="text-center text-sm md:mt-[10%] mt-[40%]" >Loading, Please wait...</div>}

{!loading && (
    <div  className="container w-[100%] mb-4 items-center wrap grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 font-bold gap-4 lg:gap-8 md:gap-8 mx-auto ">
        {countries.map((country, index) => (
            <Link to="/countrydetails"
                state={country}
                key={index}>
                <Details
                    title={country.name}
                    image_url={country.flag}
                    population={country.population}
                    region={country.region}
                    capital={country.capital}
                />
            </Link>
        ))}
    </div>
)}
</div>

{!loading && <Footer />}
</section>
)
}

export default Allcountries
