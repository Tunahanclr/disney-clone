    import React, { useEffect, useState,useRef } from 'react';
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
        const elementRef = useRef(null);

        const sliderRight = () => {
            elementRef.current.scrollLeft += 1500;
        }
        const sliderLeft = () => {
            elementRef.current.scrollLeft -= 1850;
        }
       
        return (
        <>
        <div className='flex justify-between items-center relative top-60 font-bold cursor-pointer'>
        <HiChevronLeft className='md:block hidden text-white text-[40px] right-24' onClick={sliderLeft}/>
        <HiChevronRight className='md:block hidden text-white text-[40px] left-24'onClick={sliderRight}/>
        </div>
            <div className='text-red-500 flex scrollbar-hide overflow-x-auto px-11 scroll-smooth gap-4 py-2' ref={elementRef}>
                {movieList.map((movie,i)=>(
                            <img key={i} src={IMAGE_BASE_URL+movie.backdrop_path}  className='min-w-full  md:h-[450px] 
                            object-left-top mr-5 rounded-md hover:border-[4px]
                            border-gray-400 transition-all duration-100 ease-in'alt="" />
                ))}
            </div>
        </>
        );
    }
