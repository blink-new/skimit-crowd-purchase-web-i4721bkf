import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Clock, Users, Filter, Search } from 'lucide-react'

// Mock data for campaigns
const mockCampaigns = [
  {
    id: 1,
    title: "iPhone 15 Pro Max",
    image: "https://images.unsplash.com/photo-1695048133142-1a20484d2569?w=400&h=400&fit=crop",
    value: "PKR 450,000",
    ticketPrice: "PKR 1,000",
    ticketsSold: 320,
    totalTickets: 450,
    timeLeft: "2d 14h",
    category: "Electronics"
  },
  {
    id: 2,
    title: "Honda Civic 2024",
    image: "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=400&h=400&fit=crop",
    value: "PKR 6,500,000",
    ticketPrice: "PKR 1,000",
    ticketsSold: 4200,
    totalTickets: 6500,
    timeLeft: "5d 8h",
    category: "Cars"
  },
  {
    id: 3,
    title: "Louis Vuitton Neverfull",
    image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=400&h=400&fit=crop",
    value: "PKR 280,000",
    ticketPrice: "PKR 1,000",
    ticketsSold: 180,
    totalTickets: 280,
    timeLeft: "1d 6h",
    category: "Fashion"
  },
  {
    id: 4,
    title: "MacBook Pro M3",
    image: "https://images.unsplash.com/photo-1541807084-5c52b6b3adef?w=400&h=400&fit=crop",
    value: "PKR 520,000",
    ticketPrice: "PKR 1,000",
    ticketsSold: 410,
    totalTickets: 520,
    timeLeft: "3d 12h",
    category: "Electronics"
  },
  {
    id: 5,
    title: "Rolex Submariner",
    image: "https://images.unsplash.com/photo-1523170335258-f5c6c6bd6eaf?w=400&h=400&fit=crop",
    value: "PKR 1,200,000",
    ticketPrice: "PKR 1,000",
    ticketsSold: 850,
    totalTickets: 1200,
    timeLeft: "7d 2h",
    category: "Luxury"
  },
  {
    id: 6,
    title: "PlayStation 5 Pro",
    image: "https://images.unsplash.com/photo-1606813907291-d86efa9b94db?w=400&h=400&fit=crop",
    value: "PKR 180,000",
    ticketPrice: "PKR 1,000",
    ticketsSold: 95,
    totalTickets: 180,
    timeLeft: "4d 18h",
    category: "Gaming"
  }
]

const categories = ["All", "Electronics", "Cars", "Fashion", "Luxury", "Gaming"]

export default function BrowseItemsPage() {
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [searchTerm, setSearchTerm] = useState("")
  const [sortBy, setSortBy] = useState("ending-soon")

  const filteredCampaigns = mockCampaigns
    .filter(campaign => 
      selectedCategory === "All" || campaign.category === selectedCategory
    )
    .filter(campaign =>
      campaign.title.toLowerCase().includes(searchTerm.toLowerCase())
    )

  const getProgressPercentage = (sold: number, total: number) => {
    return Math.round((sold / total) * 100)
  }

  const getProgressColor = (percentage: number) => {
    if (percentage >= 80) return "bg-green-500"
    if (percentage >= 50) return "bg-accent"
    return "bg-primary"
  }

  return (
    <div className="min-h-screen bg-dark py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-white mb-4">Browse Campaigns</h1>
          <p className="text-xl text-gray-300">
            Find your next winning opportunity. All campaigns are live and transparent.
          </p>
        </div>

        {/* Filters */}
        <div className="bg-dark-secondary rounded-xl p-6 mb-8 border border-gray-800">
          <div className="flex flex-col lg:flex-row gap-4 items-start lg:items-center justify-between">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search campaigns..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-dark border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:border-primary focus:outline-none"
              />
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-lg font-medium transition-all ${
                    selectedCategory === category
                      ? "bg-gradient-to-r from-primary to-accent text-dark"
                      : "bg-dark border border-gray-700 text-gray-300 hover:border-primary"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>

            {/* Sort */}
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="px-4 py-3 bg-dark border border-gray-700 rounded-lg text-white focus:border-primary focus:outline-none"
            >
              <option value="ending-soon">Ending Soon</option>
              <option value="most-popular">Most Popular</option>
              <option value="highest-value">Highest Value</option>
              <option value="lowest-price">Lowest Price</option>
            </select>
          </div>
        </div>

        {/* Campaign Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCampaigns.map((campaign) => {
            const progressPercentage = getProgressPercentage(campaign.ticketsSold, campaign.totalTickets)
            const progressColor = getProgressColor(progressPercentage)
            
            return (
              <Link
                key={campaign.id}
                to={`/item/${campaign.id}`}
                className="bg-dark-secondary rounded-xl overflow-hidden border border-gray-800 hover:border-primary/50 transition-all hover:shadow-lg hover:shadow-primary/10 group"
              >
                {/* Image */}
                <div className="relative overflow-hidden">
                  <img
                    src={campaign.image}
                    alt={campaign.title}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-gradient-to-r from-primary to-accent text-dark px-3 py-1 rounded-full text-sm font-bold">
                      {campaign.category}
                    </span>
                  </div>
                  <div className="absolute top-4 right-4">
                    <div className="bg-dark/80 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm font-medium flex items-center space-x-1">
                      <Clock className="w-4 h-4" />
                      <span>{campaign.timeLeft}</span>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-primary transition-colors">
                    {campaign.title}
                  </h3>
                  
                  <div className="flex justify-between items-center mb-4">
                    <div>
                      <div className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                        {campaign.value}
                      </div>
                      <div className="text-sm text-gray-400">Prize Value</div>
                    </div>
                    <div className="text-right">
                      <div className="text-lg font-bold text-white">
                        {campaign.ticketPrice}
                      </div>
                      <div className="text-sm text-gray-400">Per Ticket</div>
                    </div>
                  </div>

                  {/* Progress Bar */}
                  <div className="mb-4">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm text-gray-300">Progress</span>
                      <span className="text-sm font-bold text-white">{progressPercentage}%</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <div
                        className={`h-2 rounded-full ${progressColor} transition-all duration-300`}
                        style={{ width: `${progressPercentage}%` }}
                      ></div>
                    </div>
                    <div className="flex justify-between items-center mt-2 text-sm text-gray-400">
                      <span>{campaign.ticketsSold} sold</span>
                      <span>{campaign.totalTickets} total</span>
                    </div>
                  </div>

                  {/* Participants */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2 text-gray-300">
                      <Users className="w-4 h-4" />
                      <span className="text-sm">{campaign.ticketsSold} participants</span>
                    </div>
                    <div className="text-primary font-medium">
                      View Details →
                    </div>
                  </div>
                </div>
              </Link>
            )
          })}
        </div>

        {/* No Results */}
        {filteredCampaigns.length === 0 && (
          <div className="text-center py-16">
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-2xl font-bold text-white mb-2">No campaigns found</h3>
            <p className="text-gray-400 mb-6">
              Try adjusting your search or filter criteria
            </p>
            <button
              onClick={() => {
                setSearchTerm("")
                setSelectedCategory("All")
              }}
              className="bg-gradient-to-r from-primary to-accent text-dark px-6 py-3 rounded-lg font-medium hover:shadow-lg hover:shadow-primary/25 transition-all"
            >
              Clear Filters
            </button>
          </div>
        )}
      </div>
    </div>
  )
}