// File: src/components/Sidebar.js
import React from 'react';
import { NavLink } from 'react-router-dom';
import { 
  Home, 
  Settings, 
  Bell, 
  User, 
  CreditCard, 
  LogOut,
  Code2,
  GitBranch,
  Bug,
  History,
  X // ❌ Close icon
} from 'lucide-react';

const Sidebar = ({ sidebarOpen, setSidebarOpen }) => {
  const navItems = [
    { path: '/dashboard', icon: Home, label: 'Dashboard' },
    { path: '/profile', icon: User, label: 'Profile' },
    { path: '/notifications', icon: Bell, label: 'Notifications' },
    { path: '/subscription', icon: CreditCard, label: 'Subscription' },
    { path: '/settings', icon: Settings, label: 'Settings' },
  ];

  const projectNavItems = [
    { path: '/projects', icon: GitBranch, label: 'Projects' },
    { path: '/debug', icon: Bug, label: 'Debug' },
    { path: '/history', icon: History, label: 'History' },
  ];

  return (
    <>
      {/* Backdrop for mobile */}
      {sidebarOpen && (
        <div 
          className="fixed inset-0 bg-black/20 z-40 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}
      
      <aside
        className={`fixed top-0 left-0 h-full w-64 bg-white/95 backdrop-blur-xl border-r border-gray-200 z-50 transform transition-transform duration-300 ease-in-out 
            ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'}`}
        >

        {/* Header with Logo + Close button */}
        <div className="p-6 border-b border-gray-200 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="p-2 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl">
                <a href='/'>
                    <Code2 className="w-6 h-6 text-white" />
                </a>
            </div>
            <div>
                <a href='/'>
                    <h1 className="text-gray-900 font-bold text-xl">RodeCeviewr</h1>
                    <p className="text-gray-500 text-sm">AI-Powered Debugging</p>
                </a>
            </div>
          </div>
          
          {/* Close button (visible on mobile only) */}
          <button 
            onClick={() => setSidebarOpen(false)} 
            className="p-2 rounded-full hover:bg-gray-100 text-gray-600"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
        
        {/* Navigation */}
        <nav className="p-4 space-y-6">
          <div>
            <h3 className="text-gray-500 text-xs font-semibold uppercase tracking-wider mb-3 pl-3">Main</h3>
            <div className="space-y-1">
              {navItems.map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  onClick={() => window.innerWidth < 1024 && setSidebarOpen(false)}
                  className={({ isActive }) =>
                    `flex items-center space-x-3 p-3 rounded-xl transition-all ${
                      isActive
                        ? 'bg-blue-50 text-blue-600 border border-blue-100 shadow-sm'
                        : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                    }`
                  }
                >
                  <item.icon className="w-5 h-5" />
                  <span className="font-medium">{item.label}</span>
                </NavLink>
              ))}
            </div>
          </div>
          
          <div>
            <h3 className="text-gray-500 text-xs font-semibold uppercase tracking-wider mb-3 pl-3">Development</h3>
            <div className="space-y-1">
              {projectNavItems.map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  onClick={() => window.innerWidth < 1024 && setSidebarOpen(false)}
                  className={({ isActive }) =>
                    `flex items-center space-x-3 p-3 rounded-xl transition-all ${
                      isActive
                        ? 'bg-blue-50 text-blue-600 border border-blue-100 shadow-sm'
                        : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                    }`
                  }
                >
                  <item.icon className="w-5 h-5" />
                  <span className="font-medium">{item.label}</span>
                </NavLink>
              ))}
            </div>
          </div>
        </nav>
        
        {/* Footer */}
        <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-gray-200">
          <button className="flex items-center space-x-3 p-3 text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-xl transition-all w-full">
            <LogOut className="w-5 h-5" />
            <span className="font-medium">Logout</span>
          </button>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
