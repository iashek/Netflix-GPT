import React from 'react'
import GptSearchBar from './GptSearchBar'
import GptMovieSuggestion from './GptMovieSuggestion'
import { BG_URL } from '../utils/constants'

const GptSearch = () => {
  return (
    <>
      <div className="fixed -z-10 opacity-90">
        <img className="h-screen object-cover" src={BG_URL} alt="background_image" />
      </div>
      <div className=''>
        <GptSearchBar />
        <GptMovieSuggestion />
      </div>
    </>
  )
}

export default GptSearch