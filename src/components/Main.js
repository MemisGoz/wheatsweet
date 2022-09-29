import React from 'react'

function Main() {
    return (
        <div className='overlay'>
        <div className='container'> 
            <div className='header-container'>
                <h4>WheatSweet</h4>
                <h4>Made By Mgoz</h4>
            </div>
            <div className='hero-container'>
                <h3>Date 29/09</h3>
                <h1>Copenhagen</h1>
                <h2>7°</h2>
                <input type="search" placeholder='Search City'></input>
            </div>
            <div className='info-container'>
                <div>
                    <h4>Min Temp</h4>
                    <h3>3°</h3>
                </div>
                <div>
                <   h4>Max Temp</h4>
                    <h3>9°</h3>
                </div>
                <div>
                    <h4>What it feels like</h4>
                    <h3>8°</h3>
                </div>
            </div>
        </div>
        </div>
    )
}

export default Main