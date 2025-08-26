import { useState, useEffect } from 'react'
import { ThumbsUp, ThumbsDown, MessageCircle, Calendar } from 'lucide-react'
import Card from '../UI/Card'
import { getFeedback } from '../../utils/api'

const Feedback = ({ debugQueryId }) => {
  const [feedback, setFeedback] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (debugQueryId) {
      fetchFeedback()
    }
  }, [debugQueryId])

  const fetchFeedback = async () => {
    try {
      setLoading(true)
      const data = await getFeedback(debugQueryId)
      setFeedback(data)
    } catch (error) {
      console.error('Error fetching feedback:', error)
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
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-white"></div>
        </div>
      </Card>
    )
  }

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h3 className="text-white text-lg font-semibold">User Feedback</h3>
        <span className="text-white/60 text-sm">{feedback.length} responses</span>
      </div>

      {feedback.length === 0 ? (
        <Card>
          <div className="text-center py-12 text-white/60">
            <MessageCircle className="w-12 h-12 mx-auto mb-4 opacity-40" />
            <p>No feedback yet for this solution</p>
          </div>
        </Card>
      ) : (
        <div className="space-y-3">
          {feedback.map((item) => (
            <Card key={item.id} className="p-4">
              <div className="flex items-start space-x-3">
                <div className={`p-2 rounded-full ${item.helpful ? 'bg-green-500/20' : 'bg-red-500/20'}`}>
                  {item.helpful ? (
                    <ThumbsUp className="w-4 h-4 text-green-400" />
                  ) : (
                    <ThumbsDown className="w-4 h-4 text-red-400" />
                  )}
                </div>
                <div className="flex-1">
                  <div className="flex items-center space-x-2 text-white/60 text-sm mb-2">
                    <Calendar className="w-3 h-3" />
                    <span>{formatDate(item.created_at)}</span>
                  </div>
                  {item.comments && (
                    <p className="text-white/80 text-sm">{item.comments}</p>
                  )}
                </div>
              </div>
            </Card>
          ))}
        </div>
      )}
    </div>
  )
}

export default Feedback