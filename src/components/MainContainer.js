import React from 'react'
import { useSelector } from "react-redux";
import VideoTitle from "./VideoTitle";
import VideoBackground from "./VideoBackground";

const MainContainer = () => {

    const movies = useSelector(store => store.movies?.nowPlayingMovies)

    // "early return" used to avoid error when trying to access movies[0] which is not defined yet
    if (!movies) return;

    // let len = Object.keys(movies).length;
    // let rand = Math.floor(Math.random() * (len - 2));
    // console.log("rand", rand);
    // const mainMovie = movies[rand];

    const mainMovie = movies[1];
    console.log("mainMovie",mainMovie);

    const {original_title, overview, id} = mainMovie;

    return (
        <div className='pt-[30%] bg-black md:pt-0 w-[640px] sm:w-screen'>
            <VideoTitle title={original_title} overview={overview} />
            <VideoBackground movieId={id} />
        </div>
    )
}

export default MainContainer;