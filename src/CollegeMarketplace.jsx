import React, { useState } from 'react';
import {
  Search, Plus, MessageCircle, Clock, User, BookOpen, AlertCircle, CheckCircle, X, 
  Star, Heart, ShoppingBag, Users, Shield, Zap, Filter
} from 'lucide-react';
import { SparklesCore } from './components/ui/sparkles';

// Utility function for class merging
function cn(...inputs) {
  return inputs.filter(Boolean).join(' ');
}

// Landing Page Component with Sparkles
const LandingPage = ({ onEnterApp }) => (
  <div className="min-h-screen bg-black">
    {/* Hero Section with Sparkles */}
    <div className="relative h-screen w-full bg-black flex flex-col items-center justify-center overflow-hidden">
      {/* Main Content */}
      <div className="relative z-20 text-center px-4">
        <h1 className="text-5xl md:text-7xl lg:text-9xl font-bold text-white mb-6">
          College Hub
        </h1>
        <p className="text-xl md:text-2xl text-gray-300 mb-4">
          Your Campus Marketplace
        </p>
        <p className="max-w-xl mx-auto text-sm md:text-lg text-gray-400 mb-8">
          Buy, sell, lend, and find lost items within your college community. 
          Connect with fellow students in a safe and trusted environment.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
          <button 
            onClick={onEnterApp}
            className="px-8 py-4 bg-white text-black rounded-lg font-medium transition-all duration-200 hover:scale-105 flex items-center gap-2 justify-center"
          >
            <ShoppingBag className="h-5 w-5" />
            Enter Marketplace
          </button>
          <button className="px-8 py-4 bg-transparent border-2 border-white text-white rounded-lg font-medium transition-all duration-200 hover:bg-white hover:text-black flex items-center gap-2 justify-center">
            <BookOpen className="h-5 w-5" />
            Learn More
          </button>
        </div>
      </div>

      {/* Sparkles Effect */}
      <div className="w-full h-full absolute inset-0">
        {/* Gradient overlays */}
        <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm" />
        <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4" />
        <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm" />
        <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4" />

        {/* Sparkles Core Component */}
        <SparklesCore
          background="transparent"
          minSize={0.4}
          maxSize={1}
          particleDensity={1200}
          className="w-full h-full"
          particleColor="#FFFFFF"
        />

        {/* Radial Gradient mask */}
        <div className="absolute inset-0 w-full h-full bg-black [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]"></div>
      </div>
    </div>
    
    {/* Feature Cards Section */}
    <div className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white border border-gray-200 rounded-xl p-6 text-center shadow-sm">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
              <BookOpen className="h-6 w-6 text-blue-600" />
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">Textbooks</h3>
            <p className="text-sm text-gray-600">Find affordable textbooks from seniors</p>
          </div>
          <div className="bg-white border border-gray-200 rounded-xl p-6 text-center shadow-sm">
            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-4">
              <Search className="h-6 w-6 text-green-600" />
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">Lost & Found</h3>
            <p className="text-sm text-gray-600">Recover your lost belongings</p>
          </div>
          <div className="bg-white border border-gray-200 rounded-xl p-6 text-center shadow-sm">
            <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-4">
              <Users className="h-6 w-6 text-purple-600" />
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">Community</h3>
            <p className="text-sm text-gray-600">Connect with fellow students</p>
          </div>
        </div>
      </div>
    </div>
    
    {/* Features Section */}
    <section className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Why Choose College Hub?
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Built specifically for college students, by college students. Safe, simple, and trusted.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center mx-auto mb-6">
              <Shield className="h-8 w-8 text-blue-600" />
            </div>
            <h3 className="font-semibold text-lg text-gray-900 mb-3">Safe & Secure</h3>
            <p className="text-gray-600">College email verification ensures you're only dealing with fellow students</p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-green-100 rounded-xl flex items-center justify-center mx-auto mb-6">
              <Zap className="h-8 w-8 text-green-600" />
            </div>
            <h3 className="font-semibold text-lg text-gray-900 mb-3">Quick & Easy</h3>
            <p className="text-gray-600">Post items in seconds and connect with buyers instantly</p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-purple-100 rounded-xl flex items-center justify-center mx-auto mb-6">
              <Users className="h-8 w-8 text-purple-600" />
            </div>
            <h3 className="font-semibold text-lg text-gray-900 mb-3">Campus Community</h3>
            <p className="text-gray-600">Build connections and help your fellow students</p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-orange-100 rounded-xl flex items-center justify-center mx-auto mb-6">
              <Heart className="h-8 w-8 text-orange-600" />
            </div>
            <h3 className="font-semibold text-lg text-gray-900 mb-3">Student Friendly</h3>
            <p className="text-gray-600">No fees, no hassle - just students helping students</p>
          </div>
        </div>
      </div>
    </section>
    
    {/* CTA Section */}
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <div className="bg-gray-50 border border-gray-200 rounded-2xl p-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Join hundreds of students already using College Hub to buy, sell, and connect.
          </p>
          <button 
            onClick={onEnterApp}
            className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors duration-200 inline-flex items-center gap-2"
          >
            <ShoppingBag className="h-5 w-5" />
            Start Trading Now
          </button>
        </div>
      </div>
    </section>
  </div>
);

