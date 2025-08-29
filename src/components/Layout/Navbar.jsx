import { User, Bell, Menu } from 'lucide-react'

const Navbar = ({ sidebarOpen, onToggleSidebar }) => {
  return (
    <header className="glass sticky top-0 z-50 p-4 border-b border-gray-200 flex items-center justify-between">
      {/* Hamburger (only visible if sidebar is closed) */}
      {!sidebarOpen && (
        <button
          onClick={onToggleSidebar}
          className="p-2 rounded-xl hover:bg-gray-100 transition"
          aria-label="Open Sidebar"
        >
          <Menu className="w-6 h-6 text-gray-700" />
        </button>
      )}

      {/* Search input */}
      <div className="flex-1 max-w-2xl mx-auto relative">
        <input
          type="search"
          placeholder="Search projects, commits, or errors..."
          className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-gray-200 bg-gray-50 text-gray-900 placeholder-gray-500 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
        />
        <svg
          className="absolute left-3 top-1/2 transform -translate-y-1/2 pointer-events-none text-gray-400 w-5 h-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M21 21l-4.35-4.35M10.5 3a7.5 7.5 0 117.5 7.5A7.5 7.5 0 0110.5 3z" />
        </svg>
      </div>

      {/* Right icons */}
      <div className="flex items-center space-x-4 ml-6">
        <button className="relative p-2 text-gray-600 hover:text-gray-800 rounded-xl transition">
          <Bell className="w-6 h-6" />
          <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 text-white rounded-full text-xs font-bold flex items-center justify-center">
            3
          </span>
        </button>
        <button className="p-2 rounded-xl hover:bg-gray-100 transition">
          <User className="w-6 h-6 text-gray-700" />
        </button>
      </div>
    </header>
  )
}

export default Navbar
