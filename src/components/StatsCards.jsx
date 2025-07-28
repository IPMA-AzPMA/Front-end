import "../assets/styles/components/statscards.css"

const StatsCards = () => {
  const stats = [
    {
      id: 1,
      title: "New Order",
      value: "1020",
      icon: "📋",
      iconClass: "blue",
    },
    {
      id: 2,
      title: "Visitors",
      value: "2834",
      icon: "👥",
      iconClass: "yellow",
    },
    {
      id: 3,
      title: "Total Sales",
      value: "$2543",
      icon: "💰",
      iconClass: "orange",
    },
  ]

  return (
    <div className="stats-grid">
      {stats.map((stat) => (
        <div key={stat.id} className="stat-card">
          <div className={`stat-icon ${stat.iconClass}`}>{stat.icon}</div>
          <div className="stat-info">
            <h3>{stat.value}</h3>
            <p>{stat.title}</p>
          </div>
        </div>
      ))}
    </div>
  )
}

export default StatsCards
