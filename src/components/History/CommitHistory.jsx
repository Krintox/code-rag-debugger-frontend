import { useState, useEffect } from 'react'
import { GitCommit, Calendar, User, FileText, ExternalLink } from 'lucide-react'
import Card from '../UI/Card'
import Button from '../UI/Button'
import { getProjectCommits } from '../../utils/api'

const CommitHistory = ({ projectId }) => {
  const [commits, setCommits] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (projectId) {
      fetchCommits()
    }
  }, [projectId])

  const fetchCommits = async () => {
    try {
      setLoading(true)
      const data = await getProjectCommits(projectId)
      setCommits(data)
    } catch (error) {
      console.error('Error fetching commits:', error)
    } finally {
      setLoading(false)
    }
  }

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    })
  }

  if (loading) {
    return (
      <Card>
        <div className="flex items-center justify-center py-12">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500"></div>
        </div>
      </Card>
    )
  }

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h3 className="text-gray-900 text-lg font-semibold">Commit History</h3>
        <span className="text-gray-500 text-sm">{commits.length} commits</span>
      </div>

      {commits.length === 0 ? (
        <Card>
          <div className="text-center py-12 text-gray-500">
            <GitCommit className="w-12 h-12 mx-auto mb-4 text-gray-300" />
            <p>No commits found for this project</p>
          </div>
        </Card>
      ) : (
        <div className="space-y-3">
          {commits.map((commit) => (
            <Card key={commit.id} className="p-4">
              <div className="flex items-start justify-between mb-3">
                <div className="flex-1">
                  <h4 className="text-gray-900 font-medium mb-1">{commit.message}</h4>
                  <div className="flex items-center space-x-4 text-gray-500 text-sm">
                    <div className="flex items-center space-x-1">
                      <User className="w-3 h-3" />
                      <span>{commit.author}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Calendar className="w-3 h-3" />
                      <span>{formatDate(commit.timestamp)}</span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-gray-400 text-sm font-mono">
                    {commit.hash.slice(0, 7)}
                  </span>
                </div>
              </div>

              {commit.files_changed && commit.files_changed.length > 0 && (
                <div className="pt-3 border-t border-gray-200">
                  <div className="flex items-center space-x-2 text-gray-500 text-sm mb-2">
                    <FileText className="w-4 h-4" />
                    <span>Files changed:</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {commit.files_changed.slice(0, 3).map((file, index) => (
                      <span
                        key={index}
                        className="px-2 py-1 bg-gray-100 rounded-md text-gray-700 text-xs font-mono"
                      >
                        {file}
                      </span>
                    ))}
                    {commit.files_changed.length > 3 && (
                      <span className="px-2 py-1 bg-gray-100 rounded-md text-gray-700 text-xs">
                        +{commit.files_changed.length - 3} more
                      </span>
                    )}
                  </div>
                </div>
              )}
            </Card>
          ))}
        </div>
      )}
    </div>
  )
}

export default CommitHistory