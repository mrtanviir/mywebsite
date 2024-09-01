'use client';
import Link from 'next/link'
import { Button } from './ui/button';


import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';

import {Pagination} from 'swiper/modules';

import ProjectCard from "./ProjectCard";

const projectData = [
    {
        image:'/work/1.png',
        category: 'next js',
        name:"Next Websites",
        description: 'Next.js is a React framework that enables server-side rendering. I created a couple of websites using Next.js and React.',
        link: '/',
        github:"/"
    },
    {
        image:'/work/2.png',
        category: 'react js',
        name:"React Websites",
        description: 'Next.js is a React framework that enables server-side rendering. I created a couple of websites using Next.js and React.',
        link: '/',
        github:"/"
    },
    {
        image:'/work/3.png',
        category: 'Full Stack',
        name:"Full Stack Websites",
        description: 'Next.js is a React framework that enables server-side rendering. I created a couple of websites using Next.js and React.',
        link: '/',
        github:"/"
    },
    {
        image:'/work/4.png',
        category: 'Mern',
        name:"Mern Stack Websites",
        description: 'Next.js is a React framework that enables server-side rendering. I created a couple of websites using Next.js and React.',
        link: '/',
        github:"/"
    },
]

const Work = () => {
  return (
    <section className='relative mb-12 xl:mb-48 mt-32'>
        <div className='container mx-auto'>
            <div className=' max-w-[400px] mx-auto xl:mx-0 text-center xl:text-left mb-12 xl:h-[400px] flex flex-col justify-center items- xl:items-start '>
                <h2 className='text-4xl font-bold mb-4'>🎈Latest Project</h2>
                <p className='subtitle mb-8 '>
                    Here is my recent complete project. Just see and enjoy it
               </p>
               <Link href='/projects'>
                <Button>All projects</Button>
               </Link>
            </div>
            {/* slider */}
            <div className='xl:max-w-[1000px] xl:absolute right-0 top-0'>
                <Swiper className='h-[580px] ' slidesPerView={1} breakpoints={{
                    640:{
                        slidesPerView:2,
                    },
                }} spaceBetween={30} modules={[Pagination]} pagination={{clickable:true}}>
                    {
                        projectData.slice(0,4).map((project,index)=>{
                            return (
                                <SwiperSlide key={index}>
                                    <ProjectCard project={project} />
                                </SwiperSlide>
                            )
                        })
                    }
                </Swiper>
            </div>

        </div>
    </section>
  )
}

export default Work
