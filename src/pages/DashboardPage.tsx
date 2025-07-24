import { useState } from 'react'
import { Trophy, Clock, RefreshCw, TrendingUp, Ticket, Gift } from 'lucide-react'

interface DashboardProps {
  user: any
}

// Mock data
const mockStats = {
  totalSpent: 15000,
  totalWon: 2,
  winRate: 13,
  activeTickets: 8,
  pendingRefunds: 2550
}

const mockPurchases = [
  {
    id: 1,
    item: "iPhone 15 Pro Max",
    tickets: 3,
    amount: 3000,
    status: "active",
    timeLeft: "2d 14h",
    image: "https://images.unsplash.com/photo-1695048133142-1a20484d2569?w=100&h=100&fit=crop"
  },
  {
    id: 2,
    item: "MacBook Pro M3",
    tickets: 2,
    amount: 2000,
    status: "active",
    timeLeft: "3d 12h",
    image: "https://images.unsplash.com/photo-1541807084-5c52b6b3adef?w=100&h=100&fit=crop"
  },
  {
    id: 3,
    item: "Louis Vuitton Neverfull",
    tickets: 1,
    amount: 1000,
    status: "won",
    wonDate: "2024-01-15",
    image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=100&h=100&fit=crop"
  },
  {
    id: 4,
    item: "PlayStation 5 Pro",
    tickets: 2,
    amount: 2000,
    status: "refunded",
    refundAmount: 1700,
    image: "https://images.unsplash.com/photo-1606813907291-d86efa9b94db?w=100&h=100&fit=crop"
  }
]

