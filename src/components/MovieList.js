import React, { useRef } from 'react'
import MovieCard from './MovieCard'

const MovieList = ({title, movies}) => {
  console.log(movies);

  const scrollableDivRef = useRef(null);

  const scrollRight = () => {
    if(scrollableDivRef.current) {
      scrollableDivRef.current.scrollLeft += 100;
    }
  };

  return (
    <div className='px-6 '>
      <h1 className='text-lg md:text-3xl py-4 text-white'>{title}</h1>
      <div className='flex overflow-x-scroll no-scrollbar'>
          <div className='flex' ref={scrollableDivRef}>
              {movies?.map(movie => (
                  <MovieCard key={movie.id} posterPath={movie.poster_path} />
              ))}
          </div>
      </div>
      <div className='flex z-10'>
        <button className='absolute right-6 w-16 h-64 bg-white' onClick={scrollRight}><span className='font-bold'>&#8250;</span></button>
      </div>
    </div>
  )
}

export default MovieList