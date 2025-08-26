import { useState } from 'react'
import { CheckCircle, XCircle, ThumbsUp, ThumbsDown, Copy, Sparkles } from 'lucide-react'
import Card from '../UI/Card'
import Button from '../UI/Button'
import { submitFeedback } from '../../utils/api'

const SolutionView = ({ solution }) => {
  const [feedbackSubmitted, setFeedbackSubmitted] = useState(false)
  const [isHelpful, setIsHelpful] = useState(null)

  const handleFeedback = async (helpful) => {
    setIsHelpful(helpful)
    try {
      await submitFeedback({
        debug_query_id: 1, // This would come from the solution response
        helpful,
        comments: helpful ? 'Solution was helpful' : 'Solution needs improvement'
      })
      setFeedbackSubmitted(true)
    } catch (error) {
      console.error('Error submitting feedback:', error)
    }
  }

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text)
  }

  return (
    <Card className="h-full">
      <div className="flex items-center space-x-3 mb-6">
        <div className="p-2 bg-green-500/20 rounded-lg">
          <Sparkles className="w-5 h-5 text-green-400" />
        </div>
        <h3 className="text-white text-lg font-semibold">AI Solution</h3>
        <div className="flex-1" />
        <div className="flex items-center space-x-2 px-3 py-1 bg-white/10 rounded-full">
          <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
          <span className="text-white/70 text-sm">{Math.round(solution.confidence * 100)}% confident</span>
        </div>
      </div>

      {/* Solution */}
      <div className="mb-6">
        <h4 className="text-white font-medium mb-3">Recommended Fix</h4>
        <div className="bg-black/30 rounded-xl p-4 mb-4 relative">
          <Button
            variant="ghost"
            size="sm"
            className="absolute top-2 right-2 p-1"
            onClick={() => copyToClipboard(solution.solution)}
          >
            <Copy className="w-3 h-3" />
          </Button>
          <pre className="text-white text-sm whitespace-pre-wrap font-mono">
            {solution.solution}
          </pre>
        </div>
      </div>

      {/* Context */}
      {solution.context.similar_errors.length > 0 && (
        <div className="mb-6">
          <h4 className="text-white font-medium mb-3">Similar Past Solutions</h4>
          <div className="space-y-2">
            {solution.context.similar_errors.slice(0, 2).map((error, index) => (
              <div key={index} className="bg-white/5 rounded-lg p-3">
                <p className="text-white/80 text-sm mb-1">{error.content}</p>
                <div className="flex items-center space-x-2 text-white/60 text-xs">
                  <span>Similarity: {Math.round(error.similarity * 100)}%</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Code Suggestions */}
      {solution.context.code_suggestions.length > 0 && (
        <div className="mb-6">
          <h4 className="text-white font-medium mb-3">Best Practices</h4>
          <div className="space-y-2">
            {solution.context.code_suggestions.map((suggestion, index) => (
              <div key={index} className="flex items-start space-x-2">
                <CheckCircle className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                <span className="text-white/70 text-sm">{suggestion}</span>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Feedback */}
      {!feedbackSubmitted ? (
        <div className="pt-4 border-t border-white/10">
          <h4 className="text-white font-medium mb-3">Was this solution helpful?</h4>
          <div className="flex items-center space-x-3">
            <Button
              variant={isHelpful === true ? 'primary' : 'secondary'}
              size="sm"
              onClick={() => handleFeedback(true)}
              className="flex items-center space-x-2"
            >
              <ThumbsUp className="w-4 h-4" />
              <span>Yes</span>
            </Button>
            <Button
              variant={isHelpful === false ? 'primary' : 'secondary'}
              size="sm"
              onClick={() => handleFeedback(false)}
              className="flex items-center space-x-2"
            >
              <ThumbsDown className="w-4 h-4" />
              <span>No</span>
            </Button>
          </div>
        </div>
      ) : (
        <div className="pt-4 border-t border-white/10">
          <div className="flex items-center space-x-2 text-green-400">
            <CheckCircle className="w-5 h-5" />
            <span className="text-sm">Thanks for your feedback!</span>
          </div>
        </div>
      )}
    </Card>
  )
}

export default SolutionView