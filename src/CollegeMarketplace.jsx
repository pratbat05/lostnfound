import React, { useState } from 'react';
import {
  Search, Plus, MessageCircle, Clock, User, BookOpen, AlertCircle, CheckCircle, X, Heart, Star, Sparkles
} from 'lucide-react';

// Hero Section with enhanced girlie design
const HeroSection = () => (
  <section className="gradient-pastel py-16 mb-8 rounded-3xl shadow-cute relative overflow-hidden">
    <div className="absolute top-4 right-4 text-2xl animate-float">🌸</div>
    <div className="absolute bottom-4 left-4 text-2xl animate-float" style={{animationDelay: '1s'}}>💫</div>
    <div className="absolute top-8 left-1/4 text-xl animate-pulse-cute">✨</div>
    
    <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center gap-8">
      <div className="flex-1 text-center md:text-left">
        <h2 className="text-4xl md:text-5xl font-bold text-purple-700 mb-4 flex items-center justify-center md:justify-start gap-3 font-cute">
          <div className="p-3 bg-white/30 rounded-full shadow-cute">
            <BookOpen className="h-10 w-10 text-green-500" />
          </div>
          Welcome to College Hub
          <Heart className="h-8 w-8 text-pink-400 animate-pulse-cute" />
        </h2>
        <p className="text-xl text-purple-600 leading-relaxed font-medium">
          Your magical place to buy, sell, borrow & lend books and tools ✨ 
          <br />Find your lost treasures and help others too! 💝
        </p>
      </div>
      <div className="flex-shrink-0 relative">
        <div className="w-40 h-40 gradient-mint rounded-full flex items-center justify-center shadow-cute animate-float">
          <div className="text-6xl">📚</div>
        </div>
        <div className="absolute -top-2 -right-2 text-2xl animate-pulse-cute">🌟</div>
        <div className="absolute -bottom-2 -left-2 text-2xl animate-bounce">💖</div>
      </div>
    </div>
  </section>
);

