import { useState, useEffect } from 'react'
import { GitBranch, RefreshCw, Plus } from 'lucide-react'
import Card from '../UI/Card'
import Button from '../UI/Button'
import ProjectCard from './ProjectCard'
import AddProjectModal from './AddProjectModal'
import { getProjects } from '../../utils/api'

const ProjectList = () => {
  const [projects, setProjects] = useState([])
  const [loading, setLoading] = useState(true)
  const [isModalOpen, setIsModalOpen] = useState(false)

  useEffect(() => {
    fetchProjects()
  }, [])

  const fetchProjects = async () => {
    try {
      setLoading(true)
      const data = await getProjects()
      setProjects(data)
    } catch (error) {
      console.error('Error fetching projects:', error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-white mb-2">Your Projects</h2>
          <p className="text-white/60">Manage and track your code repositories</p>
        </div>
        <Button
          onClick={() => setIsModalOpen(true)}
          className="flex items-center space-x-2"
        >
          <Plus className="w-4 h-4" />
          <span>Add Project</span>
        </Button>
      </div>

      {loading ? (
        <Card>
          <div className="flex items-center justify-center py-12">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-white"></div>
          </div>
        </Card>
      ) : projects.length === 0 ? (
        <Card className="text-center py-12">
          <GitBranch className="w-12 h-12 text-white/40 mx-auto mb-4" />
          <h3 className="text-white text-lg font-medium mb-2">No projects yet</h3>
          <p className="text-white/60 mb-4">Add your first project to start tracking code evolution</p>
          <Button onClick={() => setIsModalOpen(true)}>
            Add Your First Project
          </Button>
        </Card>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onRefresh={fetchProjects}
            />
          ))}
        </div>
      )}

      <AddProjectModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onProjectAdded={fetchProjects}
      />
    </div>
  )
}

export default ProjectList