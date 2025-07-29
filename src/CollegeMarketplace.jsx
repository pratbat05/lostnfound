import React, { useState } from 'react';
import {
  Search, Plus, MessageCircle, Clock, User, BookOpen, AlertCircle, CheckCircle, X, 
  Star, Heart, ShoppingBag, Users, Shield, Zap
} from 'lucide-react';

// Landing Page Component
const LandingPage = ({ onEnterApp }) => (
  <div className="min-h-screen bg-white" style={{ backgroundColor: '#F9FAF9' }}>
    {/* Hero Section */}
    <section className="py-20" style={{ background: 'linear-gradient(135deg, #FEFEFE 0%, #E8F5E8 50%, #F9FAF9 100%)' }}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 bg-white border border-gray-200 rounded-full px-6 py-2 mb-8" style={{ borderColor: '#E1EDE1' }}>
            <Star className="h-4 w-4" style={{ color: '#6EE76E' }} />
            <span className="text-sm font-medium" style={{ color: '#4A5D4C' }}>Welcome to College Hub</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight" style={{ color: '#2D3F2F', fontFamily: 'serif' }}>
            Your Campus
            <span className="block" style={{ color: '#6EE76E' }}>Marketplace</span>
          </h1>
          
          <p className="text-xl max-w-2xl mx-auto mb-12 leading-relaxed" style={{ color: '#4A5D4C' }}>
            Buy, sell, lend, and find lost items within your college community. 
            Connect with fellow students in a safe and trusted environment.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={onEnterApp}
              className="text-lg px-8 py-4 inline-flex items-center gap-3 text-white rounded-xl font-semibold transition-all duration-300 hover:transform hover:-translate-y-1"
              style={{ 
                background: 'linear-gradient(135deg, #6EE76E 0%, #4AE54A 100%)',
                boxShadow: '0 4px 15px rgba(110, 231, 110, 0.3)'
              }}
            >
              <ShoppingBag className="h-5 w-5" />
              Enter Marketplace
            </button>
            <button className="text-lg px-8 py-4 inline-flex items-center gap-3 bg-white border-2 rounded-xl font-medium transition-all duration-300 hover:transform hover:-translate-y-1" style={{ color: '#2D3F2F', borderColor: '#E1EDE1' }}>
              <BookOpen className="h-5 w-5" />
              Learn More
            </button>
          </div>
        </div>
        
        {/* Hero Features */}
        <div className="relative max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl p-8 border shadow-lg" style={{ borderColor: '#E1EDE1', boxShadow: '0 4px 20px rgba(110, 231, 110, 0.1)' }}>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center p-6 rounded-xl" style={{ backgroundColor: '#E8F5E8' }}>
                <div className="w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-4" style={{ backgroundColor: '#E8F5E8', border: '1px solid #E1EDE1' }}>
                  <BookOpen className="h-6 w-6" style={{ color: '#4AE54A' }} />
                </div>
                <h3 className="font-semibold mb-2" style={{ color: '#2D3F2F' }}>Textbooks</h3>
                <p className="text-sm" style={{ color: '#6B7D6D' }}>Find affordable textbooks from seniors</p>
              </div>
              <div className="text-center p-6 rounded-xl" style={{ backgroundColor: '#E8F5E8' }}>
                <div className="w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-4" style={{ backgroundColor: '#E8F5E8', border: '1px solid #E1EDE1' }}>
                  <Search className="h-6 w-6" style={{ color: '#4AE54A' }} />
                </div>
                <h3 className="font-semibold mb-2" style={{ color: '#2D3F2F' }}>Lost & Found</h3>
                <p className="text-sm" style={{ color: '#6B7D6D' }}>Recover your lost belongings</p>
              </div>
              <div className="text-center p-6 rounded-xl" style={{ backgroundColor: '#E8F5E8' }}>
                <div className="w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-4" style={{ backgroundColor: '#E8F5E8', border: '1px solid #E1EDE1' }}>
                  <Users className="h-6 w-6" style={{ color: '#4AE54A' }} />
                </div>
                <h3 className="font-semibold mb-2" style={{ color: '#2D3F2F' }}>Community</h3>
                <p className="text-sm" style={{ color: '#6B7D6D' }}>Connect with fellow students</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    
    {/* Features Section */}
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-6" style={{ color: '#2D3F2F', fontFamily: 'serif' }}>
            Why Choose College Hub?
          </h2>
          <p className="text-lg max-w-2xl mx-auto" style={{ color: '#4A5D4C' }}>
            Built specifically for college students, by college students. Safe, simple, and trusted.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-6" style={{ backgroundColor: '#E8F5E8', border: '1px solid #E1EDE1' }}>
              <Shield className="h-6 w-6" style={{ color: '#4AE54A' }} />
            </div>
            <h3 className="font-semibold text-lg mb-3" style={{ color: '#2D3F2F' }}>Safe & Secure</h3>
            <p style={{ color: '#6B7D6D' }}>College email verification ensures you're only dealing with fellow students</p>
          </div>
          
          <div className="text-center">
            <div className="w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-6" style={{ backgroundColor: '#E8F5E8', border: '1px solid #E1EDE1' }}>
              <Zap className="h-6 w-6" style={{ color: '#4AE54A' }} />
            </div>
            <h3 className="font-semibold text-lg mb-3" style={{ color: '#2D3F2F' }}>Quick & Easy</h3>
            <p style={{ color: '#6B7D6D' }}>Post items in seconds and connect with buyers instantly</p>
          </div>
          
          <div className="text-center">
            <div className="w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-6" style={{ backgroundColor: '#E8F5E8', border: '1px solid #E1EDE1' }}>
              <Users className="h-6 w-6" style={{ color: '#4AE54A' }} />
            </div>
            <h3 className="font-semibold text-lg mb-3" style={{ color: '#2D3F2F' }}>Campus Community</h3>
            <p style={{ color: '#6B7D6D' }}>Build connections and help your fellow students</p>
          </div>
          
          <div className="text-center">
            <div className="w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-6" style={{ backgroundColor: '#E8F5E8', border: '1px solid #E1EDE1' }}>
              <Heart className="h-6 w-6" style={{ color: '#4AE54A' }} />
            </div>
            <h3 className="font-semibold text-lg mb-3" style={{ color: '#2D3F2F' }}>Student Friendly</h3>
            <p style={{ color: '#6B7D6D' }}>No fees, no hassle - just students helping students</p>
          </div>
        </div>
      </div>
    </section>
    
    {/* CTA Section */}
    <section className="py-20">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <div className="bg-white rounded-2xl p-12 border shadow-lg" style={{ borderColor: '#E1EDE1', boxShadow: '0 4px 20px rgba(110, 231, 110, 0.1)' }}>
          <h2 className="text-3xl font-bold mb-6" style={{ color: '#2D3F2F', fontFamily: 'serif' }}>
            Ready to Get Started?
          </h2>
          <p className="text-lg mb-8" style={{ color: '#4A5D4C' }}>
            Join hundreds of students already using College Hub to buy, sell, and connect.
          </p>
          <button 
            onClick={onEnterApp}
            className="text-lg px-8 py-4 inline-flex items-center gap-3 text-white rounded-xl font-semibold transition-all duration-300 hover:transform hover:-translate-y-1"
            style={{ 
              background: 'linear-gradient(135deg, #6EE76E 0%, #4AE54A 100%)',
              boxShadow: '0 4px 15px rgba(110, 231, 110, 0.3)'
            }}
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
    <div className="min-h-screen" style={{ backgroundColor: '#F9FAF9' }}>
      {/* Header */}
      <header className="sticky top-0 z-30 bg-white border-b" style={{ 
        backgroundColor: 'rgba(254, 254, 254, 0.95)', 
        backdropFilter: 'blur(20px)',
        borderColor: '#E1EDE1'
      }}>
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ backgroundColor: '#E8F5E8', border: '1px solid #E1EDE1' }}>
                <BookOpen className="h-6 w-6" style={{ color: '#4AE54A' }} />
              </div>
              <h1 className="text-2xl font-bold" style={{ color: '#2D3F2F', fontFamily: 'serif' }}>
                College Hub
              </h1>
            </div>
            
            <div className="flex items-center gap-4">
              <button
                onClick={() => setActiveTab('marketplace')}
                className={`px-6 py-2 rounded-xl font-semibold transition-all duration-300 ${
                  activeTab === 'marketplace'
                    ? 'text-white shadow-lg'
                    : 'bg-white border-2 hover:transform hover:-translate-y-1'
                }`}
                style={activeTab === 'marketplace' ? 
                  { backgroundColor: '#6EE76E', boxShadow: '0 4px 20px rgba(110, 231, 110, 0.1)' } :
                  { color: '#2D3F2F', borderColor: '#E1EDE1' }
                }
              >
                Marketplace
              </button>
              <button
                onClick={() => setActiveTab('lostfound')}
                className={`px-6 py-2 rounded-xl font-semibold transition-all duration-300 ${
                  activeTab === 'lostfound'
                    ? 'text-white shadow-lg'
                    : 'bg-white border-2 hover:transform hover:-translate-y-1'
                }`}
                style={activeTab === 'lostfound' ? 
                  { backgroundColor: '#6EE76E', boxShadow: '0 4px 20px rgba(110, 231, 110, 0.1)' } :
                  { color: '#2D3F2F', borderColor: '#E1EDE1' }
                }
              >
                Lost & Found
              </button>
            </div>
          </div>
        </div>
      </header>
      
      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* Search and Filters */}
        <div className="mb-8 bg-white rounded-2xl p-8 border shadow-lg" style={{ borderColor: '#E1EDE1', boxShadow: '0 4px 20px rgba(110, 231, 110, 0.1)' }}>
          <div className="flex flex-col lg:flex-row gap-6 items-center">
            {/* Search */}
            <div className="flex-1 w-full relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5" style={{ color: '#6B7D6D' }} />
              <input
                type="text"
                placeholder={`Search ${activeTab === 'marketplace' ? 'marketplace items' : 'lost & found items'}...`}
                className="w-full pl-12 pr-4 py-3 border-2 rounded-xl font-medium transition-all duration-300 focus:outline-none focus:transform focus:scale-105"
                style={{ 
                  backgroundColor: '#FEFEFE',
                  borderColor: '#E1EDE1',
                  color: '#2D3F2F'
                }}
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                onFocus={(e) => {
                  e.target.style.borderColor = '#6EE76E';
                  e.target.style.backgroundColor = 'white';
                  e.target.style.boxShadow = '0 0 0 3px rgba(110, 231, 110, 0.1)';
                }}
                onBlur={(e) => {
                  e.target.style.borderColor = '#E1EDE1';
                  e.target.style.backgroundColor = '#FEFEFE';
                  e.target.style.boxShadow = 'none';
                }}
              />
            </div>
            
            {/* Filters */}
            <div className="flex flex-wrap gap-3 items-center">
              {activeTab === 'marketplace' ? (
                <>
                  <FilterPills
                    options={['all', 'Books', 'Tools']}
                    value={filters.marketplace.category}
                    onChange={val => setFilters({ ...filters, marketplace: { ...filters.marketplace, category: val } })}
                    label="Category"
                  />
                  <FilterPills
                    options={['all', 'sell', 'lend', 'borrow']}
                    value={filters.marketplace.type}
                    onChange={val => setFilters({ ...filters, marketplace: { ...filters.marketplace, type: val } })}
                    label="Type"
                    displayMap={{ all: 'All Types', sell: 'For Sale', lend: 'For Lending', borrow: 'Want to Borrow' }}
                  />
                  <FilterPills
                    options={['all', 'free', 'under25', '25to50', 'over50']}
                    value={filters.marketplace.priceRange}
                    onChange={val => setFilters({ ...filters, marketplace: { ...filters.marketplace, priceRange: val } })}
                    label="Price"
                    displayMap={{ all: 'All Prices', free: 'Free', under25: 'Under $25', '25to50': '$25 - $50', over50: 'Over $50' }}
                  />
                  <FilterPills
                    options={['all', 'Excellent', 'Good', 'Fair', 'Any']}
                    value={filters.marketplace.condition}
                    onChange={val => setFilters({ ...filters, marketplace: { ...filters.marketplace, condition: val } })}
                    label="Condition"
                  />
                </>
              ) : (
                <>
                  <FilterPills
                    options={['all', 'lost', 'found']}
                    value={filters.lostfound.type}
                    onChange={val => setFilters({ ...filters, lostfound: { ...filters.lostfound, type: val } })}
                    label="Type"
                    displayMap={{ all: 'All Items', lost: 'Lost Items', found: 'Found Items' }}
                  />
                  <FilterPills
                    options={['all', 'active', 'resolved']}
                    value={filters.lostfound.status}
                    onChange={val => setFilters({ ...filters, lostfound: { ...filters.lostfound, status: val } })}
                    label="Status"
                  />
                </>
              )}
              <button
                className="text-sm px-4 py-2 bg-white border-2 rounded-xl font-medium transition-all duration-300 hover:transform hover:-translate-y-1"
                style={{ color: '#2D3F2F', borderColor: '#E1EDE1' }}
                onClick={resetFilters}
              >
                Reset
              </button>
            </div>
            
            {/* Add Button */}
            <button
              onClick={() => setShowAddModal(true)}
              className="px-6 py-3 flex items-center gap-2 whitespace-nowrap text-white rounded-xl font-semibold transition-all duration-300 hover:transform hover:-translate-y-1"
              style={{ 
                background: 'linear-gradient(135deg, #6EE76E 0%, #4AE54A 100%)',
                boxShadow: '0 4px 15px rgba(110, 231, 110, 0.3)'
              }}
            >
              <Plus className="h-5 w-5" />
              Add {activeTab === 'marketplace' ? 'Item' : 'Report'}
            </button>
          </div>
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

