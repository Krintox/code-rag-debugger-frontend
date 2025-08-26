const API_BASE_URL = 'http://localhost:8000'

const handleResponse = async (response) => {
  if (!response.ok) {
    const error = await response.json()
    throw new Error(error.detail || 'An error occurred')
  }
  return response.json()
}

export const api = {
  // Projects
  getProjects: () => fetch(`${API_BASE_URL}/projects`).then(handleResponse),
  getProject: (id) => fetch(`${API_BASE_URL}/projects/${id}`).then(handleResponse),
  createProject: (data) => 
    fetch(`${API_BASE_URL}/projects`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    }).then(handleResponse),
  refreshProject: (id) => 
    fetch(`${API_BASE_URL}/projects/${id}/refresh`, {
      method: 'POST'
    }).then(handleResponse),
  getProjectCommits: (id) => 
    fetch(`${API_BASE_URL}/projects/${id}/commits`).then(handleResponse),

  // Debug
  debugCode: (data) =>
    fetch(`${API_BASE_URL}/debug`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    }).then(handleResponse),
  ragQuery: (data) =>
    fetch(`${API_BASE_URL}/debug/rag`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    }).then(handleResponse),

  // History
  getCommit: (hash, projectId) =>
    fetch(`${API_BASE_URL}/history/commits/${hash}?project_id=${projectId}`).then(handleResponse),
  submitFeedback: (data) =>
    fetch(`${API_BASE_URL}/history/feedback`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    }).then(handleResponse),
  getFeedback: (debugQueryId) =>
    fetch(`${API_BASE_URL}/history/feedback/${debugQueryId}`).then(handleResponse),
}

// Export individual functions for easier imports
export const {
  getProjects,
  getProject,
  createProject,
  refreshProject,
  getProjectCommits,
  debugCode,
  ragQuery,
  getCommit,
  submitFeedback,
  getFeedback,
} = api