import React from 'react'

import book from '@/assets/book.png'
import pc from '@/assets/pc.png'
import card from '@/assets/card.png'
import finance from '@/assets/finance.png'
import InfoCard from './InfoCard'

const data = [
    {
        imageSrc: book,
        title: 'Education',
        description: 'I hold a degree in Computer Science and I am focusing on web development technologies like React, Next.JS, Javascript, Typescript, Laravel, TailwindCSS, etc.',
        colSpan: 'col-span-5'
    },
    {
        imageSrc: finance,
        title: 'Problem-Solving',
        description: 'I approach challenges with a logical and systematic mindset',
        colSpan: 'col-span-3'
    },
    {
        imageSrc: card,
        title: 'Experiences',
        description: 'I have a diverse portfolio of projects.',
        colSpan: 'col-span-3'
    },
    {
        imageSrc: pc,
        title: 'Technical Skills',
        description: 'As a Fullstack Web Developer, I specialize in React JS, Next.js, Tailwind CSS and Laravel. My expertise extends to creating responsive, user-friendly interfaces and efficient backend solutions.',
        colSpan: 'col-span-5'
    }
];

const About = () => {
    return (
        <div className='max-w-[1200px] mx-auto' id='about'>

            <h1 className='text-white text-6xl max-w-[320px] mx-auto font-semibold p-4 mb-4'>
                About <span className='text-orange-400'>Me</span>
            </h1>

            <div className="grid grid-cols-8 gap-6 place-items-center">
                {data.map((item, index) => (
                    <InfoCard
                        key={index}
                        imageSrc={item.imageSrc}
                        title={item.title}
                        description={item.description}
                        colSpan={item.colSpan}
                    />
                ))}
            </div>
        </div>
    )
}

export default About