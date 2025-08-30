import { useState, useEffect } from 'react'
import { Code2, GitBranch, Bug, History, Sparkles } from 'lucide-react'
import Card from '../components/UI/Card'
import Button from '../components/UI/Button'
import { getProjects } from '../utils/api'

const Dashboard = () => {
  const [projects, setProjects] = useState([])
  const [stats, setStats] = useState({
    totalProjects: 0,
    totalCommits: 0,
    solvedErrors: 0,
    activeProjects: 0
  })

  useEffect(() => {
    fetchProjects()
  }, [])

  const fetchProjects = async () => {
    try {
      const data = await getProjects()
      setProjects(data)
      setStats(prev => ({
        ...prev,
        totalProjects: data.length,
        activeProjects: data.filter(p => p.updated_at).length
      }))
    } catch (error) {
      console.error('Error fetching projects:', error)
    }
  }

  const StatCard = ({ icon: Icon, label, value, color }) => (
    <Card hover className="text-center p-6">
      <div className={`inline-flex items-center justify-center w-12 h-12 rounded-full ${color} mb-4`}>
        <Icon className="w-6 h-6 text-white" />
      </div>
      <div className="text-2xl font-bold text-gray-900 mb-1">{value}</div>
      <div className="text-gray-500 text-sm">{label}</div>
    </Card>
  )

  return (
    <div className="space-y-8 p-6 my-6">
      {/* Header */}
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Welcome to <span className="gradient-text">RodeCeviewr</span>
        </h1>
        <p className="text-gray-600 text-lg max-w-2xl mx-auto">
          AI-powered code evolution tracking and debugging platform that learns from your project's history
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard
          icon={GitBranch}
          label="Total Projects"
          value={stats.totalProjects}
          color="bg-blue-500"
        />
        <StatCard
          icon={Code2}
          label="Total Commits"
          value={stats.totalCommits}
          color="bg-purple-500"
        />
        <StatCard
          icon={Bug}
          label="Solved Errors"
          value={stats.solvedErrors}
          color="bg-green-500"
        />
        <StatCard
          icon={Sparkles}
          label="Active Projects"
          value={stats.activeProjects}
          color="bg-pink-500"
        />
      </div>

      {/* Quick Actions */}
      <Card>
        <h3 className="text-gray-900 text-xl font-semibold mb-6">Quick Actions</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Button
            variant="secondary"
            className="flex items-center justify-center space-x-2 py-4"
            onClick={() => window.location.href = '/projects'}
          >
            <GitBranch className="w-5 h-5" />
            <span>View Projects</span>
          </Button>
          <Button
            variant="secondary"
            className="flex items-center justify-center space-x-2 py-4"
            onClick={() => window.location.href = '/debug'}
          >
            <Bug className="w-5 h-5" />
            <span>Debug Code</span>
          </Button>
          <Button
            variant="secondary"
            className="flex items-center justify-center space-x-2 py-4"
            onClick={() => window.location.href = '/history'}
          >
            <History className="w-5 h-5" />
            <span>View History</span>
          </Button>
        </div>
      </Card>

      {/* Recent Activity */}
      {projects.length > 0 && (
        <Card>
          <h3 className="text-gray-900 text-xl font-semibold mb-6">Recent Projects</h3>
          <div className="space-y-4">
            {projects.slice(0, 3).map((project) => (
              <div key={project.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
                <div>
                  <h4 className="text-gray-900 font-medium">{project.name}</h4>
                  <p className="text-gray-500 text-sm">{project.git_url}</p>
                </div>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => window.location.href = `/projects#${project.id}`}
                >
                  View
                </Button>
              </div>
            ))}
          </div>
        </Card>
      )}
    </div>
  )
}

export default Dashboard