import { Link } from 'react-router-dom'
import { ArrowRight, Zap, Shield, Trophy, Star, Clock, Users } from 'lucide-react'

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-dark via-dark-secondary to-dark">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-accent/10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Win Big
              </span>
              <br />
              <span className="text-white">Pay Small</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Get tickets for PKR 1,000 and win cars, iPhones, designer bags & more. 
              If we don't hit the target, you get 85% back. It's that simple.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/browse"
                className="bg-gradient-to-r from-primary to-accent text-dark px-8 py-4 rounded-lg font-bold text-lg hover:shadow-lg hover:shadow-primary/25 transition-all flex items-center justify-center space-x-2"
              >
                <span>Browse Campaigns</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                to="/how-it-works"
                className="border-2 border-primary text-primary px-8 py-4 rounded-lg font-bold text-lg hover:bg-primary hover:text-dark transition-all"
              >
                How It Works
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-dark-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Why Choose Skimit?</h2>
            <p className="text-xl text-gray-300">Fair, transparent, and built for Gen Z</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-8 rounded-xl bg-dark border border-gray-800 hover:border-primary/50 transition-all">
              <div className="w-16 h-16 bg-gradient-to-r from-primary to-accent rounded-full flex items-center justify-center mx-auto mb-6">
                <Zap className="w-8 h-8 text-dark" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Lightning Fast</h3>
              <p className="text-gray-300">
                Instant ticket purchases, real-time updates, and quick draws. No waiting around.
              </p>
            </div>
            
            <div className="text-center p-8 rounded-xl bg-dark border border-gray-800 hover:border-primary/50 transition-all">
              <div className="w-16 h-16 bg-gradient-to-r from-primary to-accent rounded-full flex items-center justify-center mx-auto mb-6">
                <Shield className="w-8 h-8 text-dark" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">85% Refund Guarantee</h3>
              <p className="text-gray-300">
                If a campaign doesn't hit its target, you get 85% of your money back. No questions asked.
              </p>
            </div>
            
            <div className="text-center p-8 rounded-xl bg-dark border border-gray-800 hover:border-primary/50 transition-all">
              <div className="w-16 h-16 bg-gradient-to-r from-primary to-accent rounded-full flex items-center justify-center mx-auto mb-6">
                <Trophy className="w-8 h-8 text-dark" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Premium Prizes</h3>
              <p className="text-gray-300">
                Cars, latest iPhones, designer bags, and more. Only the best prizes make it to Skimit.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-2">
                50K+
              </div>
              <div className="text-gray-300">Happy Winners</div>
            </div>
            <div>
              <div className="text-4xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-2">
                ₨2.5M+
              </div>
              <div className="text-gray-300">Prizes Won</div>
            </div>
            <div>
              <div className="text-4xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-2">
                98%
              </div>
              <div className="text-gray-300">Success Rate</div>
            </div>
            <div>
              <div className="text-4xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-2">
                24/7
              </div>
              <div className="text-gray-300">Support</div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-dark-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">What Our Winners Say</h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-dark p-8 rounded-xl border border-gray-800">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-accent fill-current" />
                ))}
              </div>
              <p className="text-gray-300 mb-6">
                "Won an iPhone 15 Pro with just PKR 1,000! Couldn't believe it was real until it arrived. Skimit is legit! 🔥"
              </p>
              <div className="flex items-center">
                <div className="w-10 h-10 bg-gradient-to-r from-primary to-accent rounded-full flex items-center justify-center mr-3">
                  <span className="text-dark font-bold">A</span>
                </div>
                <div>
                  <div className="text-white font-semibold">Ahmed K.</div>
                  <div className="text-gray-400 text-sm">Karachi</div>
                </div>
              </div>
            </div>
            
            <div className="bg-dark p-8 rounded-xl border border-gray-800">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-accent fill-current" />
                ))}
              </div>
              <p className="text-gray-300 mb-6">
                "The transparency is amazing. You can see exactly how many tickets are sold. When my campaign didn't hit target, I got my refund in 2 days."
              </p>
              <div className="flex items-center">
                <div className="w-10 h-10 bg-gradient-to-r from-primary to-accent rounded-full flex items-center justify-center mr-3">
                  <span className="text-dark font-bold">S</span>
                </div>
                <div>
                  <div className="text-white font-semibold">Sara M.</div>
                  <div className="text-gray-400 text-sm">Lahore</div>
                </div>
              </div>
            </div>
            
            <div className="bg-dark p-8 rounded-xl border border-gray-800">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-accent fill-current" />
                ))}
              </div>
              <p className="text-gray-300 mb-6">
                "Been using Skimit for 6 months. Won a designer bag and got refunds when campaigns didn't work out. Fair platform! 💯"
              </p>
              <div className="flex items-center">
                <div className="w-10 h-10 bg-gradient-to-r from-primary to-accent rounded-full flex items-center justify-center mr-3">
                  <span className="text-dark font-bold">Z</span>
                </div>
                <div>
                  <div className="text-white font-semibold">Zain A.</div>
                  <div className="text-gray-400 text-sm">Islamabad</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary/10 to-accent/10">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Win Your Dream Prize?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Join thousands of winners who've turned PKR 1,000 into life-changing prizes
          </p>
          <Link
            to="/browse"
            className="bg-gradient-to-r from-primary to-accent text-dark px-8 py-4 rounded-lg font-bold text-lg hover:shadow-lg hover:shadow-primary/25 transition-all inline-flex items-center space-x-2"
          >
            <span>Start Winning Today</span>
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  )
}