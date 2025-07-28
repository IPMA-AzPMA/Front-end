import "../assets/styles/components/recentorders.css"

const RecentOrders = () => {
  const orders = [
    {
      id: 1,
      user: "John Doe",
      date: "01-10-2023",
      status: "completed",
      avatar: "/placeholder.svg?height=32&width=32",
    },
    {
      id: 2,
      user: "Jane Smith",
      date: "01-10-2023",
      status: "pending",
      avatar: "/placeholder.svg?height=32&width=32",
    },
    {
      id: 3,
      user: "Mike Johnson",
      date: "01-10-2023",
      status: "processing",
      avatar: "/placeholder.svg?height=32&width=32",
    },
    {
      id: 4,
      user: "Sarah Wilson",
      date: "01-10-2023",
      status: "pending",
      avatar: "/placeholder.svg?height=32&width=32",
    },
    {
      id: 4,
      user: "Sarah Wilson",
      date: "01-10-2023",
      status: "pending",
      avatar: "/placeholder.svg?height=32&width=32",
    },
    {
      id: 4,
      user: "Sarah Wilson",
      date: "01-10-2023",
      status: "pending",
      avatar: "/placeholder.svg?height=32&width=32",
    },
    {
      id: 4,
      user: "Sarah Wilson",
      date: "01-10-2023",
      status: "pending",
      avatar: "/placeholder.svg?height=32&width=32",
    },
  ]

  const getStatusClass = (status) => {
    switch (status) {
      case "completed":
        return "status-completed"
      case "pending":
        return "status-pending"
      case "processing":
        return "status-processing"
      default:
        return ""
    }
  }

  const getStatusText = (status) => {
    switch (status) {
      case "completed":
        return "Completed"
      case "pending":
        return "Pending"
      case "processing":
        return "Processing"
      default:
        return status
    }
  }

  return (
    <div className="recent-orders">
      <div className="section-header">
        <h2 className="section-title">Recent Orders</h2>
        <button className="search-btn">🔍</button>
      </div>
      <table className="orders-table">
        <thead>
          <tr>
            <th>User</th>
            <th>Date Order</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order) => (
            <tr key={order.id}>
              <td>
                <div className="user-info">
                  <img src={order.avatar || "/placeholder.svg"} alt={order.user} className="user-avatar" />
                  {order.user}
                </div>
              </td>
              <td>{order.date}</td>
              <td>
                <span className={`status-badge ${getStatusClass(order.status)}`}>{getStatusText(order.status)}</span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default RecentOrders
