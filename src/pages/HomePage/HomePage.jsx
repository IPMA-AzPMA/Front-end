"use client"

import { useState } from "react"
import Sidebar from "../../components/Sidebar"
import StatsCards from "../../components/StatsCards"
import RecentOrders from "../../components/RecentOrders"
import TodoList from "../../components/ToDoList"

import "../../assets/styles/pages/HomePage/home.css"

function HomePage() {
  const [activeItem, setActiveItem] = useState("dashboard")
  const [isSidebarOpen, setIsSidebarOpen] = useState(true) // Default to open

  const renderContent = () => {
    switch (activeItem) {
      case "dashboard":
        return (
          <>
            <StatsCards />
            <div className="dashboard-grid">
              <RecentOrders />
              <TodoList />
            </div>
          </>
        )
      case "store":
        return (
          <div style={{ padding: "40px", textAlign: "center", background: "white", borderRadius: "12px" }}>
            <h2>My Store</h2>
            <p>Store management content will be here</p>
          </div>
        )
      case "analytics":
        return (
          <div style={{ padding: "40px", textAlign: "center", background: "white", borderRadius: "12px" }}>
            <h2>Analytics</h2>
            <p>Analytics charts and data will be here</p>
          </div>
        )
      case "messages":
        return (
          <div style={{ padding: "40px", textAlign: "center", background: "white", borderRadius: "12px" }}>
            <h2>Messages</h2>
            <p>Message center will be here</p>
          </div>
        )
      case "team":
        return (
          <div style={{ padding: "40px", textAlign: "center", background: "white", borderRadius: "12px" }}>
            <h2>Team Management</h2>
            <p>Team management tools will be here</p>
          </div>
        )
      case "settings":
        return (
          <div style={{ padding: "40px", textAlign: "center", background: "white", borderRadius: "12px" }}>
            <h2>Settings</h2>
            <p>Application settings will be here</p>
          </div>
        )
      default:
        return (
          <>
            <StatsCards />
            <div className="dashboard-grid">
              <RecentOrders />
              <TodoList />
            </div>
          </>
        )
    }
  }

  return (
    <div className="dashboard-container">
      <Sidebar
        activeItem={activeItem}
        setActiveItem={setActiveItem}
        isOpen={isSidebarOpen}
        toggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)}
      />

      <main className="main-content">
        <div className="main-header">
          <div>
            <h1 className="page-title">{activeItem.charAt(0).toUpperCase() + activeItem.slice(1)}</h1>
            <div className="breadcrumb">
              <span>Dashboard</span>
              <span>›</span>
              <span>Home</span>
            </div>
          </div>
          <button className="download-btn">📥 Download PDF</button>
           {/* <div className="dashFooter">
                <span>
                © 2025 PDFly by{" "}
                <a className="dashFooterLink" href="https://pmo.az/az" target="_blank" rel="noopener noreferrer">AzPMA</a> – All rights reserved
                </span>
            </div> */}
        </div>

        {renderContent()}
      </main>
    </div>
  )
}

export default HomePage