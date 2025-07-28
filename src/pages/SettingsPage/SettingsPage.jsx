"use client"

import { useState, useEffect } from "react"
import "../../assets/styles/pages/SettingsPage/settingspage.css"

function SettingsPage() {
  const [settings, setSettings] = useState({
    theme: {
      sidebarBgColor: "#ffffff",
      sidebarTextColor: "#64748b",
      sidebarActiveColor: "#3b82f6",
      sidebarHoverColor: "#f1f5f9",
      sidebarIconColor: "#64748b",
      mainBgColor: "#f8fafc",
      fontSize: 14,
      borderRadius: 8,
      sidebarWidth: 250,
    },
    profile: {
      username: "admin",
      email: "admin@company.com",
      fullName: "Admin User",
      avatar: "/placeholder.svg?height=80&width=80",
    },
    security: {
      currentPassword: "",
      newPassword: "",
      confirmPassword: "",
    },
    notifications: {
      emailNotifications: true,
      pushNotifications: false,
      orderUpdates: true,
      systemAlerts: true,
      marketingEmails: false,
    },
  })

  const [message, setMessage] = useState({ type: "", text: "" })

  // Load settings from localStorage on component mount
  useEffect(() => {
    const savedSettings = localStorage.getItem("dashboardSettings")
    if (savedSettings) {
      try {
        const parsedSettings = JSON.parse(savedSettings)
        setSettings((prevSettings) => ({ ...prevSettings, ...parsedSettings }))
      } catch (error) {
        console.error("Error parsing saved settings:", error)
      }
    }
  }, [])

  const handleThemeChange = (key, value) => {
    setSettings((prev) => ({
      ...prev,
      theme: {
        ...prev.theme,
        [key]: value,
      },
    }))
  }

  const handleProfileChange = (key, value) => {
    setSettings((prev) => ({
      ...prev,
      profile: {
        ...prev.profile,
        [key]: value,
      },
    }))
  }

  const handleSecurityChange = (key, value) => {
    setSettings((prev) => ({
      ...prev,
      security: {
        ...prev.security,
        [key]: value,
      },
    }))
  }

  const handleNotificationChange = (key) => {
    setSettings((prev) => ({
      ...prev,
      notifications: {
        ...prev.notifications,
        [key]: !prev.notifications[key],
      },
    }))
  }

  const handleAvatarChange = (event) => {
    const file = event.target.files[0]
    if (file) {
      const reader = new FileReader()
      reader.onload = (e) => {
        handleProfileChange("avatar", e.target.result)
      }
      reader.readAsDataURL(file)
    }
  }

  const saveSettings = () => {
    try {
      localStorage.setItem("dashboardSettings", JSON.stringify(settings))
      setMessage({ type: "success", text: "Settings saved successfully!" })

      // Apply theme changes to CSS variables
      const root = document.documentElement
      root.style.setProperty("--sidebar-bg", settings.theme.sidebarBgColor)
      root.style.setProperty("--sidebar-text", settings.theme.sidebarTextColor)
      root.style.setProperty("--sidebar-active", settings.theme.sidebarActiveColor)
      root.style.setProperty("--sidebar-hover", settings.theme.sidebarHoverColor)
      root.style.setProperty("--main-bg", settings.theme.mainBgColor)
      root.style.setProperty("--font-size", settings.theme.fontSize + "px")
      root.style.setProperty("--border-radius", settings.theme.borderRadius + "px")
      root.style.setProperty("--sidebar-width", settings.theme.sidebarWidth + "px")

      setTimeout(() => setMessage({ type: "", text: "" }), 3000)
    } catch (error) {
      setMessage({ type: "error", text: "Error saving settings!" })
      setTimeout(() => setMessage({ type: "", text: "" }), 3000)
    }
  }

  const resetSettings = () => {
    const defaultSettings = {
      theme: {
        sidebarBgColor: "#ffffff",
        sidebarTextColor: "#64748b",
        sidebarActiveColor: "#3b82f6",
        sidebarHoverColor: "#f1f5f9",
        sidebarIconColor: "#64748b",
        mainBgColor: "#f8fafc",
        fontSize: 14,
        borderRadius: 8,
        sidebarWidth: 250,
      },
      profile: {
        username: "admin",
        email: "admin@company.com",
        fullName: "Admin User",
        avatar: "/placeholder.svg?height=80&width=80",
      },
      security: {
        currentPassword: "",
        newPassword: "",
        confirmPassword: "",
      },
      notifications: {
        emailNotifications: true,
        pushNotifications: false,
        orderUpdates: true,
        systemAlerts: true,
        marketingEmails: false,
      },
    }

    setSettings(defaultSettings)
    localStorage.removeItem("dashboardSettings")
    setMessage({ type: "success", text: "Settings reset to default!" })
    setTimeout(() => setMessage({ type: "", text: "" }), 3000)
  }

  const changePassword = () => {
    if (!settings.security.currentPassword || !settings.security.newPassword) {
      setMessage({ type: "error", text: "Please fill in all password fields!" })
      setTimeout(() => setMessage({ type: "", text: "" }), 3000)
      return
    }

    if (settings.security.newPassword !== settings.security.confirmPassword) {
      setMessage({ type: "error", text: "New passwords do not match!" })
      setTimeout(() => setMessage({ type: "", text: "" }), 3000)
      return
    }

    if (settings.security.newPassword.length < 8) {
      setMessage({ type: "error", text: "Password must be at least 8 characters long!" })
      setTimeout(() => setMessage({ type: "", text: "" }), 3000)
      return
    }

    // Simulate password change
    setMessage({ type: "success", text: "Password changed successfully!" })
    setSettings((prev) => ({
      ...prev,
      security: {
        currentPassword: "",
        newPassword: "",
        confirmPassword: "",
      },
    }))
    setTimeout(() => setMessage({ type: "", text: "" }), 3000)
  }

  return (
    <div className="settings-page">
      <div className="settings-container">
        {message.text && (
          <div className={message.type === "success" ? "success-message" : "error-message"}>{message.text}</div>
        )}

        {/* Theme Settings */}
        <div className="settings-section">
          <div className="settings-section-header">
            <h2 className="settings-section-title">🎨 Theme Settings</h2>
          </div>
          <div className="settings-section-content">
            <div className="settings-grid">
              <div className="setting-item">
                <label className="setting-label">Sidebar Background Color</label>
                <input
                  type="color"
                  value={settings.theme.sidebarBgColor}
                  onChange={(e) => handleThemeChange("sidebarBgColor", e.target.value)}
                  className="setting-color-input"
                />
              </div>

              <div className="setting-item">
                <label className="setting-label">Sidebar Text Color</label>
                <input
                  type="color"
                  value={settings.theme.sidebarTextColor}
                  onChange={(e) => handleThemeChange("sidebarTextColor", e.target.value)}
                  className="setting-color-input"
                />
              </div>

              <div className="setting-item">
                <label className="setting-label">Sidebar Active Color</label>
                <input
                  type="color"
                  value={settings.theme.sidebarActiveColor}
                  onChange={(e) => handleThemeChange("sidebarActiveColor", e.target.value)}
                  className="setting-color-input"
                />
              </div>

              <div className="setting-item">
                <label className="setting-label">Sidebar Hover Color</label>
                <input
                  type="color"
                  value={settings.theme.sidebarHoverColor}
                  onChange={(e) => handleThemeChange("sidebarHoverColor", e.target.value)}
                  className="setting-color-input"
                />
              </div>

              <div className="setting-item">
                <label className="setting-label">Main Background Color</label>
                <input
                  type="color"
                  value={settings.theme.mainBgColor}
                  onChange={(e) => handleThemeChange("mainBgColor", e.target.value)}
                  className="setting-color-input"
                />
              </div>

              <div className="setting-item">
                <label className="setting-label">Font Size: {settings.theme.fontSize}px</label>
                <input
                  type="range"
                  min="12"
                  max="20"
                  value={settings.theme.fontSize}
                  onChange={(e) => handleThemeChange("fontSize", Number.parseInt(e.target.value))}
                  className="setting-range"
                />
              </div>

              <div className="setting-item">
                <label className="setting-label">Border Radius: {settings.theme.borderRadius}px</label>
                <input
                  type="range"
                  min="0"
                  max="20"
                  value={settings.theme.borderRadius}
                  onChange={(e) => handleThemeChange("borderRadius", Number.parseInt(e.target.value))}
                  className="setting-range"
                />
              </div>

              <div className="setting-item">
                <label className="setting-label">Sidebar Width: {settings.theme.sidebarWidth}px</label>
                <input
                  type="range"
                  min="200"
                  max="350"
                  value={settings.theme.sidebarWidth}
                  onChange={(e) => handleThemeChange("sidebarWidth", Number.parseInt(e.target.value))}
                  className="setting-range"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Profile Settings */}
        <div className="settings-section">
          <div className="settings-section-header">
            <h2 className="settings-section-title">👤 Profile Settings</h2>
          </div>
          <div className="settings-section-content">
            <div className="profile-section">
              <img src={settings.profile.avatar || "/placeholder.svg"} alt="Profile" className="profile-avatar" />
              <div className="profile-info">
                <h3>{settings.profile.fullName}</h3>
                <p>{settings.profile.email}</p>
                <div className="file-input-wrapper">
                  <input type="file" accept="image/*" onChange={handleAvatarChange} className="file-input" />
                  <label className="file-input-label">📷 Change Avatar</label>
                </div>
              </div>
            </div>

            <div className="settings-grid">
              <div className="setting-item">
                <label className="setting-label">Full Name</label>
                <input
                  type="text"
                  value={settings.profile.fullName}
                  onChange={(e) => handleProfileChange("fullName", e.target.value)}
                  className="setting-input"
                />
              </div>

              <div className="setting-item">
                <label className="setting-label">Username</label>
                <input
                  type="text"
                  value={settings.profile.username}
                  onChange={(e) => handleProfileChange("username", e.target.value)}
                  className="setting-input"
                />
              </div>

              <div className="setting-item">
                <label className="setting-label">Email</label>
                <input
                  type="email"
                  value={settings.profile.email}
                  onChange={(e) => handleProfileChange("email", e.target.value)}
                  className="setting-input"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Security Settings */}
        <div className="settings-section">
          <div className="settings-section-header">
            <h2 className="settings-section-title">🔒 Security Settings</h2>
          </div>
          <div className="settings-section-content">
            <div className="settings-grid">
              <div className="setting-item">
                <label className="setting-label">Current Password</label>
                <input
                  type="password"
                  value={settings.security.currentPassword}
                  onChange={(e) => handleSecurityChange("currentPassword", e.target.value)}
                  className="setting-input"
                  placeholder="Enter current password"
                />
              </div>

              <div className="setting-item">
                <label className="setting-label">New Password</label>
                <input
                  type="password"
                  value={settings.security.newPassword}
                  onChange={(e) => handleSecurityChange("newPassword", e.target.value)}
                  className="setting-input"
                  placeholder="Enter new password"
                />
                <div className="password-requirements">Password must be at least 8 characters long</div>
              </div>

              <div className="setting-item">
                <label className="setting-label">Confirm New Password</label>
                <input
                  type="password"
                  value={settings.security.confirmPassword}
                  onChange={(e) => handleSecurityChange("confirmPassword", e.target.value)}
                  className="setting-input"
                  placeholder="Confirm new password"
                />
              </div>
            </div>

            <div className="settings-actions">
              <button onClick={changePassword} className="btn btn-primary">
                🔑 Change Password
              </button>
            </div>
          </div>
        </div>

        {/* Notification Settings */}
        <div className="settings-section">
          <div className="settings-section-header">
            <h2 className="settings-section-title">🔔 Notification Settings</h2>
          </div>
          <div className="settings-section-content">
            <div className="notification-item">
              <div className="notification-info">
                <h4>Email Notifications</h4>
                <p>Receive notifications via email</p>
              </div>
              <div
                className={`toggle-switch ${settings.notifications.emailNotifications ? "active" : ""}`}
                onClick={() => handleNotificationChange("emailNotifications")}
              ></div>
            </div>

            <div className="notification-item">
              <div className="notification-info">
                <h4>Push Notifications</h4>
                <p>Receive browser push notifications</p>
              </div>
              <div
                className={`toggle-switch ${settings.notifications.pushNotifications ? "active" : ""}`}
                onClick={() => handleNotificationChange("pushNotifications")}
              ></div>
            </div>

            <div className="notification-item">
              <div className="notification-info">
                <h4>Order Updates</h4>
                <p>Get notified about order status changes</p>
              </div>
              <div
                className={`toggle-switch ${settings.notifications.orderUpdates ? "active" : ""}`}
                onClick={() => handleNotificationChange("orderUpdates")}
              ></div>
            </div>

            <div className="notification-item">
              <div className="notification-info">
                <h4>System Alerts</h4>
                <p>Important system notifications</p>
              </div>
              <div
                className={`toggle-switch ${settings.notifications.systemAlerts ? "active" : ""}`}
                onClick={() => handleNotificationChange("systemAlerts")}
              ></div>
            </div>

            <div className="notification-item">
              <div className="notification-info">
                <h4>Marketing Emails</h4>
                <p>Promotional and marketing content</p>
              </div>
              <div
                className={`toggle-switch ${settings.notifications.marketingEmails ? "active" : ""}`}
                onClick={() => handleNotificationChange("marketingEmails")}
              ></div>
            </div>
          </div>
        </div>

        {/* Main Actions */}
        <div className="settings-actions">
          <button onClick={saveSettings} className="btn btn-primary">
            💾 Save Settings
          </button>
          <button onClick={resetSettings} className="btn btn-secondary">
            🔄 Reset to Default
          </button>
          <button
            onClick={() => {
              localStorage.clear()
              setMessage({ type: "success", text: "All data cleared!" })
              setTimeout(() => setMessage({ type: "", text: "" }), 3000)
            }}
            className="btn btn-danger"
          >
            🗑️ Clear All Data
          </button>
        </div>
      </div>
    </div>
  )
}

export default SettingsPage
