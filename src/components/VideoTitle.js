import React from 'react'

const VideoTitle = ({title, overview}) => {
  return (
    <div className='w-screen aspect-video pt-[20%] px-6 md:px-24 absolute text-white bg-gradient-to-r from-black'>
        <h1 className='text-2xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-bold'>{title}</h1>
        <p className='hidden xl:inline-block pt-6 lg:text-sm xl:text-base 2xl:text-lg w-1/4'>{overview.length > 100 ? overview.slice(0, 100) + "..." : overview}</p>
        <div className='my-2 md:m-0 pt-6'>
            <button className='bg-white text-black md:py-4 px-3 md:px-16 text-lg rounded-lg hover:bg-opacity-80'>&#9658; Play</button>
            <button className='hidden md:inline-block mx-2 bg-gray-500 text-white p-4 px-16 text-lg bg-opacity-50 rounded-lg hover:bg-opacity-20'>More Info</button>
        </div>
    </div>
  )
}

export default VideoTitle;