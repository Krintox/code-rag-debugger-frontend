// File: src/App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import Header from './components/Layout/Header';
import Sidebar from './components/Layout/Sidebar';

// Pages
import LandingPage from './pages/LandingPage';
import SettingsPage from './pages/Settings';
import LoginPage from './pages/Login';
import SignupPage from './pages/Signup';
import NotificationsPage from './pages/Notifications';
import ProfilePage from './pages/Profile';
import SubscriptionPage from './pages/Subscriptions';

// Extra pages from old code
import Dashboard from './pages/Dashboard';
import Projects from './pages/Projects';
import Debug from './pages/Debug';
import History from './pages/History';

import './index.css';

// Animation wrapper component
const PageWrapper = ({ children }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -20 }}
    transition={{ duration: 0.3 }}
    className="h-full"
  >
    {children}
  </motion.div>
);

function AnimatedRoutes({ sidebarOpen }) {
  const location = useLocation();

  return (
    <main
      className={`transition-all duration-300 ${sidebarOpen ? 'lg:ml-64' : 'ml-0'} pt-16`}
    >
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          {/* Core Routes */}
          <Route path="/" element={<PageWrapper><LandingPage /></PageWrapper>} />
          <Route path="/settings" element={<PageWrapper><SettingsPage /></PageWrapper>} />
          <Route path="/login" element={<PageWrapper><LoginPage /></PageWrapper>} />
          <Route path="/signup" element={<PageWrapper><SignupPage /></PageWrapper>} />
          <Route path="/notifications" element={<PageWrapper><NotificationsPage /></PageWrapper>} />
          <Route path="/profile" element={<PageWrapper><ProfilePage /></PageWrapper>} />
          <Route path="/subscription" element={<PageWrapper><SubscriptionPage /></PageWrapper>} />

          {/* Extra Pages from Old Code */}
          <Route path="/dashboard" element={<PageWrapper><Dashboard /></PageWrapper>} />
          <Route path="/projects" element={<PageWrapper><Projects /></PageWrapper>} />
          <Route path="/debug" element={<PageWrapper><Debug /></PageWrapper>} />
          <Route path="/history" element={<PageWrapper><History /></PageWrapper>} />
        </Routes>
      </AnimatePresence>
    </main>
  );
}

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
        <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
        <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
        <AnimatedRoutes sidebarOpen={sidebarOpen} />
      </div>
    </Router>
  );
}

export default App;
