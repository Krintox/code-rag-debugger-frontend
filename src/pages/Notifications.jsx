// File: src/pages/NotificationsPage.js
import React from 'react';
import { Bell, CheckCircle, AlertCircle, Info, X } from 'lucide-react';

const NotificationsPage = () => {
  const notifications = [
    {
      id: 1,
      type: 'success',
      title: 'Project analysis complete',
      message: 'Your project "E-commerce API" has been successfully analyzed with 42 commits processed.',
      time: '2 hours ago',
      read: false
    },
    {
      id: 2,
      type: 'warning',
      title: 'Debug pattern detected',
      message: 'A common error pattern was found in your latest commit. Check the suggested fix.',
      time: '5 hours ago',
      read: false
    },
    {
      id: 3,
      type: 'info',
      title: 'New feature available',
      message: 'Try our new predictive debugging feature to anticipate issues before they occur.',
      time: '1 day ago',
      read: true
    },
    {
      id: 4,
      type: 'success',
      title: 'Subscription updated',
      message: 'Your Pro subscription has been successfully renewed.',
      time: '2 days ago',
      read: true
    },
    {
      id: 5,
      type: 'error',
      title: 'Analysis failed',
      message: 'Failed to analyze repository "legacy-system". Check your repository permissions.',
      time: '3 days ago',
      read: true
    }
  ];

  const getIcon = (type) => {
    switch (type) {
      case 'success':
        return <CheckCircle className="w-5 h-5 text-green-500" />;
      case 'warning':
        return <AlertCircle className="w-5 h-5 text-yellow-500" />;
      case 'error':
        return <AlertCircle className="w-5 h-5 text-red-500" />;
      default:
        return <Info className="w-5 h-5 text-blue-500" />;
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="mb-8">
        <div className="flex items-center space-x-3 mb-2">
          <div className="p-2 bg-blue-100 rounded-lg">
            <Bell className="w-6 h-6 text-blue-600" />
          </div>
          <h1 className="text-3xl font-bold text-gray-900">Notifications</h1>
        </div>
        <p className="text-gray-600">Stay updated with your project activities and system alerts</p>
      </div>

      <div className="space-y-4">
        {notifications.map((notification) => (
          <div
            key={notification.id}
            className={`glass p-4 rounded-2xl ${!notification.read ? 'border-l-4 border-blue-500' : ''}`}
          >
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                {getIcon(notification.type)}
              </div>
              <div className="flex-1">
                <h3 className="text-gray-900 font-medium">{notification.title}</h3>
                <p className="text-gray-600 mt-1">{notification.message}</p>
                <p className="text-gray-400 text-sm mt-2">{notification.time}</p>
              </div>
              <div className="flex items-start space-x-2">
                {!notification.read && (
                  <span className="px-2 py-1 bg-blue-100 text-blue-700 text-xs font-medium rounded-full">
                    New
                  </span>
                )}
                <button className="text-gray-400 hover:text-gray-600 p-1 rounded-lg">
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {notifications.filter(n => !n.read).length > 0 && (
        <div className="mt-8 text-center">
          <button className="text-blue-600 hover:text-blue-700 font-medium">
            Mark all as read
          </button>
        </div>
      )}
    </div>
  );
};

export default NotificationsPage;