import React from 'react'
import { FaCss3Alt, FaHtml5, FaJsSquare, FaLaravel, FaPhp, FaReact } from 'react-icons/fa'

const skillIcons = [
    { icon: <FaHtml5 size={140} />, label: 'HTML' },
    { icon: <FaCss3Alt size={140} />, label: 'CSS' },
    { icon: <FaReact size={140} />, label: 'React' },
    { icon: <FaLaravel size={140} />, label: 'Laravel' },
    { icon: <FaJsSquare size={140} />, label: 'Javascript' },
    { icon: <FaPhp size={140} />, label: 'PHP' },
]

const Skills = () => {
    return (
        <div className='bg-[linear-gradient(to_top,#000,#381a5f_80%)] py-32'>
            <div className='text-white w-[400px] md:min-w-[950px] mx-auto p-8 text-center'>
                <h2 className='text-6xl font-bold mb-4'>What I Do</h2>
                <div className='grid grid-cols-2 md:grid-cols-4 gap-6'>
                    {
                        skillIcons.map((skill, index) => (
                            <div key={index} className='h-[160px] w-[160px] md:h-[220px] md:w-[220px] flex flex-col justify-between items-center bg-white/10 p-4 rounded-xl'>
                                {skill.icon}
                                <p className='text-xl font-bold mt-2'>{skill.label}</p>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default Skills