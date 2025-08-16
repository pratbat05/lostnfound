import React, { useState } from 'react';
import {
  Search, Plus, MessageCircle, Clock, User, BookOpen, AlertCircle, CheckCircle, X, 
  Star, Heart, ShoppingBag, Users, Shield, Zap, Filter
} from 'lucide-react';

// Background Lines Component (simplified version of Aceternity UI)
const BackgroundLines = ({ children, className = "" }) => (
  <div className={`relative overflow-hidden ${className}`}>
    <div className="absolute inset-0 opacity-20">
      <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="1" className="text-neutral-200 dark:text-neutral-800"/>
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid)" />
      </svg>
    </div>
    <div className="relative z-10">
      {children}
    </div>
  </div>
);

// Landing Page Component
const LandingPage = ({ onEnterApp }) => (
  <div className="min-h-screen bg-white dark:bg-neutral-950">
    {/* Hero Section */}
    <BackgroundLines className="flex items-center justify-center w-full flex-col px-4 py-20">
      <div className="text-center max-w-4xl mx-auto">
        <div className="inline-flex items-center gap-2 bg-neutral-100 dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 rounded-full px-4 py-2 mb-8">
          <Star className="h-4 w-4 text-blue-600" />
          <span className="text-sm font-medium text-neutral-700 dark:text-neutral-300">Welcome to College Hub</span>
        </div>
        
        <h1 className="bg-clip-text text-transparent text-center bg-gradient-to-b from-neutral-900 to-neutral-700 dark:from-neutral-600 dark:to-white text-4xl md:text-6xl lg:text-7xl font-sans py-2 md:py-6 relative z-20 font-bold tracking-tight">
          Your Campus <br /> Marketplace
        </h1>
        
        <p className="max-w-2xl mx-auto text-lg md:text-xl text-neutral-700 dark:text-neutral-400 text-center mb-12 leading-relaxed">
          Buy, sell, lend, and find lost items within your college community. 
          Connect with fellow students in a safe and trusted environment.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
          <button 
            onClick={onEnterApp}
            className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors duration-200 flex items-center gap-2 justify-center"
          >
            <ShoppingBag className="h-5 w-5" />
            Enter Marketplace
          </button>
          <button className="px-8 py-4 bg-white hover:bg-neutral-50 border border-neutral-200 text-neutral-900 rounded-lg font-medium transition-colors duration-200 flex items-center gap-2 justify-center">
            <BookOpen className="h-5 w-5" />
            Learn More
          </button>
        </div>
        
        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          <div className="bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-xl p-6 text-center">
            <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center mx-auto mb-4">
              <BookOpen className="h-6 w-6 text-blue-600" />
            </div>
            <h3 className="font-semibold text-neutral-900 dark:text-neutral-100 mb-2">Textbooks</h3>
            <p className="text-sm text-neutral-600 dark:text-neutral-400">Find affordable textbooks from seniors</p>
          </div>
          <div className="bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-xl p-6 text-center">
            <div className="w-12 h-12 bg-green-100 dark:bg-green-900/30 rounded-lg flex items-center justify-center mx-auto mb-4">
              <Search className="h-6 w-6 text-green-600" />
            </div>
            <h3 className="font-semibold text-neutral-900 dark:text-neutral-100 mb-2">Lost & Found</h3>
            <p className="text-sm text-neutral-600 dark:text-neutral-400">Recover your lost belongings</p>
          </div>
          <div className="bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-xl p-6 text-center">
            <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/30 rounded-lg flex items-center justify-center mx-auto mb-4">
              <Users className="h-6 w-6 text-purple-600" />
            </div>
            <h3 className="font-semibold text-neutral-900 dark:text-neutral-100 mb-2">Community</h3>
            <p className="text-sm text-neutral-600 dark:text-neutral-400">Connect with fellow students</p>
          </div>
        </div>
      </div>
    </BackgroundLines>
    
    {/* Features Section */}
    <section className="py-20 bg-neutral-50 dark:bg-neutral-900">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 dark:text-neutral-100 mb-4">
            Why Choose College Hub?
          </h2>
          <p className="text-lg text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto">
            Built specifically for college students, by college students. Safe, simple, and trusted.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900/30 rounded-xl flex items-center justify-center mx-auto mb-6">
              <Shield className="h-8 w-8 text-blue-600" />
            </div>
            <h3 className="font-semibold text-lg text-neutral-900 dark:text-neutral-100 mb-3">Safe & Secure</h3>
            <p className="text-neutral-600 dark:text-neutral-400">College email verification ensures you're only dealing with fellow students</p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-green-100 dark:bg-green-900/30 rounded-xl flex items-center justify-center mx-auto mb-6">
              <Zap className="h-8 w-8 text-green-600" />
            </div>
            <h3 className="font-semibold text-lg text-neutral-900 dark:text-neutral-100 mb-3">Quick & Easy</h3>
            <p className="text-neutral-600 dark:text-neutral-400">Post items in seconds and connect with buyers instantly</p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-purple-100 dark:bg-purple-900/30 rounded-xl flex items-center justify-center mx-auto mb-6">
              <Users className="h-8 w-8 text-purple-600" />
            </div>
            <h3 className="font-semibold text-lg text-neutral-900 dark:text-neutral-100 mb-3">Campus Community</h3>
            <p className="text-neutral-600 dark:text-neutral-400">Build connections and help your fellow students</p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-orange-100 dark:bg-orange-900/30 rounded-xl flex items-center justify-center mx-auto mb-6">
              <Heart className="h-8 w-8 text-orange-600" />
            </div>
            <h3 className="font-semibold text-lg text-neutral-900 dark:text-neutral-100 mb-3">Student Friendly</h3>
            <p className="text-neutral-600 dark:text-neutral-400">No fees, no hassle - just students helping students</p>
          </div>
        </div>
      </div>
    </section>
    
    {/* CTA Section */}
    <section className="py-20 bg-white dark:bg-neutral-950">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <div className="bg-neutral-50 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-2xl p-12">
          <h2 className="text-3xl font-bold text-neutral-900 dark:text-neutral-100 mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-lg text-neutral-600 dark:text-neutral-400 mb-8">
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
      datePosted: "1 day ago",
      image: "🔧"
    },
    {
      id: 3,
      title: "Physics for Engineers - Serway",
      category: "Books",
      type: "borrow",
      price: 0,
      condition: "Any",
      seller: "Mike T.",
      contact: "mike.t@college.edu",
      description: "Need for final exam preparation. Will return in 2 weeks.",
      datePosted: "3 hours ago",
      image: "📖"
    }
  ]);
  
  const [lostFoundItems, setLostFoundItems] = useState([
    {
      id: 1,
      title: "Black HP Laptop",
      type: "lost",
      location: "Engineering Building Room 205",
      dateReported: "2024-07-23",
      reportedBy: "Alex P.",
      contact: "alex.p@college.edu",
      description: "Black HP Pavilion laptop with engineering stickers. Contains important project files.",
      status: "active",
      threads: [
        { id: 1, author: "Alex P.", message: "Lost during morning lecture, contains important project files.", timestamp: "2 days ago" },
        { id: 2, author: "Building Security", message: "Checked with maintenance staff, no laptop found in room. Will continue monitoring.", timestamp: "1 day ago" }
      ]
    },
    {
      id: 2,
      title: "Red Scientific Calculator",
      type: "found",
      location: "Library Study Room 3B",
      dateReported: "2024-07-24",
      reportedBy: "Emma L.",
      contact: "emma.l@college.edu",
      description: "TI-84 Plus CE in red case, found on study desk.",
      status: "active",
      threads: [
        { id: 1, author: "Emma L.", message: "Found this calculator in study room. Currently keeping it safe.", timestamp: "1 day ago" }
      ]
    }
  ]);
  
  const [filters, setFilters] = useState({
    marketplace: { category: 'all', type: 'all', priceRange: 'all', condition: 'all' },
    lostfound: { type: 'all', status: 'all', location: 'all' }
  });
  const [searchTerm, setSearchTerm] = useState('');
  const [newThread, setNewThread] = useState('');

  // Show landing page first
  if (showLanding) {
    return <LandingPage onEnterApp={() => setShowLanding(false)} />;
  }

  // Filtering logic
  const filteredMarketplaceItems = marketplaceItems.filter(item => {
    const matchesSearch = item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = filters.marketplace.category === 'all' || item.category === filters.marketplace.category;
    const matchesType = filters.marketplace.type === 'all' || item.type === filters.marketplace.type;
    const matchesCondition = filters.marketplace.condition === 'all' || item.condition === filters.marketplace.condition;
    let matchesPrice = true;
    if (filters.marketplace.priceRange !== 'all') {
      const price = item.price;
      switch (filters.marketplace.priceRange) {
        case 'free': matchesPrice = price === 0; break;
        case 'under25': matchesPrice = price > 0 && price < 25; break;
        case '25to50': matchesPrice = price >= 25 && price <= 50; break;
        case 'over50': matchesPrice = price > 50; break;
        default: matchesPrice = true;
      }
    }
    return matchesSearch && matchesCategory && matchesType && matchesCondition && matchesPrice;
  });
  
  const filteredLostFoundItems = lostFoundItems.filter(item => {
    const matchesSearch = item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesType = filters.lostfound.type === 'all' || item.type === filters.lostfound.type;
    const matchesStatus = filters.lostfound.status === 'all' || item.status === filters.lostfound.status;
    return matchesSearch && matchesType && matchesStatus;
  });

  // Add item logic
  const handleAddItem = (formData) => {
    if (activeTab === 'marketplace') {
      const newItem = {
        id: marketplaceItems.length + 1,
        ...formData,
        seller: "You",
        datePosted: "Just now",
        image: formData.category === 'Books' ? '📚' : '🔧'
      };
      setMarketplaceItems([newItem, ...marketplaceItems]);
    } else {
      const newItem = {
        id: lostFoundItems.length + 1,
        ...formData,
        reportedBy: "You",
        dateReported: new Date().toISOString().split('T')[0],
        status: "active",
        threads: [{
          id: 1,
          author: "You",
          message: formData.description,
          timestamp: "Just now"
        }]
      };
      setLostFoundItems([newItem, ...lostFoundItems]);
    }
    setShowAddModal(false);
  };

  // Add thread logic
  const handleAddThread = () => {
    if (newThread.trim() && selectedItem) {
      const updatedItems = lostFoundItems.map(item => {
        if (item.id === selectedItem.id) {
          return {
            ...item,
            threads: [...item.threads, {
              id: item.threads.length + 1,
              author: "You",
              message: newThread,
              timestamp: "Just now"
            }]
          };
        }
        return item;
      });
      setLostFoundItems(updatedItems);
      setSelectedItem({
        ...selectedItem,
        threads: [...selectedItem.threads, {
          id: selectedItem.threads.length + 1,
          author: "You",
          message: newThread,
          timestamp: "Just now"
        }]
      });
      setNewThread('');
    }
  };

  // Reset filters
  const resetFilters = () => setFilters({
    marketplace: { category: 'all', type: 'all', priceRange: 'all', condition: 'all' },
    lostfound: { type: 'all', status: 'all', location: 'all' }
  });

  return (
    <div className="min-h-screen bg-neutral-50 dark:bg-neutral-950">
      {/* Header */}
      <header className="sticky top-0 z-30 bg-white/80 dark:bg-neutral-950/80 backdrop-blur-lg border-b border-neutral-200 dark:border-neutral-800">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center">
                <BookOpen className="h-6 w-6 text-blue-600" />
              </div>
              <h1 className="text-2xl font-bold text-neutral-900 dark:text-neutral-100">
                College Hub
              </h1>
            </div>
            
            <div className="flex items-center gap-4">
              <button
                onClick={() => setActiveTab('marketplace')}
                className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                  activeTab === 'marketplace'
                    ? 'bg-blue-600 text-white'
                    : 'text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100'
                }`}
              >
                Marketplace
              </button>
              <button
                onClick={() => setActiveTab('lostfound')}
                className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                  activeTab === 'lostfound'
                    ? 'bg-blue-600 text-white'
                    : 'text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100'
                }`}
              >
                Lost & Found
              </button>
            </div>
          </div>
        </div>
      </header>
      
      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* Search and Filters */}
        <div className="mb-8 bg-white dark:bg-neutral-900 rounded-xl p-6 border border-neutral-200 dark:border-neutral-800">
          <div className="flex flex-col lg:flex-row gap-4 items-stretch lg:items-center">
            {/* Search */}
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-neutral-400" />
              <input
                type="text"
                placeholder={`Search ${activeTab === 'marketplace' ? 'marketplace items' : 'lost & found items'}...`}
                className="w-full pl-10 pr-4 py-3 bg-neutral-50 dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 rounded-lg text-neutral-900 dark:text-neutral-100 placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            
            {/* Filter Toggle */}
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="px-4 py-3 bg-neutral-100 dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 rounded-lg text-neutral-700 dark:text-neutral-300 hover:bg-neutral-200 dark:hover:bg-neutral-700 transition-colors flex items-center gap-2"
            >
              <Filter className="h-4 w-4" />
              Filters
            </button>
            
            {/* Add Button */}
            <button
              onClick={() => setShowAddModal(true)}
              className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors flex items-center gap-2 whitespace-nowrap"
            >
              <Plus className="h-5 w-5" />
              Add {activeTab === 'marketplace' ? 'Item' : 'Report'}
            </button>
          </div>
          
          {/* Expandable Filters */}
          {showFilters && (
            <div className="mt-6 pt-6 border-t border-neutral-200 dark:border-neutral-700">
              <div className="flex flex-wrap gap-4">
                {activeTab === 'marketplace' ? (
                  <>
                    <FilterSelect
                      label="Category"
                      options={[
                        { value: 'all', label: 'All Categories' },
                        { value: 'Books', label: 'Books' },
                        { value: 'Tools', label: 'Tools' }
                      ]}
                      value={filters.marketplace.category}
                      onChange={val => setFilters({ ...filters, marketplace: { ...filters.marketplace, category: val } })}
                    />
                    <FilterSelect
                      label="Type"
                      options={[
                        { value: 'all', label: 'All Types' },
                        { value: 'sell', label: 'For Sale' },
                        { value: 'lend', label: 'For Lending' },
                        { value: 'borrow', label: 'Want to Borrow' }
                      ]}
                      value={filters.marketplace.type}
                      onChange={val => setFilters({ ...filters, marketplace: { ...filters.marketplace, type: val } })}
                    />
                    <FilterSelect
                      label="Price"
                      options={[
                        { value: 'all', label: 'All Prices' },
                        { value: 'free', label: 'Free' },
                        { value: 'under25', label: 'Under $25' },
                        { value: '25to50', label: '$25 - $50' },
                        { value: 'over50', label: 'Over $50' }
                      ]}
                      value={filters.marketplace.priceRange}
                      onChange={val => setFilters({ ...filters, marketplace: { ...filters.marketplace, priceRange: val } })}
                    />
                    <FilterSelect
                      label="Condition"
                      options={[
                        { value: 'all', label: 'All Conditions' },
                        { value: 'Excellent', label: 'Excellent' },
                        { value: 'Good', label: 'Good' },
                        { value: 'Fair', label: 'Fair' },
                        { value: 'Any', label: 'Any' }
                      ]}
                      value={filters.marketplace.condition}
                      onChange={val => setFilters({ ...filters, marketplace: { ...filters.marketplace, condition: val } })}
                    />
                  </>
                ) : (
                  <>
                    <FilterSelect
                      label="Type"
                      options={[
                        { value: 'all', label: 'All Items' },
                        { value: 'lost', label: 'Lost Items' },
                        { value: 'found', label: 'Found Items' }
                      ]}
                      value={filters.lostfound.type}
                      onChange={val => setFilters({ ...filters, lostfound: { ...filters.lostfound, type: val } })}
                    />
                    <FilterSelect
                      label="Status"
                      options={[
                        { value: 'all', label: 'All Status' },
                        { value: 'active', label: 'Active' },
                        { value: 'resolved', label: 'Resolved' }
                      ]}
                      value={filters.lostfound.status}
                      onChange={val => setFilters({ ...filters, lostfound: { ...filters.lostfound, status: val } })}
                    />
                  </>
                )}
                <button
                  onClick={resetFilters}
                  className="px-4 py-2 text-sm bg-neutral-100 dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 rounded-lg text-neutral-700 dark:text-neutral-300 hover:bg-neutral-200 dark:hover:bg-neutral-700 transition-colors"
                >
                  Reset
                </button>
              </div>
            </div>
          )}
        </div>
        
        {/* Content */}
        {activeTab === 'marketplace' ? (
          <MarketplaceGrid items={filteredMarketplaceItems} />
        ) : (
          <LostFoundGrid
            items={filteredLostFoundItems}
            onViewThreads={(item) => {
              setSelectedItem(item);
              setShowThreadModal(true);
            }}
          />
        )}
      </div>
      
      {/* Add Item Modal */}
      {showAddModal && (
        <AddItemModal
          activeTab={activeTab}
          onClose={() => setShowAddModal(false)}
          onSubmit={handleAddItem}
        />
      )}
      
      {/* Thread Modal */}
      {showThreadModal && selectedItem && (
        <ThreadModal
          item={selectedItem}
          onClose={() => setShowThreadModal(false)}
          newThread={newThread}
          setNewThread={setNewThread}
          onAddThread={handleAddThread}
        />
      )}
    </div>
  );
};

