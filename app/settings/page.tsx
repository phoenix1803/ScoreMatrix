"use client"

import { useState } from "react"
import { motion } from "framer-motion"

const SettingsPage = () => {
  const [settings, setSettings] = useState({
    notifications: true,
    darkMode: false,
    language: "en",
    autoSave: true,
    fontSize: "medium",
  })

  const handleSettingChange = (setting: string, value: string | number | boolean) => {
    setSettings((prevSettings) => ({
      ...prevSettings,
      [setting]: value,
    }));
  };
  
  return (
    <div className="max-w-4xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-white shadow rounded-lg p-8"
      >
        <h2 className="text-2xl font-bold mb-6">Settings</h2>
        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-medium mb-2">Notifications</h3>
            <label className="flex items-center">
              <input
                type="checkbox"
                checked={settings.notifications}
                onChange={(e) => handleSettingChange("notifications", e.target.checked)}
                className="form-checkbox h-5 w-5 text-primary"
              />
              <span className="ml-2">Enable notifications</span>
            </label>
          </div>
          <div>
            <h3 className="text-lg font-medium mb-2">Appearance</h3>
            <label className="flex items-center">
              <input
                type="checkbox"
                checked={settings.darkMode}
                onChange={(e) => handleSettingChange("darkMode", e.target.checked)}
                className="form-checkbox h-5 w-5 text-primary"
              />
              <span className="ml-2">Dark mode</span>
            </label>
          </div>
          <div>
            <h3 className="text-lg font-medium mb-2">Language</h3>
            <select
              value={settings.language}
              onChange={(e) => handleSettingChange("language", e.target.value)}
              className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-primary focus:border-primary sm:text-sm rounded-md"
            >
              <option value="en">English</option>
              <option value="es">Español</option>
              <option value="fr">Français</option>
            </select>
          </div>
          <div>
            <h3 className="text-lg font-medium mb-2">Auto-save</h3>
            <label className="flex items-center">
              <input
                type="checkbox"
                checked={settings.autoSave}
                onChange={(e) => handleSettingChange("autoSave", e.target.checked)}
                className="form-checkbox h-5 w-5 text-primary"
              />
              <span className="ml-2">Enable auto-save</span>
            </label>
          </div>
          <div>
            <h3 className="text-lg font-medium mb-2">Font Size</h3>
            <select
              value={settings.fontSize}
              onChange={(e) => handleSettingChange("fontSize", e.target.value)}
              className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-primary focus:border-primary sm:text-sm rounded-md"
            >
              <option value="small">Small</option>
              <option value="medium">Medium</option>
              <option value="large">Large</option>
            </select>
          </div>
        </div>
      </motion.div>
    </div>
  )
}

export default SettingsPage

