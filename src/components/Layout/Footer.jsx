import { Code2, Heart, Github, Twitter } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="glass-dark mt-12 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="flex items-center space-x-3">
            <Code2 className="w-6 h-6 text-purple-600" />
            <span className="text-gray-900 font-semibold">CodeTracker</span>
            <span className="text-gray-400">•</span>
            <span className="text-gray-500 text-sm">AI-Powered Debugging</span>
          </div>
          
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-1 text-gray-500 text-sm">
              <span>Made with</span>
              <Heart className="w-4 h-4 text-red-500 fill-current" />
              <span>for developers</span>
            </div>
            
            <div className="flex items-center space-x-4">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-gray-600 transition-colors"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-gray-600 transition-colors"
              >
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="mt-6 pt-6 border-t border-gray-200 text-center">
          <p className="text-gray-400 text-sm">
            © 2024 CodeTracker. Built with React, FastAPI, and AI magic.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer