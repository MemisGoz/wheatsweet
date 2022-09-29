import React from 'react'

function Main() {
    return (
        <div className='container'>
            <img className='img-hero' src="https://res.cloudinary.com/dh4iesekp/image/upload/v1664485870/weather_hal3hg.png"/>
            <div className='header-container'>
                <h1>WheatSweet</h1>
            </div>
            <div className='hero-container'>
                <h3>Date 29/09</h3>
                <h1>Copenhagen</h1>
                <h2>7°</h2>
                <input type="search" placeholder='Search City'></input>
            </div>
        </div>
    )
}

export default Main