const CollegeMarketplace = () => {
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
      seller: "Emma D. 🌸",
      contact: "emma.doe@college.edu",
      description: "Barely used, no highlighting! Perfect for engineering calculus. Comes with cute sticky notes! 💕",
      datePosted: "2 days ago",
      image: "📚",
      emoji: "✨"
    },
    {
      id: 2,
      title: "Digital Multimeter Fluke 87V",
      category: "Tools",
      type: "lend",
      price: 15,
      condition: "Excellent",
      seller: "Sarah M. 🦋",
      contact: "sarah.m@college.edu",
      description: "Professional grade multimeter, perfect for electronics projects! Lending with love 💝",
      datePosted: "1 day ago",
      image: "🔧",
      emoji: "⚡"
    },
    {
      id: 3,
      title: "Physics for Engineers - Serway",
      category: "Books",
      type: "borrow",
      price: 0,
      condition: "Any",
      seller: "Mike T. 🌟",
      contact: "mike.t@college.edu",
      description: "Need for final exam prep! Will return with grateful heart in 2 weeks 🙏",
      datePosted: "3 hours ago",
      image: "📖",
      emoji: "🎯"
    }
  ]);
  
  const [lostFoundItems, setLostFoundItems] = useState([
    {
      id: 1,
      title: "Black HP Laptop with Cute Stickers 💻",
      type: "lost",
      location: "Engineering Building Room 205",
      dateReported: "2024-07-23",
      reportedBy: "Alex P. 🌺",
      contact: "alex.p@college.edu",
      description: "Black HP Pavilion laptop with engineering stickers and some cute anime decals! Has important project files 😭",
      status: "active",
      threads: [
        { id: 1, author: "Alex P. 🌺", message: "Lost during morning lecture, has important project files and my heart is broken 💔", timestamp: "2 days ago" },
        { id: 2, author: "Building Security 👮", message: "Checked with janitor, no laptop found in room. Will keep looking! 🔍", timestamp: "1 day ago" }
      ]
    },
    {
      id: 2,
      title: "Red Scientific Calculator 🧮",
      type: "found",
      location: "Library Study Room 3B",
      dateReported: "2024-07-24",
      reportedBy: "Emma L. 🌸",
      contact: "emma.l@college.edu",
      description: "TI-84 Plus CE in red case, found on desk! It's safe with me 💕",
      status: "active",
      threads: [
        { id: 1, author: "Emma L. 🌸", message: "Found this precious calculator! Will keep it safe until someone claims it 🥰", timestamp: "1 day ago" }
      ]
    }
  ]);
  
  const [filters, setFilters] = useState({
    marketplace: { category: 'all', type: 'all', priceRange: 'all', condition: 'all' },
    lostfound: { type: 'all', status: 'all', location: 'all' }
  });
  const [searchTerm, setSearchTerm] = useState('');
  const [newThread, setNewThread] = useState('');

  // Filtering logic (same as before)
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
        seller: "You 🌟",
        datePosted: "Just now",
        image: formData.category === 'Books' ? '📚' : '🔧',
        emoji: formData.category === 'Books' ? '✨' : '⚡'
      };
      setMarketplaceItems([newItem, ...marketplaceItems]);
    } else {
      const newItem = {
        id: lostFoundItems.length + 1,
        ...formData,
        title: formData.title + (formData.type === 'lost' ? ' 😢' : ' 😊'),
        reportedBy: "You 🌟",
        dateReported: new Date().toISOString().split('T')[0],
        status: "active",
        threads: [{
          id: 1,
          author: "You 🌟",
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
              author: "You 🌟",
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
          author: "You 🌟",
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
    <div className="min-h-screen" style={{background: 'linear-gradient(135deg, #FFFBF7 0%, #F8FAFC 50%, #F3E8FF 100%)'}}>
      {/* Header */}
      <header className="glass-effect border-b-2 border-purple-200/30 sticky top-0 z-30 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <div className="flex items-center justify-between">
            <h1 className="text-3xl font-bold text-purple-700 tracking-tight flex items-center gap-3 font-cute">
              <div className="p-2 gradient-mint rounded-full shadow-cute">
                <BookOpen className="h-8 w-8 text-green-600" />
              </div>
              College Hub
              <Sparkles className="h-6 w-6 text-yellow-500 animate-pulse-cute" />
            </h1>
            <div className="flex space-x-2">
              <button
                onClick={() => setActiveTab('marketplace')}
                className={`px-6 py-3 rounded-2xl font-semibold transition-all duration-300 btn-cute relative ${
                  activeTab === 'marketplace'
                    ? 'gradient-mint text-green-700 shadow-cute transform scale-105'
                    : 'bg-white/50 text-purple-600 hover:bg-white/70 hover:scale-105 shadow-md'
                }`}
              >
                Marketplace 🛍️
                {activeTab === 'marketplace' && <div className="absolute -top-1 -right-1 text-lg">✨</div>}
              </button>
              <button
                onClick={() => setActiveTab('lostfound')}
                className={`px-6 py-3 rounded-2xl font-semibold transition-all duration-300 btn-cute relative ${
                  activeTab === 'lostfound'
                    ? 'gradient-lavender text-purple-700 shadow-cute transform scale-105'
                    : 'bg-white/50 text-purple-600 hover:bg-white/70 hover:scale-105 shadow-md'
                }`}
              >
                Lost & Found 🔍
                {activeTab === 'lostfound' && <div className="absolute -top-1 -right-1 text-lg">💫</div>}
              </button>
            </div>
          </div>
        </div>
      </header>
      
      <HeroSection />
      
      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* Search and Filters */}
        <div className="mb-8 glass-effect rounded-3xl shadow-cute p-8 border border-white/20">
          <div className="flex flex-col lg:flex-row gap-6 items-center">
            {/* Search */}
            <div className="flex-1 w-full relative">
              <div className="relative">
                <Search className="absolute left-4 top-4 h-5 w-5 text-purple-400" />
                <input
                  type="text"
                  placeholder={`Search for ${activeTab === 'marketplace' ? 'books and tools' : 'lost treasures'}... ✨`}
                  className="w-full pl-12 pr-4 py-4 border-2 border-purple-200/50 rounded-2xl focus:outline-none focus:border-purple-400 focus:ring-4 focus:ring-purple-200/30 bg-white/70 font-medium text-purple-700 placeholder:text-purple-400 input-cute transition-all duration-300"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
                <div className="absolute right-4 top-4 text-purple-400">🔍</div>
              </div>
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
                    colors="gradient-mint"
                  />
                  <FilterPills
                    options={['all', 'sell', 'lend', 'borrow']}
                    value={filters.marketplace.type}
                    onChange={val => setFilters({ ...filters, marketplace: { ...filters.marketplace, type: val } })}
                    label="Type"
                    displayMap={{ all: 'All Types', sell: 'For Sale 💰', lend: 'For Lending 🤝', borrow: 'Want to Borrow 🙏' }}
                    colors="gradient-lavender"
                  />
                  <FilterPills
                    options={['all', 'free', 'under25', '25to50', 'over50']}
                    value={filters.marketplace.priceRange}
                    onChange={val => setFilters({ ...filters, marketplace: { ...filters.marketplace, priceRange: val } })}
                    label="Price"
                    displayMap={{ all: 'All Prices', free: 'Free 🎁', under25: 'Under $25', '25to50': '$25 - $50', over50: 'Over $50' }}
                    colors="gradient-peach"
                  />
                  <FilterPills
                    options={['all', 'Excellent', 'Good', 'Fair', 'Any']}
                    value={filters.marketplace.condition}
                    onChange={val => setFilters({ ...filters, marketplace: { ...filters.marketplace, condition: val } })}
                    label="Condition"
                    colors="gradient-mint"
                  />
                </>
              ) : (
                <>
                  <FilterPills
                    options={['all', 'lost', 'found']}
                    value={filters.lostfound.type}
                    onChange={val => setFilters({ ...filters, lostfound: { ...filters.lostfound, type: val } })}
                    label="Type"
                    displayMap={{ all: 'All Items', lost: 'Lost Items 😢', found: 'Found Items 😊' }}
                    colors="gradient-lavender"
                  />
                  <FilterPills
                    options={['all', 'active', 'resolved']}
                    value={filters.lostfound.status}
                    onChange={val => setFilters({ ...filters, lostfound: { ...filters.lostfound, status: val } })}
                    label="Status"
                    colors="gradient-mint"
                  />
                </>
              )}
              <button
                className="ml-3 px-4 py-2 rounded-xl border-2 border-purple-200 text-purple-600 hover:bg-purple-50 hover:border-purple-300 transition-all duration-300 font-medium"
                onClick={resetFilters}
              >
                Reset ✨
              </button>
            </div>
            
            {/* Add Button */}
            <button
              onClick={() => setShowAddModal(true)}
              className="px-6 py-4 bg-gradient-to-r from-purple-500 to-green-400 text-white rounded-2xl hover:from-purple-600 hover:to-green-500 flex items-center gap-3 shadow-cute hover:shadow-cute-hover transform hover:scale-105 transition-all duration-300 font-semibold btn-cute relative overflow-hidden"
            >
              <Plus className="h-5 w-5" />
              Add {activeTab === 'marketplace' ? 'Item' : 'Report'}
              <Star className="h-4 w-4 animate-pulse-cute" />
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

// Enhanced Filter Pills Component
const FilterPills = ({ options, value, onChange, label, displayMap, colors = "gradient-mint" }) => (
  <div className="flex gap-2 items-center flex-wrap">
    <span className="text-sm text-purple-600 font-medium mr-2">{label}:</span>
    {options.map(opt => (
      <button
        key={opt}
        className={`px-4 py-2 rounded-full border-2 text-sm font-medium transition-all duration-300 btn-cute transform ${
          value === opt
            ? `${colors} text-purple-700 border-purple-300 shadow-cute scale-105`
            : 'bg-white/60 text-purple-600 border-purple-200 hover:bg-white/80 hover:scale-105 hover:border-purple-300'
        }`}
        onClick={() => onChange(opt)}
      >
        {displayMap ? displayMap[opt] : opt.charAt(0).toUpperCase() + opt.slice(1)}
        {value === opt && <span className="ml-1">✨</span>}
      </button>
    ))}
  </div>
);

// Enhanced Marketplace Grid Component
const MarketplaceGrid = ({ items }) => (
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
    {items.length === 0 && (
      <div className="col-span-full text-center text-purple-400 py-16 text-xl">
        <div className="text-6xl mb-4">🔍</div>
        <div className="font-medium">No magical items found yet...</div>
        <div className="text-sm mt-2">Try adjusting your filters! ✨</div>
      </div>
    )}
    {items.map(item => (
      <div
        key={item.id}
        className="glass-effect rounded-3xl shadow-cute hover:shadow-cute-hover card-cute p-8 flex flex-col justify-between border border-white/30 relative overflow-hidden group"
      >
        {/* Decorative elements */}
        <div className="absolute top-4 right-4 text-lg opacity-70 group-hover:animate-pulse-cute">
          {item.emoji}
        </div>
        
        <div className="flex items-start justify-between mb-6">
          <div className="text-4xl select-none p-3 bg-white/30 rounded-2xl shadow-md">
            {item.image}
          </div>
          <div className={`px-3 py-2 text-xs rounded-full font-semibold capitalize border-2 ${
            item.type === 'sell' ? 'bg-green-100/80 text-green-700 border-green-200' :
            item.type === 'lend' ? 'bg-blue-100/80 text-blue-700 border-blue-200' :
            'bg-orange-100/80 text-orange-700 border-orange-200'
          }`}>
            {item.type === 'sell' ? 'For Sale 💰' : item.type === 'lend' ? 'For Lending 🤝' : 'Want to Borrow 🙏'}
          </div>
        </div>
        
        <h3 className="font-bold text-purple-800 mb-3 text-xl leading-tight font-cute">
          {item.title}
        </h3>
        <p className="text-purple-600 text-sm mb-4 line-clamp-2 leading-relaxed">
          {item.description}
        </p>
        
        <div className="space-y-3 text-sm mb-6">
          <div className="flex justify-between items-center p-2 bg-white/40 rounded-xl">
            <span className="text-purple-500 font-medium">Category:</span>
            <span className="font-semibold text-purple-700 emoji-decoration">
              {item.category}
            </span>
          </div>
          <div className="flex justify-between items-center p-2 bg-white/40 rounded-xl">
            <span className="text-purple-500 font-medium">Price:</span>
            <span className="font-bold text-green-600 text-lg">
              {item.price === 0 ? 'Free 🎁' : `${item.price} 💝`}
            </span>
          </div>
          <div className="flex justify-between items-center p-2 bg-white/40 rounded-xl">
            <span className="text-purple-500 font-medium">Condition:</span>
            <span className="font-semibold text-purple-700">{item.condition} ✨</span>
          </div>
        </div>
        
        <div className="mt-auto pt-4 border-t-2 border-purple-200/50">
          <div className="flex items-center justify-between text-sm mb-4">
            <div className="flex items-center gap-2">
              <div className="p-1 bg-purple-100 rounded-full">
                <User className="h-4 w-4 text-purple-600" />
              </div>
              <span className="text-purple-600 font-medium">{item.seller}</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="h-4 w-4 text-purple-400" />
              <span className="text-purple-500 text-xs">{item.datePosted}</span>
            </div>
          </div>
          <button className="w-full px-4 py-3 bg-gradient-to-r from-purple-500 to-pink-400 text-white rounded-2xl hover:from-purple-600 hover:to-pink-500 text-sm font-bold transition-all duration-300 btn-cute shadow-md hover:shadow-lg transform hover:scale-105 relative overflow-hidden">
            Contact Seller 💌
          </button>
        </div>
      </div>
    ))}
  </div>
);

// Enhanced Lost Found Grid Component
const LostFoundGrid = ({ items, onViewThreads }) => (
  <div className="space-y-6">
    {items.length === 0 && (
      <div className="text-center text-purple-400 py-16 text-xl">
        <div className="text-6xl mb-4">🔍</div>
        <div className="font-medium">No lost or found treasures yet...</div>
        <div className="text-sm mt-2">Be the first to report something! ✨</div>
      </div>
    )}
    {items.map(item => (
      <div
        key={item.id}
        className="glass-effect rounded-3xl shadow-cute hover:shadow-cute-hover card-cute p-8 border border-white/30 relative overflow-hidden group"
      >
        <div className="flex items-start justify-between mb-6">
          <div className="flex items-center gap-4">
            <div className={`p-4 rounded-2xl shadow-md ${
              item.type === 'lost' ? 'bg-red-100/80 border-2 border-red-200' : 'bg-green-100/80 border-2 border-green-200'
            }`}>
              {item.type === 'lost' ?
                <AlertCircle className="h-6 w-6 text-red-600" /> :
                <CheckCircle className="h-6 w-6 text-green-600" />
              }
            </div>
            <div>
              <h3 className="font-bold text-purple-800 text-xl mb-1 font-cute">{item.title}</h3>
              <p className="text-sm text-purple-600 font-medium">
                {item.type === 'lost' ? 'Lost' : 'Found'} by {item.reportedBy}
              </p>
            </div>
          </div>
          <div className="text-right">
            <div className={`px-4 py-2 text-sm rounded-full font-bold capitalize border-2 ${
              item.status === 'active' 
                ? 'bg-yellow-100/80 text-yellow-700 border-yellow-200' 
                : 'bg-gray-100/80 text-gray-700 border-gray-200'
            }`}>
              {item.status} {item.status === 'active' ? '🔄' : '✅'}
            </div>
          </div>
        </div>
        
        <p className="text-purple-600 mb-6 line-clamp-2 leading-relaxed text-base">
          {item.description}
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm mb-6">
          <div className="p-3 bg-white/40 rounded-xl">
            <span className="text-purple-500 font-medium block mb-1">Location:</span>
            <p className="font-semibold text-purple-700">{item.location} 📍</p>
          </div>
          <div className="p-3 bg-white/40 rounded-xl">
            <span className="text-purple-500 font-medium block mb-1">Date:</span>
            <p className="font-semibold text-purple-700">{item.dateReported} 📅</p>
          </div>
          <div className="p-3 bg-white/40 rounded-xl">
            <span className="text-purple-500 font-medium block mb-1">Contact:</span>
            <p className="font-semibold text-purple-700 text-xs">{item.contact} 📧</p>
          </div>
        </div>
        
        <div className="flex items-center justify-between pt-4 border-t-2 border-purple-200/50">
          <div className="flex items-center gap-3">
            <div className="p-2 gradient-lavender rounded-full">
              <MessageCircle className="h-4 w-4 text-purple-600" />
            </div>
            <span className="text-purple-600 font-medium">
              {item.threads.length} update{item.threads.length !== 1 ? 's' : ''} 💬
            </span>
          </div>
          <button
            onClick={() => onViewThreads(item)}
            className="px-6 py-3 bg-gradient-to-r from-purple-500 to-blue-400 text-white rounded-2xl hover:from-purple-600 hover:to-blue-500 text-sm font-bold transition-all duration-300 btn-cute shadow-md hover:shadow-lg transform hover:scale-105"
          >
            View Updates ✨
          </button>
        </div>
      </div>
    ))}
  </div>
);

// Enhanced Add Item Modal Component
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
    <div className="fixed inset-0 bg-black/30 backdrop-blur-sm flex items-center justify-center p-4 z-50 transition-opacity duration-300">
      <div className="glass-effect rounded-3xl max-w-lg w-full p-8 animate-bounceIn shadow-cute border border-white/30">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-purple-700 font-cute flex items-center gap-2">
            Add {activeTab === 'marketplace' ? 'Item' : 'Report'}
            <Star className="h-6 w-6 text-yellow-500 animate-pulse-cute" />
          </h2>
          <button 
            onClick={onClose} 
            className="text-purple-400 hover:text-purple-600 p-2 hover:bg-purple-100/50 rounded-full transition-all duration-300"
          >
            <X className="h-6 w-6" />
          </button>
        </div>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-bold text-purple-700 mb-2">Title ✨</label>
            <input
              type="text"
              required
              className="w-full px-4 py-3 border-2 border-purple-200 rounded-2xl focus:outline-none focus:border-purple-400 focus:ring-4 focus:ring-purple-200/30 bg-white/70 font-medium text-purple-700 input-cute transition-all duration-300"
              value={formData.title}
              onChange={(e) => setFormData({ ...formData, title: e.target.value })}
              placeholder="Give your item a cute name..."
            />
          </div>
          
          <div>
            <label className="block text-sm font-bold text-purple-700 mb-2">Description 💝</label>
            <textarea
              required
              rows={4}
              className="w-full px-4 py-3 border-2 border-purple-200 rounded-2xl focus:outline-none focus:border-purple-400 focus:ring-4 focus:ring-purple-200/30 bg-white/70 font-medium text-purple-700 input-cute transition-all duration-300 resize-none"
              value={formData.description}
              onChange={(e) => setFormData({ ...formData, description: e.target.value })}
              placeholder="Tell us more about it..."
            />
          </div>
          
          <div>
            <label className="block text-sm font-bold text-purple-700 mb-2">Contact Email 📧</label>
            <input
              type="email"
              required
              className="w-full px-4 py-3 border-2 border-purple-200 rounded-2xl focus:outline-none focus:border-purple-400 focus:ring-4 focus:ring-purple-200/30 bg-white/70 font-medium text-purple-700 input-cute transition-all duration-300"
              value={formData.contact}
              onChange={(e) => setFormData({ ...formData, contact: e.target.value })}
              placeholder="your.email@college.edu"
            />
          </div>
          
          {activeTab === 'marketplace' ? (
            <>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-bold text-purple-700 mb-2">Category 📚</label>
                  <select
                    className="w-full px-4 py-3 border-2 border-purple-200 rounded-2xl focus:outline-none focus:border-purple-400 focus:ring-4 focus:ring-purple-200/30 bg-white/70 font-medium text-purple-700 input-cute transition-all duration-300"
                    value={formData.category}
                    onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                  >
                    <option value="Books">Books 📚</option>
                    <option value="Tools">Tools 🔧</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-bold text-purple-700 mb-2">Type 🏷️</label>
                  <select
                    className="w-full px-4 py-3 border-2 border-purple-200 rounded-2xl focus:outline-none focus:border-purple-400 focus:ring-4 focus:ring-purple-200/30 bg-white/70 font-medium text-purple-700 input-cute transition-all duration-300"
                    value={formData.type}
                    onChange={(e) => setFormData({ ...formData, type: e.target.value })}
                  >
                    <option value="sell">For Sale 💰</option>
                    <option value="lend">For Lending 🤝</option>
                    <option value="borrow">Want to Borrow 🙏</option>
                  </select>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-bold text-purple-700 mb-2">Price ($) 💰</label>
                  <input
                    type="number"
                    min="0"
                    className="w-full px-4 py-3 border-2 border-purple-200 rounded-2xl focus:outline-none focus:border-purple-400 focus:ring-4 focus:ring-purple-200/30 bg-white/70 font-medium text-purple-700 input-cute transition-all duration-300"
                    value={formData.price}
                    onChange={(e) => setFormData({ ...formData, price: e.target.value })}
                    placeholder="0 for free!"
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-purple-700 mb-2">Condition ✨</label>
                  <select
                    className="w-full px-4 py-3 border-2 border-purple-200 rounded-2xl focus:outline-none focus:border-purple-400 focus:ring-4 focus:ring-purple-200/30 bg-white/70 font-medium text-purple-700 input-cute transition-all duration-300"
                    value={formData.condition}
                    onChange={(e) => setFormData({ ...formData, condition: e.target.value })}
                  >
                    <option value="Excellent">Excellent ⭐</option>
                    <option value="Good">Good 👍</option>
                    <option value="Fair">Fair 👌</option>
                    <option value="Any">Any 🤷</option>
                  </select>
                </div>
              </div>
            </>
          ) : (
            <>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-bold text-purple-700 mb-2">Type 🔍</label>
                  <select
                    className="w-full px-4 py-3 border-2 border-purple-200 rounded-2xl focus:outline-none focus:border-purple-400 focus:ring-4 focus:ring-purple-200/30 bg-white/70 font-medium text-purple-700 input-cute transition-all duration-300"
                    value={formData.type}
                    onChange={(e) => setFormData({ ...formData, type: e.target.value })}
                  >
                    <option value="lost">Lost Item 😢</option>
                    <option value="found">Found Item 😊</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-bold text-purple-700 mb-2">Location 📍</label>
                  <input
                    type="text"
                    required
                    className="w-full px-4 py-3 border-2 border-purple-200 rounded-2xl focus:outline-none focus:border-purple-400 focus:ring-4 focus:ring-purple-200/30 bg-white/70 font-medium text-purple-700 input-cute transition-all duration-300"
                    value={formData.location}
                    onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                    placeholder="Where did you lose/find it?"
                  />
                </div>
              </div>
            </>
          )}
          
          <div className="flex gap-4 pt-6">
            <button
              type="button"
              onClick={onClose}
              className="flex-1 px-6 py-3 border-2 border-purple-300 text-purple-600 rounded-2xl hover:bg-purple-50 hover:border-purple-400 font-semibold transition-all duration-300"
            >
              Cancel 💔
            </button>
            <button
              type="submit"
              className="flex-1 px-6 py-3 bg-gradient-to-r from-purple-500 to-green-400 text-white rounded-2xl hover:from-purple-600 hover:to-green-500 font-bold transition-all duration-300 btn-cute shadow-md hover:shadow-lg transform hover:scale-105"
            >
              Add {activeTab === 'marketplace' ? 'Item' : 'Report'} ✨
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

// Enhanced Thread Modal Component
const ThreadModal = ({ item, onClose, newThread, setNewThread, onAddThread }) => (
  <div className="fixed inset-0 bg-black/30 backdrop-blur-sm flex items-center justify-center p-4 z-50 transition-opacity duration-300">
    <div className="glass-effect rounded-3xl max-w-3xl w-full max-h-[85vh] overflow-hidden animate-bounceIn shadow-cute border border-white/30">
      <div className="flex items-center justify-between p-8 border-b-2 border-purple-200/50">
        <h2 className="text-2xl font-bold text-purple-700 font-cute flex items-center gap-2">
          {item.title} - Updates
          <MessageCircle className="h-6 w-6 text-purple-500 animate-pulse-cute" />
        </h2>
        <button 
          onClick={onClose} 
          className="text-purple-400 hover:text-purple-600 p-2 hover:bg-purple-100/50 rounded-full transition-all duration-300"
        >
          <X className="h-8 w-8" />
        </button>
      </div>
      
      <div className="p-8 overflow-y-auto max-h-96">
        <div className="space-y-4 mb-8">
          {item.threads.map(thread => (
            <div key={thread.id} className="gradient-mint rounded-2xl p-6 shadow-md border border-green-200/50">
              <div className="flex items-center justify-between mb-3">
                <span className="font-bold text-purple-700 text-lg">{thread.author}</span>
                <span className="text-sm text-purple-500 font-medium">{thread.timestamp} ⏰</span>
              </div>
              <p className="text-purple-600 leading-relaxed font-medium">{thread.message}</p>
            </div>
          ))}
        </div>
      </div>
      
      <div className="p-8 border-t-2 border-purple-200/50">
        <div className="flex gap-4">
          <input
            type="text"
            placeholder="Add a sweet update... 💕"
            className="flex-1 px-4 py-3 border-2 border-purple-200 rounded-2xl focus:outline-none focus:border-purple-400 focus:ring-4 focus:ring-purple-200/30 bg-white/70 font-medium text-purple-700 input-cute transition-all duration-300"
            value={newThread}
            onChange={(e) => setNewThread(e.target.value)}
          />
          <button
            onClick={onAddThread}
            className="px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-400 text-white rounded-2xl hover:from-purple-600 hover:to-pink-500 font-bold transition-all duration-300 btn-cute shadow-md hover:shadow-lg transform hover:scale-105"
          >
            Add Update ✨
          </button>
        </div>
      </div>
    </div>
  </div>
);

export default CollegeMarketplace;
