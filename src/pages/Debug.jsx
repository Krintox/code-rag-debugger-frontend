import { useState, useEffect } from 'react'
import DebugInterface from '../components/Debug/DebugInterface'
import { getProjects } from '../utils/api'

const Debug = () => {
  const [projects, setProjects] = useState([])

  useEffect(() => {
    fetchProjects()
  }, [])

  const fetchProjects = async () => {
    try {
      const data = await getProjects()
      setProjects(data)
    } catch (error) {
      console.error('Error fetching projects:', error)
    }
  }

  return (
    <div className="max-w-7xl mx-auto">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Debug Assistant</h1>
        <p className="text-gray-600">
          AI-powered debugging using your project's historical data and patterns
        </p>
      </div>
      <DebugInterface projects={projects} />
    </div>
  )
}

export default Debug