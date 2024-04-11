import React, { useRef } from 'react'
import MovieCard from './MovieCard'

const MovieList = ({title, movies}) => {
  console.log(movies);

  const scrollableDivRef = useRef(null);

  const scrollRight = () => {
    if(scrollableDivRef.current) {
      scrollableDivRef.current.scrollLeft += 100;
      // console.log(scrollableDivRef);
    }
  };

  return (
    <div className='px-6'>
      <h1 className='text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl py-4 text-white'>{title}</h1>
      <div className='flex overflow-x-scroll no-scrollbar' ref={scrollableDivRef}>
          <div className='flex'>
              {movies?.map(movie => (
                  <MovieCard key={movie.id} posterPath={movie.poster_path} />
              ))}
          </div>
          <div className='flex z-10'>
            <button className='absolute right-6 w-16 h-[192px] lg:h-[240px] xl:h-[264px] bg-black opacity-35' onClick={scrollRight}><span className='hover:font-bold text-white text-[3rem] hover:text-[5rem]'>&#8250;</span></button>
          </div>
      </div>
    </div>
  )
}

export default MovieList