'use client'

import React from 'react'
import { motion } from 'framer-motion'

import project from '@/assets/project.jpg'
import Image from 'next/image'

const projects = [
    {
        title: 'Portfolio Website',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        devStack: 'React, Tailwind',
        link: '#',
        git: '#',
        src: project,
    },
    {
        title: 'Portfolio Website2',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        devStack: 'React, Tailwind',
        link: '#',
        git: '#',
        src: project,
    },
]

const Portfolio = () => {
    return (
        <div className='text-white bg-gradient-to-b from-black to-[#381A5F] py-16 mt-52' id='portfolio'>
            <h1 className='text-6xl max-w-[320px] mx-auto font-semibold my-12 text-orange-400'>
                Projects
            </h1>

            <div className='max-w-[1000px] mx-auto space-y-24 mt-40'>
                {
                    projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 75 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.25 }}
                            className={`mt-12 flex ${index % 2 === 1 ? "flex-col-reverse md:flex-row-reverse gap-12" : "flex-col md:flex-row"}`}
                        >
                            <div className='space-y-2 max-w-[550px]'>
                                <h2 className='text-7xl my-4 text-white/70'>{`0${index + 1}`}</h2>
                                <h2 className='text-4xl'>{project.title}</h2>
                                <p className='text-lg text-white/70 break-words p-4'>{project.desc}</p>
                                <p className='text-xl text-orange-400 font-semibold'>{project.devStack}</p>
                                <div className='w-64 h-[1px] bg-gray-400 my-4'>
                                    <a href={project.link} className='mr-6'>Link</a>
                                    <a href={project.git} className='mr-6'>Git</a>
                                </div>
                            </div>
                            <div className='flex justify-center items-center'>
                                <Image src={project.src} alt={project.title} className='h-[350px] w-[500px] object-cover border rounded border-gray-700' />
                            </div>
                        </motion.div>
                    ))
                }
            </div>
        </div>
    )
}

export default Portfolio