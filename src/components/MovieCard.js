import React from 'react'
import { IMG_CDN_URL } from '../utils/constants'

const MovieCard = ({posterPath}) => {
  if(!posterPath) return null;

  console.log(IMG_CDN_URL+ posterPath);
  return (
    <div className='w-36 md:w-36 lg:w-44 xl:w-48 pr-4'>
        <img alt="Movie Card" src={IMG_CDN_URL+ posterPath} />
    </div>
  )
}

export default MovieCard