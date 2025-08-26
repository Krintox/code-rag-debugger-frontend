import { useState, useEffect } from 'react'
import { Hammer, GitBranch, MessageCircle } from 'lucide-react'
import Card from '../components/UI/Card'
import CommitHistory from '../components/History/CommitHistory'
import Feedback from '../components/History/Feedback'
import { getProjects } from '../utils/api'

const History = () => {
  const [projects, setProjects] = useState([])
  const [selectedProject, setSelectedProject] = useState(null)
  const [activeTab, setActiveTab] = useState('commits')

  useEffect(() => {
    fetchProjects()
  }, [])

  const fetchProjects = async () => {
    try {
      const data = await getProjects()
      setProjects(data)
      if (data.length > 0) {
        setSelectedProject(data[0].id)
      }
    } catch (error) {
      console.error('Error fetching projects:', error)
    }
  }

  return (
    <div className="max-w-7xl mx-auto">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-white mb-2">History</h1>
        <p className="text-white/60">
          Explore your project's commit history and user feedback
        </p>
      </div>

      {/* Project Selector */}
      {projects.length > 0 && (
        <Card className="mb-6">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2 text-white/60">
              <GitBranch className="w-4 h-4" />
              <span>Project:</span>
            </div>
            <select
              value={selectedProject || ''}
              onChange={(e) => setSelectedProject(Number(e.target.value))}
              className="bg-white/5 border border-white/10 rounded-xl px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50"
            >
              {projects.map((project) => (
                <option key={project.id} value={project.id}>
                  {project.name}
                </option>
              ))}
            </select>
          </div>
        </Card>
      )}

      {/* Tabs */}
      <div className="flex space-x-1 p-1 bg-white/10 rounded-xl mb-6">
        <button
          onClick={() => setActiveTab('commits')}
          className={`flex items-center space-x-2 px-4 py-2 rounded-xl transition-all ${
            activeTab === 'commits'
              ? 'bg-white/20 text-white'
              : 'text-white/60 hover:text-white'
          }`}
        >
          <Hammer className="w-4 h-4" />
          <span>Commit History</span>
        </button>
        <button
          onClick={() => setActiveTab('feedback')}
          className={`flex items-center space-x-2 px-4 py-2 rounded-xl transition-all ${
            activeTab === 'feedback'
              ? 'bg-white/20 text-white'
              : 'text-white/60 hover:text-white'
          }`}
        >
          <MessageCircle className="w-4 h-4" />
          <span>Feedback</span>
        </button>
      </div>

      {/* Content */}
      {selectedProject ? (
        <>
          {activeTab === 'commits' && (
            <CommitHistory projectId={selectedProject} />
          )}
          {activeTab === 'feedback' && (
            <Feedback debugQueryId={1} />
          )}
        </>
      ) : (
        <Card>
          <div className="text-center py-12 text-white/60">
            <GitBranch className="w-12 h-12 mx-auto mb-4 opacity-40" />
            <p>Select a project to view history</p>
          </div>
        </Card>
      )}
    </div>
  )
}

export default History