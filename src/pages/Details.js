import React, { useState } from 'react'

function Details({ title, image_url, population, region, capital }) {
    const [mode, setMode] = useState(true)
    const [toggleBtn, setToggleBtn] = useState('<i class="far fa-sun"></i> Light Mode')

    const darkModeToggle = () => {
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


    const titleStyle = {
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        whiteSpace: 'nowrap',
        maxWidth: '100%',
    };

    const fixNum = (x) => {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    };

    return (

        <div className="container rounded-lg shadow-lg  dark:bg-gray-700 dark:text-white pb-1 hover:bg-gray-200 dark:hover:bg-gray-900">
            <img src={image_url} className="h-[8rem] md:h-[9rem] object-cover w-full rounded-t-lg" alt={title} />

            <div className="p-2">
                <h3 style={titleStyle} className="font-bold ">{title}</h3>
                <p className="text-xs">
                    Population:{" "}
                    <span className="text-gray-700 dark:text-gray-300">
                        {fixNum(population)}
                    </span>
                </p>
                <p className="text-xs">Region: <span className="text-gray-700 dark:text-gray-300">{region}</span></p>
                <p className="text-xs">Capital: <span className="text-gray-700 dark:text-gray-300">{capital}</span></p>
            </div>
        </div>
    )
}

export default Details