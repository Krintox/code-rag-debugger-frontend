import { useState } from 'react'
import { GitBranch, RefreshCw, Calendar, FileText, ExternalLink } from 'lucide-react'
import Card from '../UI/Card'
import Button from '../UI/Button'
import { refreshProject } from '../../utils/api'

const ProjectCard = ({ project, onRefresh }) => {
  const [refreshing, setRefreshing] = useState(false)

  const handleRefresh = async () => {
    setRefreshing(true)
    try {
      await refreshProject(project.id)
      onRefresh?.()
    } catch (error) {
      console.error('Error refreshing project:', error)
    } finally {
      setRefreshing(false)
    }
  }

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    })
  }

  return (
    <Card hover className="h-full">
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center space-x-3">
          <div className="p-2 bg-blue-500/20 rounded-lg">
            <GitBranch className="w-5 h-5 text-blue-400" />
          </div>
          <h3 className="text-white font-semibold text-lg">{project.name}</h3>
        </div>
        <Button
          variant="ghost"
          size="sm"
          loading={refreshing}
          onClick={handleRefresh}
          className="p-2"
        >
          <RefreshCw className="w-4 h-4" />
        </Button>
      </div>

      {project.description && (
        <p className="text-white/70 text-sm mb-4 line-clamp-2">
          {project.description}
        </p>
      )}

      <div className="space-y-2 mb-4">
        <div className="flex items-center space-x-2 text-white/60 text-sm">
          <FileText className="w-4 h-4" />
          <span className="truncate">{project.git_url}</span>
        </div>
        <div className="flex items-center space-x-2 text-white/60 text-sm">
          <Calendar className="w-4 h-4" />
          <span>Created {formatDate(project.created_at)}</span>
        </div>
      </div>

      <div className="flex items-center space-x-3 pt-4 border-t border-white/10">
        <Button
          variant="secondary"
          size="sm"
          className="flex-1"
          onClick={() => window.location.href = `/projects#${project.id}`}
        >
          View Details
        </Button>
        <Button
          variant="ghost"
          size="sm"
          onClick={() => window.open(project.git_url, '_blank')}
        >
          <ExternalLink className="w-4 h-4" />
        </Button>
      </div>
    </Card>
  )
}

export default ProjectCard