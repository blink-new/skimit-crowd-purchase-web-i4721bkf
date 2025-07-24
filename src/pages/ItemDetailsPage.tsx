import { useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { Clock, Users, Shield, ArrowLeft, Plus, Minus } from 'lucide-react'

// Mock data - in real app this would come from API
const mockItem = {
  id: 1,
  title: "iPhone 15 Pro Max",
  images: [
    "https://images.unsplash.com/photo-1695048133142-1a20484d2569?w=800&h=800&fit=crop",
    "https://images.unsplash.com/photo-1695048133142-1a20484d2569?w=800&h=800&fit=crop",
    "https://images.unsplash.com/photo-1695048133142-1a20484d2569?w=800&h=800&fit=crop"
  ],
  value: "PKR 450,000",
  ticketPrice: "PKR 1,000",
  ticketsSold: 320,
  totalTickets: 450,
  timeLeft: "2d 14h 32m",
  category: "Electronics",
  description: "Brand new iPhone 15 Pro Max 256GB in Natural Titanium. Includes original box, charger, and 1-year Apple warranty.",
  features: [
    "256GB Storage",
    "Natural Titanium Color",
    "A17 Pro Chip",
    "Pro Camera System",
    "1-Year Apple Warranty"
  ]
}

export default function ItemDetailsPage() {
  const { id } = useParams()
  const [selectedImage, setSelectedImage] = useState(0)
  const [ticketQuantity, setTicketQuantity] = useState(1)
  const [showPurchaseModal, setShowPurchaseModal] = useState(false)

  const progressPercentage = Math.round((mockItem.ticketsSold / mockItem.totalTickets) * 100)
  const remainingTickets = mockItem.totalTickets - mockItem.ticketsSold

  const handlePurchase = () => {
    setShowPurchaseModal(true)
  }

  return (
    <div className="min-h-screen bg-dark py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Button */}
        <Link
          to="/browse"
          className="inline-flex items-center space-x-2 text-gray-300 hover:text-primary transition-colors mb-8"
        >
          <ArrowLeft className="w-5 h-5" />
          <span>Back to Browse</span>
        </Link>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Image Gallery */}
          <div>
            <div className="mb-4">
              <img
                src={mockItem.images[selectedImage]}
                alt={mockItem.title}
                className="w-full h-96 object-cover rounded-xl"
              />
            </div>
            <div className="flex space-x-4">
              {mockItem.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`w-20 h-20 rounded-lg overflow-hidden border-2 transition-all ${
                    selectedImage === index ? 'border-primary' : 'border-gray-700'
                  }`}
                >
                  <img src={image} alt="" className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </div>

          {/* Item Details */}
          <div>
            <div className="mb-6">
              <span className="bg-gradient-to-r from-primary to-accent text-dark px-3 py-1 rounded-full text-sm font-bold">
                {mockItem.category}
              </span>
            </div>

            <h1 className="text-4xl font-bold text-white mb-4">{mockItem.title}</h1>
            
            <div className="flex items-center space-x-6 mb-6">
              <div>
                <div className="text-3xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  {mockItem.value}
                </div>
                <div className="text-sm text-gray-400">Prize Value</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-white">{mockItem.ticketPrice}</div>
                <div className="text-sm text-gray-400">Per Ticket</div>
              </div>
            </div>

            {/* Time Left */}
            <div className="bg-dark-secondary rounded-lg p-4 mb-6 border border-gray-800">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <Clock className="w-5 h-5 text-primary" />
                  <span className="text-white font-medium">Time Remaining</span>
                </div>
                <div className="text-2xl font-bold text-primary">{mockItem.timeLeft}</div>
              </div>
            </div>

            {/* Progress */}
            <div className="mb-6">
              <div className="flex justify-between items-center mb-2">
                <span className="text-white font-medium">Campaign Progress</span>
                <span className="text-primary font-bold">{progressPercentage}%</span>
              </div>
              <div className="w-full bg-gray-700 rounded-full h-3">
                <div
                  className="h-3 rounded-full bg-gradient-to-r from-primary to-accent transition-all duration-300"
                  style={{ width: `${progressPercentage}%` }}
                ></div>
              </div>
              <div className="flex justify-between items-center mt-2 text-sm text-gray-400">
                <span>{mockItem.ticketsSold} tickets sold</span>
                <span>{remainingTickets} remaining</span>
              </div>
            </div>

            {/* Ticket Purchase */}
            <div className="bg-dark-secondary rounded-lg p-6 mb-6 border border-gray-800">
              <h3 className="text-xl font-bold text-white mb-4">Buy Tickets</h3>
              
              <div className="flex items-center justify-between mb-4">
                <span className="text-gray-300">Number of tickets:</span>
                <div className="flex items-center space-x-3">
                  <button
                    onClick={() => setTicketQuantity(Math.max(1, ticketQuantity - 1))}
                    className="w-8 h-8 rounded-full bg-gray-700 flex items-center justify-center hover:bg-primary transition-colors"
                  >
                    <Minus className="w-4 h-4" />
                  </button>
                  <span className="text-xl font-bold text-white w-8 text-center">{ticketQuantity}</span>
                  <button
                    onClick={() => setTicketQuantity(ticketQuantity + 1)}
                    className="w-8 h-8 rounded-full bg-gray-700 flex items-center justify-center hover:bg-primary transition-colors"
                  >
                    <Plus className="w-4 h-4" />
                  </button>
                </div>
              </div>

              <div className="flex justify-between items-center mb-6">
                <span className="text-gray-300">Total cost:</span>
                <span className="text-2xl font-bold text-primary">
                  PKR {(1000 * ticketQuantity).toLocaleString()}
                </span>
              </div>

              <button
                onClick={handlePurchase}
                className="w-full bg-gradient-to-r from-primary to-accent text-dark py-4 rounded-lg font-bold text-lg hover:shadow-lg hover:shadow-primary/25 transition-all"
              >
                Buy {ticketQuantity} Ticket{ticketQuantity > 1 ? 's' : ''}
              </button>
            </div>

            {/* Guarantee */}
            <div className="bg-green-900/20 border border-green-500/30 rounded-lg p-4 mb-6">
              <div className="flex items-center space-x-2 mb-2">
                <Shield className="w-5 h-5 text-green-400" />
                <span className="text-green-400 font-bold">85% Refund Guarantee</span>
              </div>
              <p className="text-green-300 text-sm">
                If this campaign doesn't reach its target, you'll get 85% of your money back within 3 business days.
              </p>
            </div>
          </div>
        </div>

        {/* Description & Features */}
        <div className="mt-12 grid lg:grid-cols-2 gap-8">
          <div>
            <h3 className="text-2xl font-bold text-white mb-4">Description</h3>
            <p className="text-gray-300 leading-relaxed">{mockItem.description}</p>
          </div>
          
          <div>
            <h3 className="text-2xl font-bold text-white mb-4">Features</h3>
            <ul className="space-y-2">
              {mockItem.features.map((feature, index) => (
                <li key={index} className="flex items-center space-x-2 text-gray-300">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Purchase Modal */}
        {showPurchaseModal && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
            <div className="bg-dark-secondary rounded-xl p-8 max-w-md w-full border border-gray-800">
              <h3 className="text-2xl font-bold text-white mb-4">Complete Purchase</h3>
              <p className="text-gray-300 mb-6">
                You're about to buy {ticketQuantity} ticket{ticketQuantity > 1 ? 's' : ''} for {mockItem.title}
              </p>
              
              <div className="bg-dark rounded-lg p-4 mb-6 border border-gray-800">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-gray-300">Tickets:</span>
                  <span className="text-white">{ticketQuantity}</span>
                </div>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-gray-300">Price per ticket:</span>
                  <span className="text-white">PKR 1,000</span>
                </div>
                <div className="border-t border-gray-700 pt-2 mt-2">
                  <div className="flex justify-between items-center">
                    <span className="text-white font-bold">Total:</span>
                    <span className="text-primary font-bold text-xl">
                      PKR {(1000 * ticketQuantity).toLocaleString()}
                    </span>
                  </div>
                </div>
              </div>

              <div className="flex space-x-4">
                <button
                  onClick={() => setShowPurchaseModal(false)}
                  className="flex-1 bg-gray-700 text-white py-3 rounded-lg font-medium hover:bg-gray-600 transition-colors"
                >
                  Cancel
                </button>
                <button
                  onClick={() => {
                    // Handle payment logic here
                    alert('Payment integration would go here!')
                    setShowPurchaseModal(false)
                  }}
                  className="flex-1 bg-gradient-to-r from-primary to-accent text-dark py-3 rounded-lg font-bold hover:shadow-lg hover:shadow-primary/25 transition-all"
                >
                  Pay Now
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}