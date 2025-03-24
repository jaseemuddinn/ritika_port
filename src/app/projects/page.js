'use client'
import Link from 'next/link'
import { useState } from 'react'

const projects = [
    {
        id: 1,
        title: 'Urban Landscapes',
        image: 'https://picsum.photos/600/400?1',
        description: "A collection of cityscape photography",
        category: 'City',
    },
    {
        id: 2,
        title: 'Mountain Adventures',
        image: 'https://picsum.photos/600/400?2',
        description: "A collection of mountain photography",
        category: 'Nature',
    },
    {
        id: 3,
        title: 'Portrait Series',
        image: 'https://picsum.photos/600/400?3',
        description: "A collection of portrait photography",
        category: 'People',
    },
    {
        id: 4,
        title: 'Street Photography',
        image: 'https://picsum.photos/600/400?4',
        description: "A collection of street photography",
        category: 'City',
    },
    {
        id: 5,
        title: 'Wildlife Moments',
        image: 'https://picsum.photos/600/400?5',
        description: "A collection of wildlife photography",
        category: 'Nature',
    },
    {
        id: 6,
        title: 'Studio Shots',
        image: 'https://picsum.photos/600/400?6',
        description: "A collection of studio photography",
        category: 'People',
    },
]

export default function DynamicGridShowcase() {
    const [activeCategory, setActiveCategory] = useState('All')

    const filteredProjects =
        activeCategory === 'All'
            ? projects
            : projects.filter((project) => project.category === activeCategory)

    return (
        <div className=" min-h-screen py-8 px-4 sm:px-6 lg:px-8">
            <div className="flex justify-center gap-4 mb-12 flex-wrap">
                {['All', 'City', 'Nature', 'People'].map((category) => (
                    <button
                        key={category}
                        onClick={() => setActiveCategory(category)}
                        className={`px-6 py-2 font-semibold transition-all ${activeCategory === category
                                ? 'border-b'
                                : 'text-white hover:border-b hover:scale-1.05'
                            }`}
                    >
                        {category}
                    </button>
                ))}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
                {filteredProjects.map((project) => (
                    <Link href={`/projects/${project.id}`}
                        key={project.id}
                        className="relative group overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow"
                    >
                        <img
                            src={project.image}
                            alt={project.title}
                            className="w-full object-cover transform group-hover:scale-105 transition-transform"
                        />
                        <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-start p-6">
                            <h3 className="text-white text-4xl">{project.title}</h3>
                        </div>
                    </Link>
                ))}
            </div>
            
        </div>
    )
}