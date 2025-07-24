import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { blink } from './blink/client'
import Navigation from './components/Navigation'
import HomePage from './pages/HomePage'
import BrowseItemsPage from './pages/BrowseItemsPage'
import ItemDetailsPage from './pages/ItemDetailsPage'
import DashboardPage from './pages/DashboardPage'
import HowItWorksPage from './pages/HowItWorksPage'
import TrustSafetyPage from './pages/TrustSafetyPage'

function App() {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const unsubscribe = blink.auth.onAuthStateChanged((state) => {
      setUser(state.user)
      setLoading(state.isLoading)
    })
    return unsubscribe
  }, [])

  if (loading) {
    return (
      <div className="min-h-screen bg-dark flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-primary border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-gray-400">Loading Skimit...</p>
        </div>
      </div>
    )
  }

  return (
    <Router>
      <div className="min-h-screen bg-dark text-white">
        <Navigation user={user} />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/browse" element={<BrowseItemsPage />} />
          <Route path="/item/:id" element={<ItemDetailsPage />} />
          <Route path="/dashboard" element={<DashboardPage user={user} />} />
          <Route path="/how-it-works" element={<HowItWorksPage />} />
          <Route path="/trust-safety" element={<TrustSafetyPage />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App