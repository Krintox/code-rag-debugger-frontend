import { Bell, Search, User, Settings } from 'lucide-react'

const Header = () => {
  return (
    <header className="glass-dark sticky top-0 z-50 p-4 border-b border-white/10">
      <div className="flex items-center justify-between">
        <div className="flex-1 max-w-2xl">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/60 w-5 h-5" />
            <input
              type="text"
              placeholder="Search projects, commits, or errors..."
              className="w-full pl-10 pr-4 py-2.5 bg-white/5 border border-white/10 rounded-xl text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/20 focus:border-white/20 transition-all"
            />
          </div>
        </div>
        
        <div className="flex items-center space-x-4 ml-6">
          <button className="relative p-2 text-white/80 hover:text-white hover:bg-white/10 rounded-xl transition-all">
            <Bell className="w-5 h-5" />
            <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full text-xs font-bold flex items-center justify-center">
              3
            </span>
          </button>
          
          <button className="p-2 text-white/80 hover:text-white hover:bg-white/10 rounded-xl transition-all">
            <Settings className="w-5 h-5" />
          </button>
          
          <button className="flex items-center space-x-2 p-2 text-white/80 hover:text-white hover:bg-white/10 rounded-xl transition-all">
            <div className="w-8 h-8 bg-gradient-to-r from-blue-400 to-purple-600 rounded-full flex items-center justify-center">
              <User className="w-4 h-4" />
            </div>
            <span className="text-sm font-medium">Developer</span>
          </button>
        </div>
      </div>
    </header>
  )
}

export default Header