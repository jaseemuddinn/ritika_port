'use client'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useRouter } from "next/navigation"
import { motion } from "framer-motion"
import React from "react"

const projects = [
  {
    id: '1',
    title: 'Urban Landscapes',
    images: [
      'https://picsum.photos/800/600?1',
      'https://picsum.photos/800/600?2',
      'https://picsum.photos/800/600?3',
      'https://picsum.photos/800/600?4',
    ],
    category: 'City',
    description: 'A series of stunning urban landscapes from around the world.',
  },
  {
    id: '2',
    title: 'Mountain Adventures',
    images: [
      'https://picsum.photos/800/600?1',
      'https://picsum.photos/800/600?2',
      'https://picsum.photos/800/600?3',
      'https://picsum.photos/800/600?4',
    ],
    category: 'Nature',
    description: 'Breathtaking views from mountain expeditions.',
  },
  {
    id: '3',
    title: 'Portrait Series',
    iimages: [
      'https://picsum.photos/800/600?1',
      'https://picsum.photos/800/600?2',
      'https://picsum.photos/800/600?3',
      'https://picsum.photos/800/600?4',
    ],
    category: 'People',
    description: 'Intimate portraits capturing raw emotions.',
  },
]

export default function ProjectDetailPage({ params }) {
  const router = useRouter()
  // const { id } = params

  const unwrappedParams = React.use(params)
  const { id } = unwrappedParams

  const project = projects.find((p) => p.id === id)

  if (!project) {
    return <div className="min-h-screen flex items-center justify-center">Project not found</div>
  }

  return (
    <div className="min-h-screen bg-gray-50 px-4 sm:px-6 lg:px-8">
      <div className="max-w-9xl mx-auto">
        <h1 className="text-4xl text-black font-bold mb-6">{project.title}</h1>
        <p className="text-lg text-gray-700 mb-12">{project.description}</p>
        <div className="columns-1 sm:columns-2 lg:columns-2 gap-6">
          {project.images.map((image, index) => (
            <motion.div
              key={index}
              className="mb-6 break-inside-avoid"
              whileHover={{ scale: 1.02 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <img
                src={image}
                alt={`${project.title} - Image ${index + 1}`}
                className="w-full rounded-lg shadow-lg"
              />
            </motion.div>
          ))}
        </div>
        <button
          onClick={() => router.back()}
          className="mt-8 px-6 py-2 text-black rounded-lg transition-colors"
        >
          {/* <FontAwesomeIcon icon={faArrowLeft} className="mr-2" /> */}
          Back to Projects
        </button>
      </div>
      <div className="bg-gray-50 text-center p-4 text-black text-sm">
        All Photos &copy; Ritika {new Date().getFullYear()}
      </div>
    </div>
  )
}