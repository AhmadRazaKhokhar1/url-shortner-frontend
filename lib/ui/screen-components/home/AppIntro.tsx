// Icons
import { BiBarChart, BiCheckCircle, BiShield } from "react-icons/bi";
import { FiZap } from "react-icons/fi";

export default function AppIntro() {
  return <div className="space-y-8">
  <div className="text-center lg:text-left">
    <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-100 to-purple-100 rounded-full text-sm font-medium text-blue-800 mb-6">
      <FiZap className="w-4 h-4 mr-2" />
      Lightning Fast URL Shortening
    </div>
    <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
      Transform Long URLs into 
      <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent"> Tiny Links</span>
    </h1>
    <p className="text-xl text-gray-600 mb-8 leading-relaxed">
      Simplify your sharing experience with our powerful URL shortener. Create clean, memorable links that are perfect for social media, emails, and marketing campaigns.
    </p>
  </div>

  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
    <div className="flex items-start space-x-3 p-4 bg-white/60 backdrop-blur-sm rounded-xl border border-white/20">
      <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
        <FiZap className="w-5 h-5 text-blue-600" />
      </div>
      <div>
        <h3 className="font-semibold text-gray-900 mb-1">Lightning Fast</h3>
        <p className="text-sm text-gray-600">Generate short URLs in milliseconds</p>
      </div>
    </div>

    <div className="flex items-start space-x-3 p-4 bg-white/60 backdrop-blur-sm rounded-xl border border-white/20">
      <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
        <BiShield className="w-5 h-5 text-purple-600" />
      </div>
      <div>
        <h3 className="font-semibold text-gray-900 mb-1">Secure</h3>
        <p className="text-sm text-gray-600">Safe and reliable link protection</p>
      </div>
    </div>

    <div className="flex items-start space-x-3 p-4 bg-white/60 backdrop-blur-sm rounded-xl border border-white/20">
      <div className="w-10 h-10 bg-pink-100 rounded-lg flex items-center justify-center flex-shrink-0">
        <BiBarChart className="w-5 h-5 text-pink-600" />
      </div>
      <div>
        <h3 className="font-semibold text-gray-900 mb-1">Analytics</h3>
        <p className="text-sm text-gray-600">Track clicks and engagement</p>
      </div>
    </div>
  </div>

  <div className="bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 rounded-2xl p-6 border border-white/20">
    <h3 className="font-semibold text-gray-900 mb-3">Why Choose Tiny URL?</h3>
    <ul className="space-y-2 text-gray-600">
      <li className="flex items-center space-x-2">
        <BiCheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
        <span>Unlimited URL shortening</span>
      </li>
      <li className="flex items-center space-x-2">
        <BiCheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
        <span>Custom short links available</span>
      </li>
      <li className="flex items-center space-x-2">
        <BiCheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
        <span>Real-time click analytics</span>
      </li>
    </ul>
  </div>
</div>
};