import { Link } from 'react-router-dom'
import { Ticket, Clock, Trophy, Shield, ArrowRight, CheckCircle } from 'lucide-react'

export default function HowItWorksPage() {
  return (
    <div className="min-h-screen bg-dark py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-white mb-6">How Skimit Works</h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            It's simple, transparent, and fair. Here's exactly how you can win big with small tickets.
          </p>
        </div>

        {/* Steps */}
        <div className="space-y-16 mb-16">
          {/* Step 1 */}
          <div className="flex flex-col lg:flex-row items-center gap-8">
            <div className="lg:w-1/2">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-primary to-accent rounded-full flex items-center justify-center text-dark font-bold text-xl mr-4">
                  1
                </div>
                <h2 className="text-3xl font-bold text-white">Browse & Choose</h2>
              </div>
              <p className="text-gray-300 text-lg mb-6">
                Browse our curated selection of high-value items. From the latest iPhones to luxury cars, 
                we only feature prizes worth winning. Each campaign shows exactly how many tickets are 
                available and how much time is left.
              </p>
              <div className="flex items-center space-x-2 text-primary">
                <CheckCircle className="w-5 h-5" />
                <span>All items are brand new and authentic</span>
              </div>
            </div>
            <div className="lg:w-1/2">
              <div className="bg-dark-secondary rounded-xl p-8 border border-gray-800">
                <div className="flex items-center justify-between mb-4">
                  <Ticket className="w-8 h-8 text-primary" />
                  <span className="bg-gradient-to-r from-primary to-accent text-dark px-3 py-1 rounded-full text-sm font-bold">
                    Electronics
                  </span>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">iPhone 15 Pro Max</h3>
                <div className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-4">
                  PKR 450,000
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2 mb-2">
                  <div className="h-2 rounded-full bg-gradient-to-r from-primary to-accent w-3/4"></div>
                </div>
                <div className="flex justify-between text-sm text-gray-400">
                  <span>320 sold</span>
                  <span>450 total</span>
                </div>
              </div>
            </div>
          </div>

          {/* Step 2 */}
          <div className="flex flex-col lg:flex-row-reverse items-center gap-8">
            <div className="lg:w-1/2">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-primary to-accent rounded-full flex items-center justify-center text-dark font-bold text-xl mr-4">
                  2
                </div>
                <h2 className="text-3xl font-bold text-white">Buy Tickets</h2>
              </div>
              <p className="text-gray-300 text-lg mb-6">
                Each ticket costs just PKR 1,000. Buy as many as you want to increase your chances. 
                Payment is secure and instant. You'll see your tickets reflected immediately in the 
                campaign progress.
              </p>
              <div className="space-y-2">
                <div className="flex items-center space-x-2 text-primary">
                  <CheckCircle className="w-5 h-5" />
                  <span>Secure payment processing</span>
                </div>
                <div className="flex items-center space-x-2 text-primary">
                  <CheckCircle className="w-5 h-5" />
                  <span>Instant ticket confirmation</span>
                </div>
                <div className="flex items-center space-x-2 text-primary">
                  <CheckCircle className="w-5 h-5" />
                  <span>Real-time progress updates</span>
                </div>
              </div>
            </div>
            <div className="lg:w-1/2">
              <div className="bg-dark-secondary rounded-xl p-8 border border-gray-800">
                <h3 className="text-xl font-bold text-white mb-4">Buy Tickets</h3>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-gray-300">Number of tickets:</span>
                  <div className="flex items-center space-x-3">
                    <button className="w-8 h-8 rounded-full bg-gray-700 flex items-center justify-center">
                      <span className="text-white">-</span>
                    </button>
                    <span className="text-xl font-bold text-white">3</span>
                    <button className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
                      <span className="text-dark">+</span>
                    </button>
                  </div>
                </div>
                <div className="flex justify-between items-center mb-6">
                  <span className="text-gray-300">Total cost:</span>
                  <span className="text-2xl font-bold text-primary">PKR 3,000</span>
                </div>
                <button className="w-full bg-gradient-to-r from-primary to-accent text-dark py-3 rounded-lg font-bold">
                  Buy 3 Tickets
                </button>
              </div>
            </div>
          </div>

          {/* Step 3 */}
          <div className="flex flex-col lg:flex-row items-center gap-8">
            <div className="lg:w-1/2">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-primary to-accent rounded-full flex items-center justify-center text-dark font-bold text-xl mr-4">
                  3
                </div>
                <h2 className="text-3xl font-bold text-white">Win or Get Refunded</h2>
              </div>
              <p className="text-gray-300 text-lg mb-6">
                When the campaign reaches its ticket target, we hold a transparent draw. If you win, 
                the prize is shipped to you for free! If the campaign doesn't reach its target, 
                you get 85% of your money back automatically.
              </p>
              <div className="space-y-2">
                <div className="flex items-center space-x-2 text-green-400">
                  <Trophy className="w-5 h-5" />
                  <span>Free shipping on all prizes</span>
                </div>
                <div className="flex items-center space-x-2 text-green-400">
                  <Shield className="w-5 h-5" />
                  <span>85% refund guarantee</span>
                </div>
                <div className="flex items-center space-x-2 text-green-400">
                  <CheckCircle className="w-5 h-5" />
                  <span>Transparent, verifiable draws</span>
                </div>
              </div>
            </div>
            <div className="lg:w-1/2">
              <div className="bg-gradient-to-r from-green-900/20 to-green-800/20 rounded-xl p-8 border border-green-500/30">
                <div className="text-center">
                  <Trophy className="w-16 h-16 text-green-400 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-white mb-2">Congratulations!</h3>
                  <p className="text-green-300 mb-4">You won the iPhone 15 Pro Max!</p>
                  <div className="bg-dark rounded-lg p-4 mb-4">
                    <div className="text-sm text-gray-400 mb-1">Draw Date</div>
                    <div className="text-white font-bold">January 15, 2024</div>
                  </div>
                  <button className="bg-green-500 text-white px-6 py-2 rounded-lg font-bold">
                    Track Shipment
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Guarantees */}
        <div className="bg-dark-secondary rounded-xl p-8 mb-16 border border-gray-800">
          <h2 className="text-3xl font-bold text-white text-center mb-8">Our Guarantees</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-green-400 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">85% Refund</h3>
              <p className="text-gray-300">
                If a campaign doesn't reach its target, you get 85% of your money back within 3 business days.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-400 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Authentic Items</h3>
              <p className="text-gray-300">
                All prizes are brand new, authentic, and come with original warranties and packaging.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-purple-400 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Fast Delivery</h3>
              <p className="text-gray-300">
                Winners receive their prizes within 7-14 business days with free shipping across Pakistan.
              </p>
            </div>
          </div>
        </div>

        {/* FAQ */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white text-center mb-8">Frequently Asked Questions</h2>
          <div className="space-y-6">
            <div className="bg-dark-secondary rounded-lg p-6 border border-gray-800">
              <h3 className="text-xl font-bold text-white mb-2">What happens if a campaign doesn't reach its target?</h3>
              <p className="text-gray-300">
                You automatically get 85% of your money back. The 15% covers payment processing fees and platform costs. 
                Refunds are processed within 3 business days.
              </p>
            </div>
            
            <div className="bg-dark-secondary rounded-lg p-6 border border-gray-800">
              <h3 className="text-xl font-bold text-white mb-2">How are winners selected?</h3>
              <p className="text-gray-300">
                We use a transparent, verifiable random number generator. Each ticket gets a unique number, 
                and the winning number is drawn publicly. You can verify the draw results yourself.
              </p>
            </div>
            
            <div className="bg-dark-secondary rounded-lg p-6 border border-gray-800">
              <h3 className="text-xl font-bold text-white mb-2">Can I buy multiple tickets for the same item?</h3>
              <p className="text-gray-300">
                Yes! Buying more tickets increases your chances of winning. There's no limit to how many 
                tickets you can purchase for a single campaign.
              </p>
            </div>
            
            <div className="bg-dark-secondary rounded-lg p-6 border border-gray-800">
              <h3 className="text-xl font-bold text-white mb-2">Are the prizes really authentic?</h3>
              <p className="text-gray-300">
                Absolutely. We only source from authorized dealers and provide proof of authenticity. 
                All electronics come with manufacturer warranties, and luxury items include certificates of authenticity.
              </p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Start Winning?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Join thousands of winners who've turned PKR 1,000 into life-changing prizes
          </p>
          <Link
            to="/browse"
            className="bg-gradient-to-r from-primary to-accent text-dark px-8 py-4 rounded-lg font-bold text-lg hover:shadow-lg hover:shadow-primary/25 transition-all inline-flex items-center space-x-2"
          >
            <span>Browse Campaigns</span>
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </div>
  )
}