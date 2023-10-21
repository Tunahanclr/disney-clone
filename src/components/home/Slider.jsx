import React, { useEffect, useState } from 'react';
import GlobalApi from '../../services/GlobalApi';
import {HiChevronLeft,HiChevronRight} from "react-icons/hi"

export default function Slider() {
    const [movieList,setMovieList]=useState([])
    const IMAGE_BASE_URL="https://image.tmdb.org/t/p/original";
    useEffect(() => {
        getTrendingVideos();
    }, []);

    const getTrendingVideos = () => {
        GlobalApi.getTrendingVideos().then(resp => {
            console.log(resp.data.results)
                setMovieList(resp.data.results)  
        }).catch(error => {
            console.error("API hatası:", error);
        });
    };

    return (
       <>
      <div className='flex justify-between items-center relative top-60 font-bold cursor-pointer '>
      <HiChevronLeft className='text-white text-[40px] right-24'/>
       <HiChevronRight className='text-white text-[40px] left-24'/>
      </div>
        <div className='text-red-500 flex scrollbar-hide overflow-x-auto px-11 py-2'>
            {movieList.map((movie)=>(
                        <img src={IMAGE_BASE_URL+movie.backdrop_path} className='min-w-full rounded-md h-[400px] object-left-top mr-4' alt="" />
            ))}
        </div>
       </>
    );
}
