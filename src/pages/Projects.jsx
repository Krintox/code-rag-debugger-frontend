import { useEffect, useState } from 'react'
import ProjectList from '../components/Projects/ProjectList'

const Projects = () => {
  return (
    <div className="max-w-7xl mx-auto">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-white mb-2">Projects</h1>
        <p className="text-white/60">
          Manage your code repositories and track their evolution over time
        </p>
      </div>
      <ProjectList />
    </div>
  )
}

export default Projects