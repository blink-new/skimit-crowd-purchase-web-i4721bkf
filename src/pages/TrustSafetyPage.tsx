import { Shield, Lock, Eye, CheckCircle, Award, Users, FileText, Phone } from 'lucide-react'

export default function TrustSafetyPage() {
  return (
    <div className="min-h-screen bg-dark py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-white mb-6">Trust & Safety</h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Your security and trust are our top priorities. Here's how we keep Skimit safe, 
            transparent, and fair for everyone.
          </p>
        </div>

        {/* Security Features */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white text-center mb-8">Security Features</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-dark-secondary rounded-xl p-8 border border-gray-800">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-green-400 rounded-full flex items-center justify-center mb-6">
                <Lock className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Secure Payments</h3>
              <p className="text-gray-300 mb-4">
                All payments are processed through bank-grade encryption. We never store your 
                payment information on our servers.
              </p>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  <span>256-bit SSL encryption</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  <span>PCI DSS compliant</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  <span>Secure payment gateways</span>
                </li>
              </ul>
            </div>

            <div className="bg-dark-secondary rounded-xl p-8 border border-gray-800">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-400 rounded-full flex items-center justify-center mb-6">
                <Eye className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Transparent Draws</h3>
              <p className="text-gray-300 mb-4">
                Every draw is conducted using verifiable random number generation. 
                You can verify the results yourself.
              </p>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-blue-400" />
                  <span>Public draw recordings</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-blue-400" />
                  <span>Cryptographic verification</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-blue-400" />
                  <span>Third-party auditing</span>
                </li>
              </ul>
            </div>

            <div className="bg-dark-secondary rounded-xl p-8 border border-gray-800">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-purple-400 rounded-full flex items-center justify-center mb-6">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Data Protection</h3>
              <p className="text-gray-300 mb-4">
                Your personal information is protected with industry-leading security measures 
                and strict privacy policies.
              </p>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-purple-400" />
                  <span>GDPR compliant</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-purple-400" />
                  <span>Regular security audits</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-purple-400" />
                  <span>Minimal data collection</span>
                </li>
              </ul>
            </div>

            <div className="bg-dark-secondary rounded-xl p-8 border border-gray-800">
              <div className="w-16 h-16 bg-gradient-to-r from-yellow-500 to-yellow-400 rounded-full flex items-center justify-center mb-6">
                <Award className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Authentic Prizes</h3>
              <p className="text-gray-300 mb-4">
                All prizes are sourced from authorized dealers and come with proof of authenticity 
                and manufacturer warranties.
              </p>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-yellow-400" />
                  <span>Authorized dealer network</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-yellow-400" />
                  <span>Authenticity certificates</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-yellow-400" />
                  <span>Full manufacturer warranties</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Policies */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white text-center mb-8">Our Policies</h2>
          <div className="space-y-6">
            <div className="bg-dark-secondary rounded-xl p-8 border border-gray-800">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-r from-primary to-accent rounded-lg flex items-center justify-center flex-shrink-0">
                  <FileText className="w-6 h-6 text-dark" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Fair Play Policy</h3>
                  <p className="text-gray-300">
                    We maintain strict fair play standards. Any attempt to manipulate campaigns, 
                    use bots, or engage in fraudulent activity results in immediate account suspension 
                    and forfeiture of tickets.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-dark-secondary rounded-xl p-8 border border-gray-800">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-r from-primary to-accent rounded-lg flex items-center justify-center flex-shrink-0">
                  <Shield className="w-6 h-6 text-dark" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Refund Policy</h3>
                  <p className="text-gray-300">
                    If a campaign doesn't reach its minimum ticket threshold, all participants 
                    receive an 85% refund automatically within 3 business days. The 15% covers 
                    payment processing fees and platform operational costs.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-dark-secondary rounded-xl p-8 border border-gray-800">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-r from-primary to-accent rounded-lg flex items-center justify-center flex-shrink-0">
                  <Users className="w-6 h-6 text-dark" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Age Verification</h3>
                  <p className="text-gray-300">
                    Skimit is only available to users 18 years and older. We verify age during 
                    account creation and may request additional verification for high-value wins.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-dark-secondary rounded-xl p-8 border border-gray-800">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-r from-primary to-accent rounded-lg flex items-center justify-center flex-shrink-0">
                  <Lock className="w-6 h-6 text-dark" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Privacy Policy</h3>
                  <p className="text-gray-300">
                    We collect only the minimum information necessary to operate the platform. 
                    Your data is never sold to third parties and is protected with bank-grade security.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Certifications */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white text-center mb-8">Certifications & Compliance</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-dark-secondary rounded-xl p-6 border border-gray-800 text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-green-400 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">ISO 27001</h3>
              <p className="text-gray-300 text-sm">
                Information Security Management System certification
              </p>
            </div>

            <div className="bg-dark-secondary rounded-xl p-6 border border-gray-800 text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-400 rounded-full flex items-center justify-center mx-auto mb-4">
                <Lock className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">PCI DSS</h3>
              <p className="text-gray-300 text-sm">
                Payment Card Industry Data Security Standard compliant
              </p>
            </div>

            <div className="bg-dark-secondary rounded-xl p-6 border border-gray-800 text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-purple-400 rounded-full flex items-center justify-center mx-auto mb-4">
                <FileText className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">GDPR</h3>
              <p className="text-gray-300 text-sm">
                General Data Protection Regulation compliant
              </p>
            </div>
          </div>
        </div>

        {/* Contact */}
        <div className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-xl p-8 border border-primary/20">
          <div className="text-center">
            <Phone className="w-16 h-16 text-primary mx-auto mb-4" />
            <h2 className="text-3xl font-bold text-white mb-4">Need Help?</h2>
            <p className="text-xl text-gray-300 mb-6">
              Our support team is available 24/7 to help with any questions or concerns
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:support@skimit.com"
                className="bg-gradient-to-r from-primary to-accent text-dark px-6 py-3 rounded-lg font-bold hover:shadow-lg hover:shadow-primary/25 transition-all"
              >
                Email Support
              </a>
              <a
                href="tel:+92-300-1234567"
                className="border-2 border-primary text-primary px-6 py-3 rounded-lg font-bold hover:bg-primary hover:text-dark transition-all"
              >
                Call Us
              </a>
            </div>
            <p className="text-gray-400 text-sm mt-4">
              Average response time: Under 2 hours
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}