// Filter Pills Component
const FilterPills = ({ options, value, onChange, label, displayMap }) => (
  <div className="flex gap-2 items-center flex-wrap">
    <span className="text-sm font-medium" style={{ color: '#4A5D4C' }}>{label}:</span>
    {options.map(opt => (
      <button
        key={opt}
        className={`px-4 py-2 rounded-full border-2 text-sm font-medium transition-all duration-300 ${
          value === opt ? 'text-white' : 'bg-white hover:transform hover:scale-105'
        }`}
        style={value === opt ? 
          { backgroundColor: '#6EE76E', borderColor: '#6EE76E' } :
          { color: '#4A5D4C', borderColor: '#E1EDE1' }
        }
        onClick={() => onChange(opt)}
      >
        {displayMap ? displayMap[opt] : opt.charAt(0).toUpperCase() + opt.slice(1)}
      </button>
    ))}
  </div>
);

// Marketplace Grid Component
const MarketplaceGrid = ({ items }) => (
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
    {items.length === 0 && (
      <div className="col-span-full text-center py-16" style={{ color: '#6B7D6D' }}>
        <div className="text-6xl mb-4">🔍</div>
        <div className="text-xl font-medium">No items found</div>
        <div className="text-sm mt-2">Try adjusting your filters</div>
      </div>
    )}
    {items.map(item => (
      <div key={item.id} className="bg-white rounded-2xl p-6 flex flex-col justify-between border shadow-lg transition-all duration-300 hover:transform hover:-translate-y-2" style={{ borderColor: '#E1EDE1', boxShadow: '0 4px 20px rgba(110, 231, 110, 0.1)' }}>
        <div className="flex items-start justify-between mb-4">
          <div className="text-3xl">{item.image}</div>
          <div className="px-3 py-1 text-xs rounded-full font-semibold uppercase tracking-wide border" style={
            item.type === 'sell' ? 
              { backgroundColor: '#E8F8E8', color: '#2D5A2D', borderColor: '#B8E6B8' } :
            item.type === 'lend' ? 
              { backgroundColor: '#E8F4F8', color: '#2D4A5A', borderColor: '#B8D4E6' } :
              { backgroundColor: '#F8F0E8', color: '#5A4A2D', borderColor: '#E6D4B8' }
          }>
            {item.type === 'sell' ? 'For Sale' : item.type === 'lend' ? 'For Lending' : 'Want to Borrow'}
          </div>
        </div>
        
        <h3 className="font-semibold text-lg leading-tight mb-3" style={{ color: '#2D3F2F' }}>
          {item.title}
        </h3>
        <p className="text-sm mb-4 leading-relaxed" style={{ color: '#4A5D4C' }}>
          {item.description}
        </p>
        
        <div className="space-y-3 text-sm mb-6">
          <div className="flex justify-between items-center">
            <span style={{ color: '#6B7D6D' }}>Category:</span>
            <span className="font-medium" style={{ color: '#2D3F2F' }}>{item.category}</span>
          </div>
          <div className="flex justify-between items-center">
            <span style={{ color: '#6B7D6D' }}>Price:</span>
            <span className="font-semibold" style={{ color: '#4AE54A' }}>
              {item.price === 0 ? 'Free' : `${item.price}`}
            </span>
          </div>
          <div className="flex justify-between items-center">
            <span style={{ color: '#6B7D6D' }}>Condition:</span>
            <span className="font-medium" style={{ color: '#2D3F2F' }}>{item.condition}</span>
          </div>
        </div>
        
        <div className="mt-auto pt-4 border-t" style={{ borderColor: '#E1EDE1' }}>
          <div className="flex items-center justify-between text-sm mb-4">
            <div className="flex items-center gap-2">
              <User className="h-4 w-4" style={{ color: '#6B7D6D' }} />
              <span className="font-medium" style={{ color: '#4A5D4C' }}>{item.seller}</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="h-4 w-4" style={{ color: '#6B7D6D' }} />
              <span className="text-xs" style={{ color: '#6B7D6D' }}>{item.datePosted}</span>
            </div>
          </div>
          <button className="w-full py-3 text-white rounded-xl font-semibold transition-all duration-300 hover:transform hover:-translate-y-1" style={{ 
            background: 'linear-gradient(135deg, #6EE76E 0%, #4AE54A 100%)',
            boxShadow: '0 4px 15px rgba(110, 231, 110, 0.3)'
          }}>
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
      <div className="text-center py-16" style={{ color: '#6B7D6D' }}>
        <div className="text-6xl mb-4">🔍</div>
        <div className="text-xl font-medium">No items found</div>
        <div className="text-sm mt-2">Try adjusting your filters</div>
      </div>
    )}
    {items.map(item => (
      <div key={item.id} className="bg-white rounded-2xl p-6 border shadow-lg transition-all duration-300 hover:transform hover:-translate-y-1" style={{ borderColor: '#E1EDE1', boxShadow: '0 4px 20px rgba(110, 231, 110, 0.1)' }}>
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-center gap-4">
            <div className={`w-12 h-12 rounded-xl flex items-center justify-center border ${
              item.type === 'lost' ? 'bg-red-50 border-red-200' : 'bg-green-50 border-green-200'
            }`}>
              {item.type === 'lost' ?
                <AlertCircle className="h-6 w-6 text-red-600" /> :
                <CheckCircle className="h-6 w-6 text-green-600" />
              }
            </div>
            <div>
              <h3 className="font-semibold text-xl mb-1" style={{ color: '#2D3F2F' }}>{item.title}</h3>
              <p className="text-sm font-medium" style={{ color: '#4A5D4C' }}>
                {item.type === 'lost' ? 'Lost' : 'Found'} by {item.reportedBy}
              </p>
            </div>
          </div>
          <div className="px-3 py-1 text-xs rounded-full font-semibold uppercase tracking-wide border" style={
            item.status === 'active' ? 
              { backgroundColor: '#FFF8E8', color: '#5A522D', borderColor: '#E6DEB8' } :
              { backgroundColor: '#F0F0F0', color: '#666666', borderColor: '#CCCCCC' }
          }>
            {item.status}
          </div>
        </div>
        
        <p className="mb-6 leading-relaxed" style={{ color: '#4A5D4C' }}>
          {item.description}
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm mb-6">
          <div className="p-3 rounded-lg" style={{ backgroundColor: '#E8F5E8' }}>
            <span className="font-medium block mb-1" style={{ color: '#6B7D6D' }}>Location:</span>
            <p className="font-semibold" style={{ color: '#2D3F2F' }}>{item.location}</p>
          </div>
          <div className="p-3 rounded-lg" style={{ backgroundColor: '#E8F5E8' }}>
            <span className="font-medium block mb-1" style={{ color: '#6B7D6D' }}>Date:</span>
            <p className="font-semibold" style={{ color: '#2D3F2F' }}>{item.dateReported}</p>
          </div>
          <div className="p-3 rounded-lg" style={{ backgroundColor: '#E8F5E8' }}>
            <span className="font-medium block mb-1" style={{ color: '#6B7D6D' }}>Contact:</span>
            <p className="font-semibold text-xs" style={{ color: '#2D3F2F' }}>{item.contact}</p>
          </div>
        </div>
        
        <div className="flex items-center justify-between pt-4 border-t" style={{ borderColor: '#E1EDE1' }}>
          <div className="flex items-center gap-3">
            <MessageCircle className="h-4 w-4" style={{ color: '#6B7D6D' }} />
            <span className="font-medium" style={{ color: '#4A5D4C' }}>
              {item.threads.length} update{item.threads.length !== 1 ? 's' : ''}
            </span>
          </div>
          <button
            onClick={() => onViewThreads(item)}
            className="px-6 py-2 text-white rounded-xl font-semibold transition-all duration-300 hover:transform hover:-translate-y-1"
            style={{ 
              background: 'linear-gradient(135deg, #6EE76E 0%, #4AE54A 100%)',
              boxShadow: '0 4px 15px rgba(110, 231, 110, 0.3)'
            }}
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
    <div className="fixed inset-0 flex items-center justify-center p-4 z-50" style={{ background: 'rgba(45, 63, 47, 0.4)', backdropFilter: 'blur(4px)' }}>
      <div className="max-w-lg w-full p-8 bg-white rounded-2xl border shadow-xl" style={{ borderColor: '#E1EDE1', boxShadow: '0 20px 60px rgba(110, 231, 110, 0.15)' }}>
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold" style={{ color: '#2D3F2F', fontFamily: 'serif' }}>
            Add {activeTab === 'marketplace' ? 'Item' : 'Report'}
          </h2>
          <button 
            onClick={onClose} 
            className="p-2 rounded-full transition-all duration-300 hover:transform hover:scale-110" 
            style={{ color: '#6B7D6D', backgroundColor: '#E8F5E8' }}
          >
            <X className="h-6 w-6" />
          </button>
        </div>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-semibold mb-2" style={{ color: '#2D3F2F' }}>Title</label>
            <input
              type="text"
              required
              className="w-full px-4 py-3 border-2 rounded-xl font-medium transition-all duration-300 focus:outline-none"
              style={{ 
                backgroundColor: '#FEFEFE',
                borderColor: '#E1EDE1',
                color: '#2D3F2F'
              }}
              value={formData.title}
              onChange={(e) => setFormData({ ...formData, title: e.target.value })}
              placeholder="Enter item title..."
              onFocus={(e) => {
                e.target.style.borderColor = '#6EE76E';
                e.target.style.backgroundColor = 'white';
                e.target.style.boxShadow = '0 0 0 3px rgba(110, 231, 110, 0.1)';
              }}
              onBlur={(e) => {
                e.target.style.borderColor = '#E1EDE1';
                e.target.style.backgroundColor = '#FEFEFE';
                e.target.style.boxShadow = 'none';
              }}
            />
          </div>
          
          <div>
            <label className="block text-sm font-semibold mb-2" style={{ color: '#2D3F2F' }}>Description</label>
            <textarea
              required
              rows={4}
              className="w-full px-4 py-3 border-2 rounded-xl font-medium transition-all duration-300 focus:outline-none resize-none"
              style={{ 
                backgroundColor: '#FEFEFE',
                borderColor: '#E1EDE1',
                color: '#2D3F2F'
              }}
              value={formData.description}
              onChange={(e) => setFormData({ ...formData, description: e.target.value })}
              placeholder="Describe your item..."
              onFocus={(e) => {
                e.target.style.borderColor = '#6EE76E';
                e.target.style.backgroundColor = 'white';
                e.target.style.boxShadow = '0 0 0 3px rgba(110, 231, 110, 0.1)';
              }}
              onBlur={(e) => {
                e.target.style.borderColor = '#E1EDE1';
                e.target.style.backgroundColor = '#FEFEFE';
                e.target.style.boxShadow = 'none';
              }}
            />
          </div>
          
          <div>
            <label className="block text-sm font-semibold mb-2" style={{ color: '#2D3F2F' }}>Contact Email</label>
            <input
              type="email"
              required
              className="w-full px-4 py-3 border-2 rounded-xl font-medium transition-all duration-300 focus:outline-none"
              style={{ 
                backgroundColor: '#FEFEFE',
                borderColor: '#E1EDE1',
                color: '#2D3F2F'
              }}
              value={formData.contact}
              onChange={(e) => setFormData({ ...formData, contact: e.target.value })}
              placeholder="your.email@college.edu"
              onFocus={(e) => {
                e.target.style.borderColor = '#6EE76E';
                e.target.style.backgroundColor = 'white';
                e.target.style.boxShadow = '0 0 0 3px rgba(110, 231, 110, 0.1)';
              }}
              onBlur={(e) => {
                e.target.style.borderColor = '#E1EDE1';
                e.target.style.backgroundColor = '#FEFEFE';
                e.target.style.boxShadow = 'none';
              }}
            />
          </div>
          
          {activeTab === 'marketplace' ? (
            <>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold mb-2" style={{ color: '#2D3F2F' }}>Category</label>
                  <select
                    className="w-full px-4 py-3 border-2 rounded-xl font-medium transition-all duration-300 focus:outline-none"
                    style={{ 
                      backgroundColor: '#FEFEFE',
                      borderColor: '#E1EDE1',
                      color: '#2D3F2F'
                    }}
                    value={formData.category}
                    onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                  >
                    <option value="Books">Books</option>
                    <option value="Tools">Tools</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-2" style={{ color: '#2D3F2F' }}>Type</label>
                  <select
                    className="w-full px-4 py-3 border-2 rounded-xl font-medium transition-all duration-300 focus:outline-none"
                    style={{ 
                      backgroundColor: '#FEFEFE',
                      borderColor: '#E1EDE1',
                      color: '#2D3F2F'
                    }}
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
                  <label className="block text-sm font-semibold mb-2" style={{ color: '#2D3F2F' }}>Price ($)</label>
                  <input
                    type="number"
                    min="0"
                    className="w-full px-4 py-3 border-2 rounded-xl font-medium transition-all duration-300 focus:outline-none"
                    style={{ 
                      backgroundColor: '#FEFEFE',
                      borderColor: '#E1EDE1',
                      color: '#2D3F2F'
                    }}
                    value={formData.price}
                    onChange={(e) => setFormData({ ...formData, price: e.target.value })}
                    placeholder="0 for free"
                    onFocus={(e) => {
                      e.target.style.borderColor = '#6EE76E';
                      e.target.style.backgroundColor = 'white';
                      e.target.style.boxShadow = '0 0 0 3px rgba(110, 231, 110, 0.1)';
                    }}
                    onBlur={(e) => {
                      e.target.style.borderColor = '#E1EDE1';
                      e.target.style.backgroundColor = '#FEFEFE';
                      e.target.style.boxShadow = 'none';
                    }}
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-2" style={{ color: '#2D3F2F' }}>Condition</label>
                  <select
                    className="w-full px-4 py-3 border-2 rounded-xl font-medium transition-all duration-300 focus:outline-none"
                    style={{ 
                      backgroundColor: '#FEFEFE',
                      borderColor: '#E1EDE1',
                      color: '#2D3F2F'
                    }}
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
                  <label className="block text-sm font-semibold mb-2" style={{ color: '#2D3F2F' }}>Type</label>
                  <select
                    className="w-full px-4 py-3 border-2 rounded-xl font-medium transition-all duration-300 focus:outline-none"
                    style={{ 
                      backgroundColor: '#FEFEFE',
                      borderColor: '#E1EDE1',
                      color: '#2D3F2F'
                    }}
                    value={formData.type}
                    onChange={(e) => setFormData({ ...formData, type: e.target.value })}
                  >
                    <option value="lost">Lost Item</option>
                    <option value="found">Found Item</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-2" style={{ color: '#2D3F2F' }}>Location</label>
                  <input
                    type="text"
                    required
                    className="w-full px-4 py-3 border-2 rounded-xl font-medium transition-all duration-300 focus:outline-none"
                    style={{ 
                      backgroundColor: '#FEFEFE',
                      borderColor: '#E1EDE1',
                      color: '#2D3F2F'
                    }}
                    value={formData.location}
                    onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                    placeholder="Where was it lost/found?"
                    onFocus={(e) => {
                      e.target.style.borderColor = '#6EE76E';
                      e.target.style.backgroundColor = 'white';
                      e.target.style.boxShadow = '0 0 0 3px rgba(110, 231, 110, 0.1)';
                    }}
                    onBlur={(e) => {
                      e.target.style.borderColor = '#E1EDE1';
                      e.target.style.backgroundColor = '#FEFEFE';
                      e.target.style.boxShadow = 'none';
                    }}
                  />
                </div>
              </div>
            </>
          )}
          
          <div className="flex gap-4 pt-6">
            <button
              type="button"
              onClick={onClose}
              className="flex-1 py-3 bg-white border-2 rounded-xl font-medium transition-all duration-300 hover:transform hover:-translate-y-1"
              style={{ color: '#2D3F2F', borderColor: '#E1EDE1' }}
            >
              Cancel
            </button>
            <button
              type="submit"
              className="flex-1 py-3 text-white rounded-xl font-semibold transition-all duration-300 hover:transform hover:-translate-y-1"
              style={{ 
                background: 'linear-gradient(135deg, #6EE76E 0%, #4AE54A 100%)',
                boxShadow: '0 4px 15px rgba(110, 231, 110, 0.3)'
              }}
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
  <div className="fixed inset-0 flex items-center justify-center p-4 z-50" style={{ background: 'rgba(45, 63, 47, 0.4)', backdropFilter: 'blur(4px)' }}>
    <div className="max-w-3xl w-full max-h-[85vh] overflow-hidden bg-white rounded-2xl border shadow-xl" style={{ borderColor: '#E1EDE1', boxShadow: '0 20px 60px rgba(110, 231, 110, 0.15)' }}>
      <div className="flex items-center justify-between p-8 border-b" style={{ borderColor: '#E1EDE1' }}>
        <h2 className="text-2xl font-bold" style={{ color: '#2D3F2F', fontFamily: 'serif' }}>
          {item.title} - Updates
        </h2>
        <button 
          onClick={onClose} 
          className="p-2 rounded-full transition-all duration-300 hover:transform hover:scale-110" 
          style={{ color: '#6B7D6D', backgroundColor: '#E8F5E8' }}
        >
          <X className="h-8 w-8" />
        </button>
      </div>
      
      <div className="p-8 overflow-y-auto max-h-96">
        <div className="space-y-4 mb-8">
          {item.threads.map(thread => (
            <div key={thread.id} className="rounded-xl p-6 border" style={{ backgroundColor: '#E8F5E8', borderColor: '#E1EDE1' }}>
              <div className="flex items-center justify-between mb-3">
                <span className="font-semibold" style={{ color: '#2D3F2F' }}>{thread.author}</span>
                <span className="text-sm" style={{ color: '#6B7D6D' }}>{thread.timestamp}</span>
              </div>
              <p className="leading-relaxed" style={{ color: '#4A5D4C' }}>{thread.message}</p>
            </div>
          ))}
        </div>
      </div>
      
      <div className="p-8 border-t" style={{ borderColor: '#E1EDE1' }}>
        <div className="flex gap-4">
          <input
            type="text"
            placeholder="Add an update..."
            className="flex-1 px-4 py-3 border-2 rounded-xl font-medium transition-all duration-300 focus:outline-none"
            style={{ 
              backgroundColor: '#FEFEFE',
              borderColor: '#E1EDE1',
              color: '#2D3F2F'
            }}
            value={newThread}
            onChange={(e) => setNewThread(e.target.value)}
            onFocus={(e) => {
              e.target.style.borderColor = '#6EE76E';
              e.target.style.backgroundColor = 'white';
              e.target.style.boxShadow = '0 0 0 3px rgba(110, 231, 110, 0.1)';
            }}
            onBlur={(e) => {
              e.target.style.borderColor = '#E1EDE1';
              e.target.style.backgroundColor = '#FEFEFE';
              e.target.style.boxShadow = 'none';
            }}
          />
          <button
            onClick={onAddThread}
            className="px-6 py-3 text-white rounded-xl font-semibold transition-all duration-300 hover:transform hover:-translate-y-1"
            style={{ 
              background: 'linear-gradient(135deg, #6EE76E 0%, #4AE54A 100%)',
              boxShadow: '0 4px 15px rgba(110, 231, 110, 0.3)'
            }}
          >
            Add Update
          </button>
        </div>
      </div>
    </div>
  </div>
);

export default CollegeMarketplace;