// Filter Select Component
const FilterSelect = ({ label, options, value, onChange }) => (
  <div className="flex flex-col gap-1">
    <label className="text-xs font-medium text-gray-500">{label}</label>
    <select
      className="px-3 py-2 bg-gray-50 border border-gray-200 rounded-lg text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
      value={value}
      onChange={(e) => onChange(e.target.value)}
    >
      {options.map(option => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  </div>
);

// Marketplace Grid Component
const MarketplaceGrid = ({ items }) => (
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
    {items.length === 0 && (
      <div className="col-span-full text-center py-16 text-gray-500">
        <div className="text-6xl mb-4">🔍</div>
        <div className="text-xl font-medium">No items found</div>
        <div className="text-sm mt-2">Try adjusting your filters</div>
      </div>
    )}
    {items.map(item => (
      <div key={item.id} className="bg-white rounded-xl p-6 border border-gray-200 hover:border-gray-300 transition-colors shadow-sm">
        <div className="flex items-start justify-between mb-4">
          <div className="text-3xl">{item.image}</div>
          <div className={`px-3 py-1 text-xs rounded-full font-medium ${
            item.type === 'sell' ? 'bg-green-100 text-green-700' :
            item.type === 'lend' ? 'bg-blue-100 text-blue-700' :
            'bg-orange-100 text-orange-700'
          }`}>
            {item.type === 'sell' ? 'For Sale' : item.type === 'lend' ? 'For Lending' : 'Want to Borrow'}
          </div>
        </div>
        
        <h3 className="font-semibold text-lg text-gray-900 mb-3">
          {item.title}
        </h3>
        <p className="text-sm text-gray-600 mb-4 line-clamp-2">
          {item.description}
        </p>
        
        <div className="space-y-2 text-sm mb-6">
          <div className="flex justify-between items-center">
            <span className="text-gray-500">Category:</span>
            <span className="font-medium text-gray-900">{item.category}</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-gray-500">Price:</span>
            <span className="font-semibold text-green-600">
              {item.price === 0 ? 'Free' : `$${item.price}`}
            </span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-gray-500">Condition:</span>
            <span className="font-medium text-gray-900">{item.condition}</span>
          </div>
        </div>
        
        <div className="mt-auto pt-4 border-t border-gray-200">
          <div className="flex items-center justify-between text-sm mb-4">
            <div className="flex items-center gap-2">
              <User className="h-4 w-4 text-gray-400" />
              <span className="text-gray-600">{item.seller}</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="h-4 w-4 text-gray-400" />
              <span className="text-gray-500">{item.datePosted}</span>
            </div>
          </div>
          <button className="w-full py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors">
            Contact Seller
          </button>
        </div>
      </div>
    ))}
  </div>
);

// Lost Found Grid Component
const LostFoundGrid = ({ items, onViewThreads }) => (
  <div className="space-y-6">
    {items.length === 0 && (
      <div className="text-center py-16 text-gray-500">
        <div className="text-6xl mb-4">🔍</div>
        <div className="text-xl font-medium">No items found</div>
        <div className="text-sm mt-2">Try adjusting your filters</div>
      </div>
    )}
    {items.map(item => (
      <div key={item.id} className="bg-white rounded-xl p-6 border border-gray-200 hover:border-gray-300 transition-colors shadow-sm">
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-center gap-4">
            <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${
              item.type === 'lost' ? 'bg-red-100' : 'bg-green-100'
            }`}>
              {item.type === 'lost' ?
                <AlertCircle className="h-6 w-6 text-red-600" /> :
                <CheckCircle className="h-6 w-6 text-green-600" />
              }
            </div>
            <div>
              <h3 className="font-semibold text-xl text-gray-900 mb-1">{item.title}</h3>
              <p className="text-sm text-gray-600">
                {item.type === 'lost' ? 'Lost' : 'Found'} by {item.reportedBy}
              </p>
            </div>
          </div>
          <div className={`px-3 py-1 text-xs rounded-full font-medium ${
            item.status === 'active' ? 
              'bg-yellow-100 text-yellow-700' :
              'bg-gray-100 text-gray-700'
          }`}>
            {item.status}
          </div>
        </div>
        
        <p className="mb-6 text-gray-700">
          {item.description}
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm mb-6">
          <div className="p-3 rounded-lg bg-gray-50">
            <span className="font-medium block mb-1 text-gray-500">Location:</span>
            <p className="font-semibold text-gray-900">{item.location}</p>
          </div>
          <div className="p-3 rounded-lg bg-gray-50">
            <span className="font-medium block mb-1 text-gray-500">Date:</span>
            <p className="font-semibold text-gray-900">{item.dateReported}</p>
          </div>
          <div className="p-3 rounded-lg bg-gray-50">
            <span className="font-medium block mb-1 text-gray-500">Contact:</span>
            <p className="font-semibold text-xs text-gray-900">{item.contact}</p>
          </div>
        </div>
        
        <div className="flex items-center justify-between pt-4 border-t border-gray-200">
          <div className="flex items-center gap-3">
            <MessageCircle className="h-4 w-4 text-gray-400" />
            <span className="text-gray-600">
              {item.threads.length} update{item.threads.length !== 1 ? 's' : ''}
            </span>
          </div>
          <button
            onClick={() => onViewThreads(item)}
            className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors"
          >
            View Updates
          </button>
        </div>
      </div>
    ))}
  </div>
);

// Add Item Modal Component
const AddItemModal = ({ activeTab, onClose, onSubmit }) => {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    contact: '',
    category: activeTab === 'marketplace' ? 'Books' : '',
    type: activeTab === 'marketplace' ? 'sell' : 'lost',
    price: '',
    condition: 'Good',
    location: ''
  });
  
  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({
      ...formData,
      price: activeTab === 'marketplace' ? parseInt(formData.price) || 0 : 0
    });
  };
  
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="max-w-lg w-full p-6 bg-white rounded-xl border border-gray-200 shadow-xl">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-gray-900">
            Add {activeTab === 'marketplace' ? 'Item' : 'Report'}
          </h2>
          <button 
            onClick={onClose} 
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
          >
            <X className="h-6 w-6 text-gray-500" />
          </button>
        </div>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Title</label>
            <input
              type="text"
              required
              className="w-full px-3 py-2 bg-gray-50 border border-gray-200 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              value={formData.title}
              onChange={(e) => setFormData({ ...formData, title: e.target.value })}
              placeholder="Enter item title..."
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Description</label>
            <textarea
              required
              rows={4}
              className="w-full px-3 py-2 bg-gray-50 border border-gray-200 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
              value={formData.description}
              onChange={(e) => setFormData({ ...formData, description: e.target.value })}
              placeholder="Describe your item..."
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Contact Email</label>
            <input
              type="email"
              required
              className="w-full px-3 py-2 bg-gray-50 border border-gray-200 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              value={formData.contact}
              onChange={(e) => setFormData({ ...formData, contact: e.target.value })}
              placeholder="your.email@college.edu"
            />
          </div>
          
          {activeTab === 'marketplace' ? (
            <>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Category</label>
                  <select
                    className="w-full px-3 py-2 bg-gray-50 border border-gray-200 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    value={formData.category}
                    onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                  >
                    <option value="Books">Books</option>
                    <option value="Tools">Tools</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Type</label>
                  <select
                    className="w-full px-3 py-2 bg-gray-50 border border-gray-200 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    value={formData.type}
                    onChange={(e) => setFormData({ ...formData, type: e.target.value })}
                  >
                    <option value="sell">For Sale</option>
                    <option value="lend">For Lending</option>
                    <option value="borrow">Want to Borrow</option>
                  </select>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Price ($)</label>
                  <input
                    type="number"
                    min="0"
                    className="w-full px-3 py-2 bg-gray-50 border border-gray-200 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    value={formData.price}
                    onChange={(e) => setFormData({ ...formData, price: e.target.value })}
                    placeholder="0 for free"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Condition</label>
                  <select
                    className="w-full px-3 py-2 bg-gray-50 border border-gray-200 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    value={formData.condition}
                    onChange={(e) => setFormData({ ...formData, condition: e.target.value })}
                  >
                    <option value="Excellent">Excellent</option>
                    <option value="Good">Good</option>
                    <option value="Fair">Fair</option>
                    <option value="Any">Any</option>
                  </select>
                </div>
              </div>
            </>
          ) : (
            <>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Type</label>
                  <select
                    className="w-full px-3 py-2 bg-gray-50 border border-gray-200 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    value={formData.type}
                    onChange={(e) => setFormData({ ...formData, type: e.target.value })}
                  >
                    <option value="lost">Lost Item</option>
                    <option value="found">Found Item</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Location</label>
                  <input
                    type="text"
                    required
                    className="w-full px-3 py-2 bg-gray-50 border border-gray-200 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    value={formData.location}
                    onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                    placeholder="Where was it lost/found?"
                  />
                </div>
              </div>
            </>
          )}
          
          <div className="flex gap-3 pt-4">
            <button
              type="button"
              onClick={onClose}
              className="flex-1 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-lg font-medium transition-colors"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="flex-1 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors"
            >
              Add {activeTab === 'marketplace' ? 'Item' : 'Report'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

// Thread Modal Component
const ThreadModal = ({ item, onClose, newThread, setNewThread, onAddThread }) => (
  <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
    <div className="max-w-3xl w-full max-h-[85vh] overflow-hidden bg-white rounded-xl border border-gray-200 shadow-xl">
      <div className="flex items-center justify-between p-6 border-b border-gray-200">
        <h2 className="text-2xl font-bold text-gray-900">
          {item.title} - Updates
        </h2>
        <button 
          onClick={onClose} 
          className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
        >
          <X className="h-6 w-6 text-gray-500" />
        </button>
      </div>
      
      <div className="p-6 overflow-y-auto max-h-96">
        <div className="space-y-4 mb-6">
          {item.threads.map(thread => (
            <div key={thread.id} className="bg-gray-50 rounded-lg p-4 border border-gray-200">
              <div className="flex items-center justify-between mb-3">
                <span className="font-medium text-gray-900">{thread.author}</span>
                <span className="text-sm text-gray-500">{thread.timestamp}</span>
              </div>
              <p className="text-gray-700">{thread.message}</p>
            </div>
          ))}
        </div>
      </div>
      
      <div className="p-6 border-t border-gray-200">
        <div className="flex gap-3">
          <input
            type="text"
            placeholder="Add an update..."
            className="flex-1 px-3 py-2 bg-gray-50 border border-gray-200 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            value={newThread}
            onChange={(e) => setNewThread(e.target.value)}
          />
          <button
            onClick={onAddThread}
            className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors"
          >
            Add Update
          </button>
        </div>
      </div>
    </div>
  </div>
);

// Main Marketplace Component  
const CollegeMarketplace = () => {
  const [showLanding, setShowLanding] = useState(true);
  const [activeTab, setActiveTab] = useState('marketplace');
  const [showAddModal, setShowAddModal] = useState(false);
  const [showThreadModal, setShowThreadModal] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const [showFilters, setShowFilters] = useState(false);
  const [marketplaceItems, setMarketplaceItems] = useState([
    {
      id: 1,
      title: "Calculus Textbook - Stewart 8th Edition",
      category: "Books",
      type: "sell",
      price: 45,
      condition: "Good",
      seller: "Emma D.",
      contact: "emma.doe@college.edu",
      description: "Barely used textbook, no highlighting. Perfect for engineering calculus courses.",
      datePosted: "2 days ago",
      image: "📚"
    },
    {
      id: 2,
      title: "Digital Multimeter Fluke 87V",
      category: "Tools",
      type: "lend",
      price: 15,
      condition: "Excellent",
      seller: "Sarah M.",
      contact: "sarah.m@college.edu",
      description: "Professional grade multimeter, perfect for electronics projects. Available for lending.",
      datePosted: "1
