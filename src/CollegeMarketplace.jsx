import React, { useState } from 'react';
import {
  Search, Plus, MessageCircle, Clock, User, BookOpen, AlertCircle, CheckCircle, X
} from 'lucide-react';

// Hero Section
const HeroSection = () => (
  <section className="bg-gradient-to-r from-blue-50 to-blue-100 py-10 mb-8 rounded-lg shadow">
    <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center gap-6">
      <div className="flex-1">
        <h2 className="text-3xl md:text-4xl font-extrabold text-blue-800 mb-2 flex items-center gap-2">
          <BookOpen className="h-8 w-8 text-blue-500" />
          Welcome to College Hub
        </h2>
        <p className="text-lg text-blue-700">
          Buy, sell, borrow, or lend books and tools. Report and track lost & found items. All in one place for your college community!
        </p>
      </div>
      <div className="flex-shrink-0">
        <img src="https://cdn.pixabay.com/photo/2017/01/31/13/14/book-2022464_1280.png" alt="Books and Tools" className="h-32 w-32 object-contain" />
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
      seller: "John D.",
      contact: "john.doe@college.edu",
      description: "Barely used, no highlighting. Great for engineering calculus.",
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
      description: "Professional grade multimeter, perfect for electronics projects.",
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
      description: "Need for final exam preparation, can return in 2 weeks.",
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
      description: "Black HP Pavilion laptop with engineering stickers",
      status: "active",
      threads: [
        { id: 1, author: "Alex P.", message: "Lost during morning lecture, has important project files", timestamp: "2 days ago" },
        { id: 2, author: "Building Security", message: "Checked with janitor, no laptop found in room", timestamp: "1 day ago" }
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
      description: "TI-84 Plus CE in red case, found on desk",
      status: "active",
      threads: [
        { id: 1, author: "Emma L.", message: "Found this calculator, will keep it safe until claimed", timestamp: "1 day ago" }
      ]
    }
  ]);
  const [filters, setFilters] = useState({
    marketplace: { category: 'all', type: 'all', priceRange: 'all', condition: 'all' },
    lostfound: { type: 'all', status: 'all', location: 'all' }
  });
  const [searchTerm, setSearchTerm] = useState('');
  const [newThread, setNewThread] = useState('');

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
        seller: "Current User",
        datePosted: "Just now",
        image: formData.category === 'Books' ? '📚' : '🔧'
      };
      setMarketplaceItems([newItem, ...marketplaceItems]);
    } else {
      const newItem = {
        id: lostFoundItems.length + 1,
        ...formData,
        reportedBy: "Current User",
        dateReported: new Date().toISOString().split('T')[0],
        status: "active",
        threads: [{
          id: 1,
          author: "Current User",
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
              author: "Current User",
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
          author: "Current User",
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
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b sticky top-0 z-30">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold text-blue-700 tracking-tight flex items-center gap-2">
              <BookOpen className="h-7 w-7 text-blue-500" /> College Hub
            </h1>
            <div className="flex space-x-4">
              <button
                onClick={() => setActiveTab('marketplace')}
                className={`px-4 py-2 rounded-lg font-medium transition focus:outline-none focus:ring-2 focus:ring-blue-400 ${
                  activeTab === 'marketplace'
                    ? 'bg-blue-600 text-white shadow'
                    : 'text-gray-600 hover:text-blue-700 hover:bg-blue-100'
                }`}
                aria-label="Marketplace Tab"
              >
                Marketplace
              </button>
              <button
                onClick={() => setActiveTab('lostfound')}
                className={`px-4 py-2 rounded-lg font-medium transition focus:outline-none focus:ring-2 focus:ring-blue-400 ${
                  activeTab === 'lostfound'
                    ? 'bg-blue-600 text-white shadow'
                    : 'text-gray-600 hover:text-blue-700 hover:bg-blue-100'
                }`}
                aria-label="Lost and Found Tab"
              >
                Lost & Found
              </button>
            </div>
          </div>
        </div>
      </header>
      <HeroSection />
      <div className="max-w-7xl mx-auto px-4 py-6">
        {/* Search and Filters */}
        <div className="mb-6 bg-white rounded-lg shadow p-6">
          <div className="flex flex-col lg:flex-row gap-4 items-center">
            {/* Search */}
            <div className="flex-1 w-full">
              <div className="relative">
                <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                <input
                  type="text"
                  placeholder={`Search ${activeTab === 'marketplace' ? 'books and tools' : 'lost items'}...`}
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  aria-label="Search"
                />
              </div>
            </div>
            {/* Filters */}
            <div className="flex flex-wrap gap-2 items-center">
              {activeTab === 'marketplace' ? (
                <>
                  {/* Category Pills */}
                  <FilterPills
                    options={['all', 'Books', 'Tools']}
                    value={filters.marketplace.category}
                    onChange={val => setFilters({ ...filters, marketplace: { ...filters.marketplace, category: val } })}
                    label="Category"
                  />
                  {/* Type Pills */}
                  <FilterPills
                    options={['all', 'sell', 'lend', 'borrow']}
                    value={filters.marketplace.type}
                    onChange={val => setFilters({ ...filters, marketplace: { ...filters.marketplace, type: val } })}
                    label="Type"
                    displayMap={{ all: 'All Types', sell: 'For Sale', lend: 'For Lending', borrow: 'Want to Borrow' }}
                  />
                  {/* Price Pills */}
                  <FilterPills
                    options={['all', 'free', 'under25', '25to50', 'over50']}
                    value={filters.marketplace.priceRange}
                    onChange={val => setFilters({ ...filters, marketplace: { ...filters.marketplace, priceRange: val } })}
                    label="Price"
                    displayMap={{ all: 'All Prices', free: 'Free', under25: 'Under $25', '25to50': '$25 - $50', over50: 'Over $50' }}
                  />
                  {/* Condition Pills */}
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
                className="ml-2 px-3 py-1 rounded border border-gray-300 text-gray-600 hover:bg-gray-100 transition"
                onClick={resetFilters}
                aria-label="Reset Filters"
              >
                Reset
              </button>
            </div>
            {/* Add Button */}
            <button
              onClick={() => setShowAddModal(true)}
              className="px-4 py-2 bg-gradient-to-r from-blue-600 to-blue-500 text-white rounded-lg hover:from-blue-700 hover:to-blue-600 flex items-center gap-2 shadow transition"
              aria-label={`Add ${activeTab === 'marketplace' ? 'Item' : 'Report'}`}
            >
              <Plus className="h-4 w-4" />
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
  <div className="flex gap-1 items-center">
    <span className="text-xs text-gray-500 mr-1">{label}:</span>
    {options.map(opt => (
      <button
        key={opt}
        className={`px-3 py-1 rounded-full border text-xs font-medium transition focus:outline-none focus:ring-2 focus:ring-blue-400 ${
          value === opt
            ? 'bg-blue-600 text-white border-blue-600 shadow'
            : 'bg-white text-blue-600 border-blue-200 hover:bg-blue-50'
        }`}
        onClick={() => onChange(opt)}
        aria-label={`${label} ${displayMap ? displayMap[opt] : opt}`}
      >
        {displayMap ? displayMap[opt] : opt.charAt(0).toUpperCase() + opt.slice(1)}
      </button>
    ))}
  </div>
);

// Marketplace Grid Component
const MarketplaceGrid = ({ items }) => (
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
    {items.length === 0 && (
      <div className="col-span-full text-center text-gray-400 py-12 text-lg">No items found.</div>
    )}
    {items.map(item => (
      <div
        key={item.id}
        className="bg-white rounded-xl shadow hover:shadow-xl hover:-translate-y-1 transition-all duration-200 p-6 flex flex-col justify-between border border-transparent hover:border-blue-200"
      >
        <div className="flex items-start justify-between mb-4">
          <div className="text-3xl select-none">{item.image}</div>
          <div className={`px-2 py-1 text-xs rounded-full font-medium capitalize ${
            item.type === 'sell' ? 'bg-green-100 text-green-800' :
            item.type === 'lend' ? 'bg-blue-100 text-blue-800' :
            'bg-orange-100 text-orange-800'
          }`}>
            {item.type === 'sell' ? 'For Sale' : item.type === 'lend' ? 'For Lending' : 'Want to Borrow'}
          </div>
        </div>
        <h3 className="font-semibold text-gray-900 mb-2 text-lg">{item.title}</h3>
        <p className="text-gray-600 text-sm mb-3 line-clamp-2">{item.description}</p>
        <div className="space-y-2 text-sm">
          <div className="flex justify-between">
            <span className="text-gray-500">Category:</span>
            <span className="font-medium">{item.category}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-500">Price:</span>
            <span className="font-medium">
              {item.price === 0 ? 'Free' : `$${item.price}`}
            </span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-500">Condition:</span>
            <span className="font-medium">{item.condition}</span>
          </div>
        </div>
        <div className="mt-4 pt-4 border-t border-gray-200">
          <div className="flex items-center justify-between text-sm">
            <div className="flex items-center gap-1">
              <User className="h-4 w-4 text-gray-400" />
              <span className="text-gray-600">{item.seller}</span>
            </div>
            <div className="flex items-center gap-1">
              <Clock className="h-4 w-4 text-gray-400" />
              <span className="text-gray-500">{item.datePosted}</span>
            </div>
          </div>
          <button className="w-full mt-3 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 text-sm font-medium transition">
            Contact Seller
          </button>
        </div>
      </div>
    ))}
  </div>
);

// Lost Found Grid Component
const LostFoundGrid = ({ items, onViewThreads }) => (
  <div className="space-y-4">
    {items.length === 0 && (
      <div className="text-center text-gray-400 py-12 text-lg">No lost or found items.</div>
    )}
    {items.map(item => (
      <div
        key={item.id}
        className="bg-white rounded-xl shadow hover:shadow-xl hover:-translate-y-1 transition-all duration-200 p-6 border border-transparent hover:border-blue-200"
      >
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-center gap-3">
            <div className={`p-2 rounded-full ${
              item.type === 'lost' ? 'bg-red-100' : 'bg-green-100'
            }`}>
              {item.type === 'lost' ?
                <AlertCircle className="h-5 w-5 text-red-600" /> :
                <CheckCircle className="h-5 w-5 text-green-600" />
              }
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 text-lg">{item.title}</h3>
              <p className="text-sm text-gray-500">
                {item.type === 'lost' ? 'Lost' : 'Found'} by {item.reportedBy}
              </p>
            </div>
          </div>
          <div className="text-right">
            <div className={`px-2 py-1 text-xs rounded-full font-medium capitalize ${
              item.status === 'active' ? 'bg-yellow-100 text-yellow-800' : 'bg-gray-100 text-gray-800'
            }`}>
              {item.status}
            </div>
          </div>
        </div>
        <p className="text-gray-600 mb-4 line-clamp-2">{item.description}</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm mb-4">
          <div>
            <span className="text-gray-500">Location:</span>
            <p className="font-medium">{item.location}</p>
          </div>
          <div>
            <span className="text-gray-500">Date:</span>
            <p className="font-medium">{item.dateReported}</p>
          </div>
          <div>
            <span className="text-gray-500">Contact:</span>
            <p className="font-medium">{item.contact}</p>
          </div>
        </div>
        <div className="flex items-center justify-between pt-4 border-t border-gray-200">
          <div className="flex items-center gap-2">
            <MessageCircle className="h-4 w-4 text-gray-400" />
            <span className="text-sm text-gray-600">
              {item.threads.length} update{item.threads.length !== 1 ? 's' : ''}
            </span>
          </div>
          <button
            onClick={() => onViewThreads(item)}
            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 text-sm font-medium transition"
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
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50 transition-opacity duration-200">
      <div className="bg-white rounded-lg max-w-md w-full p-6 animate-fadeIn shadow-xl">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-semibold">
            Add {activeTab === 'marketplace' ? 'Item' : 'Report'}
          </h2>
          <button onClick={onClose} className="text-gray-400 hover:text-gray-600">
            <X className="h-6 w-6" />
          </button>
        </div>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Title</label>
            <input
              type="text"
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={formData.title}
              onChange={(e) => setFormData({ ...formData, title: e.target.value })}
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
            <textarea
              required
              rows={3}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={formData.description}
              onChange={(e) => setFormData({ ...formData, description: e.target.value })}
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Contact Email</label>
            <input
              type="email"
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={formData.contact}
              onChange={(e) => setFormData({ ...formData, contact: e.target.value })}
            />
          </div>
          {activeTab === 'marketplace' ? (
            <>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Category</label>
                  <select
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    value={formData.category}
                    onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                  >
                    <option value="Books">Books</option>
                    <option value="Tools">Tools</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Type</label>
                  <select
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
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
                  <label className="block text-sm font-medium text-gray-700 mb-1">Price ($)</label>
                  <input
                    type="number"
                    min="0"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    value={formData.price}
                    onChange={(e) => setFormData({ ...formData, price: e.target.value })}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Condition</label>
                  <select
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
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
                  <label className="block text-sm font-medium text-gray-700 mb-1">Type</label>
                  <select
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    value={formData.type}
                    onChange={(e) => setFormData({ ...formData, type: e.target.value })}
                  >
                    <option value="lost">Lost Item</option>
                    <option value="found">Found Item</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Location</label>
                  <input
                    type="text"
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    value={formData.location}
                    onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                  />
                </div>
              </div>
            </>
          )}
          <div className="flex gap-3 pt-4">
            <button
              type="button"
              onClick={onClose}
              className="flex-1 px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="flex-1 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
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
  <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50 transition-opacity duration-200">
    <div className="bg-white rounded-lg max-w-2xl w-full max-h-[80vh] overflow-hidden animate-fadeIn shadow-xl">
      <div className="flex items-center justify-between p-6 border-b">
        <h2 className="text-xl font-semibold">{item.title} - Updates</h2>
        <button onClick={onClose} className="text-gray-400 hover:text-gray-600">
          <X className="h-6 w-6" />
        </button>
      </div>
      <div className="p-6 overflow-y-auto max-h-96">
        <div className="space-y-4 mb-6">
          {item.threads.map(thread => (
            <div key={thread.id} className="bg-gray-50 rounded-lg p-4">
              <div className="flex items-center justify-between mb-2">
                <span className="font-medium text-gray-900">{thread.author}</span>
                <span className="text-sm text-gray-500">{thread.timestamp}</span>
              </div>
              <p className="text-gray-700">{thread.message}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="p-6 border-t">
        <div className="flex gap-3">
          <input
            type="text"
            placeholder="Add an update..."
            className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={newThread}
            onChange={(e) => setNewThread(e.target.value)}
          />
          <button
            onClick={onAddThread}
            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
          >
            Add Update
          </button>
        </div>
      </div>
    </div>
  </div>
);

export default CollegeMarketplace;

// Tailwind animation (add to your global CSS if not present)
// @keyframes fadeIn { from { opacity: 0; transform: scale(0.95);} to { opacity: 1; transform: scale(1);} }
// .animate-fadeIn { animation: fadeIn 0.2s ease; } 