// Filter Select Component
const FilterSelect = ({ label, options, value, onChange }) => (
  <div className="flex flex-col gap-1">
    <label className="text-xs font-medium text-neutral-500 dark:text-neutral-400">{label}</label>
    <select
      className="px-3 py-2 bg-neutral-50 dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 rounded-lg text-sm text-neutral-900 dark:text-neutral-100 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
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
      <div className="col-span-full text-center py-16 text-neutral-500 dark:text-neutral-400">
        <div className="text-6xl mb-4">🔍</div>
        <div className="text-xl font-medium">No items found</div>
        <div className="text-sm mt-2">Try adjusting your filters</div>
      </div>
    )}
    {items.map(item => (
      <div key={item.id} className="bg-white dark:bg-neutral-900 rounded-xl p-6 border border-neutral-200 dark:border-neutral-800 hover:border-neutral-300 dark:hover:border-neutral-700 transition-colors">
        <div className="flex items-start justify-between mb-4">
          <div className="text-3xl">{item.image}</div>
          <div className={`px-3 py-1 text-xs rounded-full font-medium ${
            item.type === 'sell' ? 'bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400' :
            item.type === 'lend' ? 'bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400' :
            'bg-orange-100 dark:bg-orange-900/30 text-orange-700 dark:text-orange-400'
          }`}>
            {item.type === 'sell' ? 'For Sale' : item.type === 'lend' ? 'For Lending' : 'Want to Borrow'}
          </div>