export default function DashboardPage({ user }: DashboardProps) {
  const [activeTab, setActiveTab] = useState('overview')

  if (!user) {
    return (
      <div className="min-h-screen bg-dark flex items-center justify-center">
        <div className="text-center">
          <div className="text-6xl mb-4">🔒</div>
          <h2 className="text-2xl font-bold text-white mb-4">Sign In Required</h2>
          <p className="text-gray-400 mb-6">You need to sign in to view your dashboard</p>
          <button
            onClick={() => window.location.href = '/'}
            className="bg-gradient-to-r from-primary to-accent text-dark px-6 py-3 rounded-lg font-bold hover:shadow-lg hover:shadow-primary/25 transition-all"
          >
            Go Home
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-dark py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-white mb-2">
            Welcome back, {user.email?.split('@')[0] || 'Winner'}! 👋
          </h1>
          <p className="text-xl text-gray-300">
            Track your tickets, wins, and refunds all in one place
          </p>
        </div>

        {/* Stats Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6 mb-8">
          <div className="bg-dark-secondary rounded-xl p-6 border border-gray-800">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-gradient-to-r from-primary to-accent rounded-lg flex items-center justify-center">
                <TrendingUp className="w-6 h-6 text-dark" />
              </div>
            </div>
            <div className="text-2xl font-bold text-white mb-1">
              PKR {mockStats.totalSpent.toLocaleString()}
            </div>
            <div className="text-gray-400 text-sm">Total Spent</div>
          </div>

          <div className="bg-dark-secondary rounded-xl p-6 border border-gray-800">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-green-400 rounded-lg flex items-center justify-center">
                <Trophy className="w-6 h-6 text-white" />
              </div>
            </div>
            <div className="text-2xl font-bold text-white mb-1">{mockStats.totalWon}</div>
            <div className="text-gray-400 text-sm">Items Won</div>
          </div>

          <div className="bg-dark-secondary rounded-xl p-6 border border-gray-800">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-400 rounded-lg flex items-center justify-center">
                <Ticket className="w-6 h-6 text-white" />
              </div>
            </div>
            <div className="text-2xl font-bold text-white mb-1">{mockStats.activeTickets}</div>
            <div className="text-gray-400 text-sm">Active Tickets</div>
          </div>

          <div className="bg-dark-secondary rounded-xl p-6 border border-gray-800">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-purple-400 rounded-lg flex items-center justify-center">
                <RefreshCw className="w-6 h-6 text-white" />
              </div>
            </div>
            <div className="text-2xl font-bold text-white mb-1">
              PKR {mockStats.pendingRefunds.toLocaleString()}
            </div>
            <div className="text-gray-400 text-sm">Pending Refunds</div>
          </div>

          <div className="bg-dark-secondary rounded-xl p-6 border border-gray-800">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-gradient-to-r from-yellow-500 to-yellow-400 rounded-lg flex items-center justify-center">
                <Gift className="w-6 h-6 text-white" />
              </div>
            </div>
            <div className="text-2xl font-bold text-white mb-1">{mockStats.winRate}%</div>
            <div className="text-gray-400 text-sm">Win Rate</div>
          </div>
        </div>

        {/* Tabs */}
        <div className="bg-dark-secondary rounded-xl border border-gray-800 mb-8">
          <div className="flex border-b border-gray-800">
            {[
              { id: 'overview', label: 'Overview' },
              { id: 'active', label: 'Active Campaigns' },
              { id: 'history', label: 'History' },
              { id: 'wins', label: 'My Wins' }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-6 py-4 font-medium transition-colors ${
                  activeTab === tab.id
                    ? 'text-primary border-b-2 border-primary'
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          <div className="p-6">
            {activeTab === 'overview' && (
              <div className="space-y-6">
                <h3 className="text-xl font-bold text-white">Recent Activity</h3>
                <div className="space-y-4">
                  {mockPurchases.slice(0, 3).map((purchase) => (
                    <div key={purchase.id} className="flex items-center space-x-4 p-4 bg-dark rounded-lg border border-gray-800">
                      <img
                        src={purchase.image}
                        alt={purchase.item}
                        className="w-16 h-16 rounded-lg object-cover"
                      />
                      <div className="flex-1">
                        <h4 className="font-bold text-white">{purchase.item}</h4>
                        <p className="text-gray-400 text-sm">
                          {purchase.tickets} ticket{purchase.tickets > 1 ? 's' : ''} • PKR {purchase.amount.toLocaleString()}
                        </p>
                      </div>
                      <div className="text-right">
                        <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                          purchase.status === 'won' ? 'bg-green-900 text-green-300' :
                          purchase.status === 'active' ? 'bg-blue-900 text-blue-300' :
                          'bg-gray-900 text-gray-300'
                        }`}>
                          {purchase.status === 'won' ? '🏆 Won' :
                           purchase.status === 'active' ? '⏳ Active' :
                           '💰 Refunded'}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'active' && (
              <div className="space-y-6">
                <h3 className="text-xl font-bold text-white">Active Campaigns</h3>
                <div className="space-y-4">
                  {mockPurchases.filter(p => p.status === 'active').map((purchase) => (
                    <div key={purchase.id} className="flex items-center space-x-4 p-4 bg-dark rounded-lg border border-gray-800">
                      <img
                        src={purchase.image}
                        alt={purchase.item}
                        className="w-16 h-16 rounded-lg object-cover"
                      />
                      <div className="flex-1">
                        <h4 className="font-bold text-white">{purchase.item}</h4>
                        <p className="text-gray-400 text-sm">
                          {purchase.tickets} ticket{purchase.tickets > 1 ? 's' : ''} • PKR {purchase.amount.toLocaleString()}
                        </p>
                      </div>
                      <div className="text-right">
                        <div className="text-primary font-bold">{purchase.timeLeft}</div>
                        <div className="text-gray-400 text-sm">remaining</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'history' && (
              <div className="space-y-6">
                <h3 className="text-xl font-bold text-white">Purchase History</h3>
                <div className="space-y-4">
                  {mockPurchases.map((purchase) => (
                    <div key={purchase.id} className="flex items-center space-x-4 p-4 bg-dark rounded-lg border border-gray-800">
                      <img
                        src={purchase.image}
                        alt={purchase.item}
                        className="w-16 h-16 rounded-lg object-cover"
                      />
                      <div className="flex-1">
                        <h4 className="font-bold text-white">{purchase.item}</h4>
                        <p className="text-gray-400 text-sm">
                          {purchase.tickets} ticket{purchase.tickets > 1 ? 's' : ''} • PKR {purchase.amount.toLocaleString()}
                        </p>
                      </div>
                      <div className="text-right">
                        <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                          purchase.status === 'won' ? 'bg-green-900 text-green-300' :
                          purchase.status === 'active' ? 'bg-blue-900 text-blue-300' :
                          'bg-gray-900 text-gray-300'
                        }`}>
                          {purchase.status === 'won' ? '🏆 Won' :
                           purchase.status === 'active' ? '⏳ Active' :
                           '💰 Refunded'}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'wins' && (
              <div className="space-y-6">
                <h3 className="text-xl font-bold text-white">My Wins 🏆</h3>
                <div className="space-y-4">
                  {mockPurchases.filter(p => p.status === 'won').map((purchase) => (
                    <div key={purchase.id} className="flex items-center space-x-4 p-4 bg-gradient-to-r from-green-900/20 to-green-800/20 rounded-lg border border-green-500/30">
                      <img
                        src={purchase.image}
                        alt={purchase.item}
                        className="w-16 h-16 rounded-lg object-cover"
                      />
                      <div className="flex-1">
                        <h4 className="font-bold text-white">{purchase.item}</h4>
                        <p className="text-green-300 text-sm">
                          Won on {purchase.wonDate} • {purchase.tickets} ticket{purchase.tickets > 1 ? 's' : ''}
                        </p>
                      </div>
                      <div className="text-right">
                        <div className="text-green-400 font-bold text-2xl">🏆</div>
                      </div>
                    </div>
                  ))}
                  {mockPurchases.filter(p => p.status === 'won').length === 0 && (
                    <div className="text-center py-8">
                      <div className="text-6xl mb-4">🎯</div>
                      <h4 className="text-xl font-bold text-white mb-2">No wins yet</h4>
                      <p className="text-gray-400">Keep playing - your big win is coming!</p>
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}