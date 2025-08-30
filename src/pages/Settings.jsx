// File: src/pages/SettingsPage.js
import React from 'react';
import { Save, Bell, Shield, Code2, Globe, Palette } from 'lucide-react';

const SettingsPage = () => {
  return (
    <div className="max-w-4xl mx-auto p-6 my-6">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Settings</h1>
        <p className="text-gray-600">Manage your account preferences and application settings</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-6">
          {/* Account Settings */}
          <div className="glass p-6 rounded-2xl">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Account Settings</h2>
            <div className="space-y-4">
              <div>
                <label className="block text-gray-700 text-sm font-medium mb-2">Email Address</label>
                <input
                  type="email"
                  defaultValue="developer@example.com"
                  className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              <div>
                <label className="block text-gray-700 text-sm font-medium mb-2">Username</label>
                <input
                  type="text"
                  defaultValue="coder123"
                  className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
            </div>
          </div>

          {/* Notification Preferences */}
          <div className="glass p-6 rounded-2xl">
            <div className="flex items-center space-x-3 mb-4">
              <Bell className="w-5 h-5 text-blue-600" />
              <h2 className="text-xl font-semibold text-gray-900">Notification Preferences</h2>
            </div>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-gray-900 font-medium">Email Notifications</h3>
                  <p className="text-gray-600 text-sm">Receive updates about your projects</p>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input type="checkbox" className="sr-only peer" defaultChecked />
                  <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                </label>
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-gray-900 font-medium">Push Notifications</h3>
                  <p className="text-gray-600 text-sm">Get alerts for important events</p>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input type="checkbox" className="sr-only peer" defaultChecked />
                  <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                </label>
              </div>
            </div>
          </div>

          {/* Privacy & Security */}
          <div className="glass p-6 rounded-2xl">
            <div className="flex items-center space-x-3 mb-4">
              <Shield className="w-5 h-5 text-blue-600" />
              <h2 className="text-xl font-semibold text-gray-900">Privacy & Security</h2>
            </div>
            <div className="space-y-4">
              <div>
                <h3 className="text-gray-900 font-medium">Two-Factor Authentication</h3>
                <p className="text-gray-600 text-sm mb-2">Add an extra layer of security to your account</p>
                <button className="text-blue-600 hover:text-blue-700 text-sm font-medium">
                  Enable 2FA
                </button>
              </div>
              <div>
                <h3 className="text-gray-900 font-medium">Data Export</h3>
                <p className="text-gray-600 text-sm mb-2">Download a copy of your personal data</p>
                <button className="text-blue-600 hover:text-blue-700 text-sm font-medium">
                  Request Data Export
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          {/* Appearance */}
          <div className="glass p-6 rounded-2xl">
            <div className="flex items-center space-x-3 mb-4">
              <Palette className="w-5 h-5 text-blue-600" />
              <h2 className="text-xl font-semibold text-gray-900">Appearance</h2>
            </div>
            <div className="space-y-4">
              <div>
                <label className="block text-gray-700 text-sm font-medium mb-2">Theme</label>
                <select className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
                  <option>Light</option>
                  <option>Dark</option>
                  <option>System</option>
                </select>
              </div>
              <div>
                <label className="block text-gray-700 text-sm font-medium mb-2">Language</label>
                <select className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
                  <option>English</option>
                  <option>Spanish</option>
                  <option>French</option>
                  <option>German</option>
                </select>
              </div>
            </div>
          </div>

          {/* Save Button */}
          <button className="w-full flex items-center justify-center space-x-2 py-3.5 px-6 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-xl hover:from-blue-600 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl">
            <Save className="w-5 h-5" />
            <span>Save Changes</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default SettingsPage;