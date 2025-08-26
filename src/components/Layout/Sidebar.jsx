import { NavLink } from 'react-router-dom'
import { 
  Home, 
  GitBranch, 
  Bug, 
  History, 
  Sparkles,
  Code2
} from 'lucide-react'

const Sidebar = () => {
  const navItems = [
    { path: '/', icon: Home, label: 'Dashboard' },
    { path: '/projects', icon: GitBranch, label: 'Projects' },
    { path: '/debug', icon: Bug, label: 'Debug' },
    { path: '/history', icon: History, label: 'History' },
  ]

  return (
    <aside className="glass-dark fixed top-0 left-0 h-full w-64 border-r border-white/10 hidden lg:block z-50">
      <div className="p-6 border-b border-white/10">
        <div className="flex items-center space-x-3">
          <div className="p-2 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl">
            <Code2 className="w-6 h-6 text-white" />
          </div>
          <div>
            <h1 className="text-white font-bold text-xl">CodeTracker</h1>
            <p className="text-white/60 text-sm">AI-Powered Debugging</p>
          </div>
        </div>
      </div>
      
      <nav className="p-4 space-y-2">
        {navItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) =>
              `flex items-center space-x-3 p-3 rounded-xl transition-all ${
                isActive
                  ? 'bg-white/10 text-white shadow-lg'
                  : 'text-white/60 hover:text-white hover:bg-white/5'
              }`
            }
          >
            <item.icon className="w-5 h-5" />
            <span className="font-medium">{item.label}</span>
          </NavLink>
        ))}
      </nav>
      
      <div className="absolute bottom-6 left-6 right-6">
        <div className="glass p-4 rounded-xl">
          <div className="flex items-center space-x-2 mb-2">
            <Sparkles className="w-4 h-4 text-yellow-400" />
            <span className="text-white text-sm font-medium">Pro Tip</span>
          </div>
          <p className="text-white/70 text-xs">
            Use the debugger to find solutions from your project's history
          </p>
        </div>
      </div>
    </aside>
  )
}

export default Sidebar