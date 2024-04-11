import React from 'react'
import { useSelector } from 'react-redux';
import useMovieTrailer from '../hooks/useMovieTrailer';

const VideoBackground = ({movieId}) => {

    const trailerVideo = useSelector(store => store.movies?.trailerVideo);

    useMovieTrailer(movieId);

  return (
    <div className='sm:w-screen'>
        <iframe 
            className='sm:w-screen aspect-video w-[640px]'
            src={"https://www.youtube.com/embed/"+trailerVideo?.key+"?controls=0&autoplay=1&mute=1&loop=&disablekb=1"} 
            title="YouTube video player" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
            allowFullScreen
        ></iframe>
    </div>
  )
}

export default VideoBackground;