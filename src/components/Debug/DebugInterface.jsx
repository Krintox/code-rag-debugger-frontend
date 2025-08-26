import { useState } from 'react'
import { Bug, Code, FileText, Sparkles } from 'lucide-react'
import Card from '../UI/Card'
import Button from '../UI/Button'
import SolutionView from './SolutionView'
import { debugCode } from '../../utils/api'

const DebugInterface = ({ projects }) => {
  const [formData, setFormData] = useState({
    error_message: '',
    code_snippet: '',
    file_path: '',
    additional_context: '',
    project_id: ''
  })
  const [solution, setSolution] = useState(null)
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    
    try {
      const response = await debugCode(formData)
      setSolution(response)
    } catch (error) {
      console.error('Error debugging:', error)
    } finally {
      setLoading(false)
    }
  }

  const handleInputChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      <Card>
        <div className="flex items-center space-x-3 mb-6">
          <div className="p-2 bg-red-500/20 rounded-lg">
            <Bug className="w-5 h-5 text-red-400" />
          </div>
          <h3 className="text-white text-lg font-semibold">Debug Code</h3>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-white/80 text-sm font-medium mb-2">
              Error Message *
            </label>
            <textarea
              required
              value={formData.error_message}
              onChange={(e) => handleInputChange('error_message', e.target.value)}
              placeholder="Paste the error message or stack trace here..."
              className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50 resize-none min-h-[100px]"
            />
          </div>

          <div>
            <label className="block text-white/80 text-sm font-medium mb-2">
              Code Snippet
            </label>
            <div className="relative">
              <Code className="absolute left-3 top-3 w-4 h-4 text-white/40" />
              <textarea
                value={formData.code_snippet}
                onChange={(e) => handleInputChange('code_snippet', e.target.value)}
                placeholder="Paste the relevant code snippet..."
                className="w-full bg-white/5 border border-white/10 rounded-xl pl-10 pr-4 py-3 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50 resize-none min-h-[120px] font-mono text-sm"
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-white/80 text-sm font-medium mb-2">
                File Path
              </label>
              <div className="relative">
                <FileText className="absolute left-3 top-3 w-4 h-4 text-white/40" />
                <input
                  type="text"
                  value={formData.file_path}
                  onChange={(e) => handleInputChange('file_path', e.target.value)}
                  placeholder="e.g., src/utils/helper.js"
                  className="w-full bg-white/5 border border-white/10 rounded-xl pl-10 pr-4 py-3 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50"
                />
              </div>
            </div>

            <div>
              <label className="block text-white/80 text-sm font-medium mb-2">
                Project
              </label>
              <select
                required
                value={formData.project_id}
                onChange={(e) => handleInputChange('project_id', e.target.value)}
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50"
              >
                <option value="">Select a project</option>
                {projects.map((project) => (
                  <option key={project.id} value={project.id}>
                    {project.name}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div>
            <label className="block text-white/80 text-sm font-medium mb-2">
              Additional Context
            </label>
            <textarea
              value={formData.additional_context}
              onChange={(e) => handleInputChange('additional_context', e.target.value)}
              placeholder="Any additional information about the error..."
              className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50 resize-none min-h-[80px]"
            />
          </div>

          <Button
            type="submit"
            loading={loading}
            className="w-full flex items-center justify-center space-x-2 py-3"
          >
            <Sparkles className="w-4 h-4" />
            <span>Find Solution</span>
          </Button>
        </form>
      </Card>

      <div>
        {solution ? (
          <SolutionView solution={solution} />
        ) : (
          <Card className="h-full flex items-center justify-center">
            <div className="text-center text-white/60">
              <Sparkles className="w-12 h-12 mx-auto mb-4 opacity-40" />
              <h4 className="text-lg font-medium mb-2">AI-Powered Solutions</h4>
              <p className="text-sm">Enter error details to get intelligent solutions from your project's history</p>
            </div>
          </Card>
        )}
      </div>
    </div>
  )
}

export default DebugInterface