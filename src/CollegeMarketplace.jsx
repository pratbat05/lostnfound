import React, { useState } from 'react';
import {
  Search, Plus, MessageCircle, Clock, User, BookOpen, AlertCircle, CheckCircle, X, 
  Star, Heart, ShoppingBag, Users, Shield, Zap, Filter
} from 'lucide-react';
import { SparklesCore } from './components/ui/sparkles';

function cn(...inputs) {
  return inputs.filter(Boolean).join(' ');
}

const LandingPage = ({ onEnterApp }) => (
  <div className="min-h-screen bg-black">
    <div className="relative h-screen w-full bg-black flex flex-col items-center justify-center overflow-hidden">
      <div className="relative z-20 text-center px-4">
        <h1 className="text-5xl md:text-7xl lg:text-9xl font-bold text-white mb-6">
          College Hub
        </h1>
        <p className="text-xl md:text-2xl text-gray-300 mb-4">
          Your Campus Marketplace
        </p>
        <p className="max-w-xl mx-auto text-sm md:text-lg text-gray-400 mb-8">
          Buy, sell, lend, and find lost items within your college community.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
          <button onClick={onEnterApp} className="px-8 py-4 bg-white text-black rounded-lg font-medium transition-all duration-200 hover:scale-105 flex items-center gap-2 justify-center">
            <ShoppingBag className="h-5 w-5" />
            Enter Marketplace
          </button>
          <button className="px-8 py-4 bg-transparent border-2 border-white text-white rounded-lg font-medium transition-all duration-200 hover:bg-white hover:text-black flex items-center gap-2 justify-center">
            <BookOpen className="h-5 w-5" />
            Learn More
          </button>
        </div>
      </div>
      <div className="w-full h-full absolute inset-0">
        <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm" />
        <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4" />
        <SparklesCore background="transparent" minSize={0.4} maxSize={1} particleDensity={1200} className="w-full h-full" particleColor="#FFFFFF" />
        <div className="absolute inset-0 w-full h-full bg-black" style={{ maskImage: 'radial-gradient(350px 200px at top, transparent 20%, white)' }}></div>
      </div>
    </div>
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
  </div>
);

const FilterSelect = ({ label, options, value, onChange }) => (
  <div className="flex flex-col gap-1">
    <label className="text-xs font-medium text-gray-500">{label}</label>
    <select className="px-3 py-2 bg-gray-50 border border-gray-200 rounded-lg text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500" value={value} onChange={(e) => onChange(e.target.value)}>
      {options.map(option => <option key={option.value} value={option.value}>{option.label}</option>)}
    </select>
  </div>
);

const MarketplaceGrid = ({ items }) => (
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
    {items.length === 0 && (
      <div className="col-span-full text-center py-16 text-gray-500">
        <div className="text-6xl mb-4">🔍</div>
        <div className="text-xl font-medium">No items found</div>
      </div>
    )}
    {items.map(item => (
      <div key={item.id} className="bg-white rounded-xl p-6 border border-gray-200 hover:border-gray-300 transition-colors shadow-sm">
        <div className="flex items-start justify-between mb-4">
          <div className="text-3xl">{item.image}</div>
          <div className={`px-3 py-1 text-xs rounded-full font-medium ${item.type === 'sell' ? 'bg-green-100 text-green-700' : item.type === 'lend' ? 'bg-blue-100 text-blue-700' : 'bg-orange-100 text-orange-700'}`}>
            {item.type === 'sell' ? 'For Sale' : item.type === 'lend' ? 'For Lending' : 'Want to Borrow'}
          </div>
        </div>
        <h3 className="font-semibold text-lg text-gray-900 mb-3">{item.title}</h3>
        <p className="text-sm text-gray-600 mb-4 line-clamp-2">{item.description}</p>
        <div className="space-y-2 text-sm mb-6">
          <div className="flex justify-between items-center">
            <span className="text-gray-500">Price:</span>
            <span className="font-semibold text-green-600">{item.price === 0 ? 'Free' : `$${item.price}`}</span>
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
          <button className="w-full py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors">Contact Seller</button>
        </div>
      </div>
    ))}
  </div>
);

const LostFoundGrid = ({ items, onViewThreads }) => (
  <div className="space-y-6">
    {items.length === 0 && (
      <div className="text-center py-16 text-gray-500">
        <div className="text-6xl mb-4">🔍</div>
        <div className="text-xl font-medium">No items found</div>
      </div>
    )}
    {items.map(item => (
      <div key={item.id} className="bg-white rounded-xl p-6 border border-gray-200 hover:border-gray-300 transition-colors shadow-sm">
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-center gap-4">
            <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${item.type === 'lost' ? 'bg-red-100' : 'bg-green-100'}`}>
              {item.type === 'lost' ? <AlertCircle className="h-6 w-6 text-red-600" /> : <CheckCircle className="h-6 w-6 text-green-600" />}
            </div>
            <div>
              <h3 className="font-semibold text-xl text-gray-900 mb-1">{item.title}</h3>
              <p className="text-sm text-gray-600">{item.type === 'lost' ? 'Lost' : 'Found'} by {item.reportedBy}</p>
            </div>
          </div>
        </div>
        <p className="mb-6 text-gray-700">{item.description}</p>
        <div className="flex items-center justify-between pt-4 border-t border-gray-200">
          <div className="flex items-center gap-3">
            <MessageCircle className="h-4 w-4 text-gray-400" />
            <span className="text-gray-600">{item.threads.length} updates</span>
          </div>
          <button onClick={() => onViewThreads(item)} className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors">View Updates</button>
        </div>
      </div>
    ))}
  </div>
);

const AddItemModal = ({ activeTab, onClose, onSubmit }) => {
  const [formData, setFormData] = useState({
    title: '', description: '', contact: '', category: activeTab === 'marketplace' ? 'Books' : '',
    type: activeTab === 'marketplace' ? 'sell' : 'lost', price: '', condition: 'Good', location: ''
  });
  
  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ ...formData, price: activeTab === 'marketplace' ? parseInt(formData.price) || 0 : 0 });
  };
  
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="max-w-lg w-full p-6 bg-white rounded-xl shadow-xl">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-gray-900">Add {activeTab === 'marketplace' ? 'Item' : 'Report'}</h2>
          <button onClick={onClose} className="p-2 hover:bg-gray-100 rounded-lg"><X className="h-6 w-6" /></button>
        </div>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Title</label>
            <input type="text" required className="w-full px-3 py-2 bg-gray-50 border border-gray-200 rounded-lg" value={formData.title} onChange={(e) => setFormData({ ...formData, title: e.target.value })} />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Description</label>
            <textarea required rows={4} className="w-full px-3 py-2 bg-gray-50 border border-gray-200 rounded-lg resize-none" value={formData.description} onChange={(e) => setFormData({ ...formData, description: e.target.value })} />
          </div>
          <div className="flex gap-3 pt-4">
            <button type="button" onClick={onClose} className="flex-1 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-lg font-medium">Cancel</button>
            <button type="submit" className="flex-1 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium">Add</button>
          </div>
        </form>
      </div>
    </div>
  );
};

const ThreadModal = ({ item, onClose, newThread, setNewThread, onAddThread }) => (
  <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
    <div className="max-w-3xl w-full max-h-[85vh] overflow-hidden bg-white rounded-xl shadow-xl">
      <div className="flex items-center justify-between p-6 border-b">
        <h2 className="text-2xl font-bold text-gray-900">{item.title} - Updates</h2>
        <button onClick={onClose} className="p-2 hover:bg-gray-100 rounded-lg"><X className="h-6 w-6" /></button>
      </div>
      <div className="p-6 overflow-y-auto max-h-96">
        <div className="space-y-4">
          {item.threads.map(thread => (
            <div key={thread.id} className="bg-gray-50 rounded-lg p-4">
              <div className="flex items-center justify-between mb-3">
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
          <input type="text" placeholder="Add an update..." className="flex-1 px-3 py-2 bg-gray-50 border border-gray-200 rounded-lg" value={newThread} onChange={(e) => setNewThread(e.target.value)} />
          <button onClick={onAddThread} className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium">Add</button>
        </div>
      </div>
    </div>
  </div>
);

const CollegeMarketplace = () => {
  const [showLanding, setShowLanding] = useState(true);
  const [activeTab, setActiveTab] = useState('marketplace');
  const [showAddModal, setShowAddModal] = useState(false);
  const [showThreadModal, setShowThreadModal] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const [showFilters, setShowFilters] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [newThread, setNewThread] = useState('');
  const [filters, setFilters] = useState({
    marketplace: { category: 'all', type: 'all', priceRange: 'all', condition: 'all' },
    lostfound: { type: 'all', status: 'all' }
  });
  
  const [marketplaceItems, setMarketplaceItems] = useState([
    { id: 1, title: "Calculus Textbook", category: "Books", type: "sell", price: 45, condition: "Good", seller: "Emma D.", contact: "emma@college.edu", description: "Barely used textbook.", datePosted: "2 days ago", image: "📚" },
    { id: 2, title: "Digital Multimeter", category: "Tools", type: "lend", price: 15, condition: "Excellent", seller: "Sarah M.", contact: "sarah@college.edu", description: "Professional grade multimeter.", datePosted: "1 day ago", image: "🔧" }
  ]);
  
  const [lostFoundItems, setLostFoundItems] = useState([
    { id: 1, title: "Black HP Laptop", type: "lost", location: "Engineering Building", dateReported: "2024-07-23", reportedBy: "Alex P.", contact: "alex@college.edu", description: "Black HP Pavilion laptop.", status: "active", threads: [{ id: 1, author: "Alex P.", message: "Lost during morning lecture.", timestamp: "2 days ago" }] }
  ]);

  if (showLanding) return <LandingPage onEnterApp={() => setShowLanding(false)} />;

  const filteredMarketplaceItems = marketplaceItems.filter(item => {
    const matchesSearch = item.title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = filters.marketplace.category === 'all' || item.category === filters.marketplace.category;
    const matchesType = filters.marketplace.type === 'all' || item.type === filters.marketplace.type;
    return matchesSearch && matchesCategory && matchesType;
  });

  const filteredLostFoundItems = lostFoundItems.filter(item => {
    const matchesSearch = item.title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesType = filters.lostfound.type === 'all' || item.type === filters.lostfound.type;
    return matchesSearch && matchesType;
  });

  const handleAddItem = (formData) => {
    if (activeTab === 'marketplace') {
      setMarketplaceItems([{ id: Date.now(), ...formData, seller: "You", datePosted: "Just now", image: "📚" }, ...marketplaceItems]);
    } else {
      setLostFoundItems([{ id: Date.now(), ...formData, reportedBy: "You", dateReported: new Date().toISOString().split('T')[0], status: "active", threads: [{ id: 1, author: "You", message: formData.description, timestamp: "Just now" }] }, ...lostFoundItems]);
    }
    setShowAddModal(false);
  };

  const handleAddThread = () => {
    if (newThread.trim() && selectedItem) {
      const updatedItems = lostFoundItems.map(item => item.id === selectedItem.id ? { ...item, threads: [...item.threads, { id: Date.now(), author: "You", message: newThread, timestamp: "Just now" }] } : item);
      setLostFoundItems(updatedItems);
      setSelectedItem({ ...selectedItem, threads: [...selectedItem.threads, { id: Date.now(), author: "You", message: newThread, timestamp: "Just now" }] });
      setNewThread('');
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="sticky top-0 z-30 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                <BookOpen className="h-6 w-6 text-blue-600" />
              </div>
              <h1 className="text-2xl font-bold text-gray-900">College Hub</h1>
            </div>
            <div className="flex items-center gap-4">
              <button onClick={() => setActiveTab('marketplace')} className={`px-4 py-2 rounded-lg font-medium ${activeTab === 'marketplace' ? 'bg-blue-600 text-white' : 'text-gray-600'}`}>Marketplace</button>
              <button onClick={() => setActiveTab('lostfound')} className={`px-4 py-2 rounded-lg font-medium ${activeTab === 'lostfound' ? 'bg-blue-600 text-white' : 'text-gray-600'}`}>Lost & Found</button>
            </div>
          </div>
        </div>
      </header>
      
      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="mb-8 bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
          <div className="flex gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input type="text" placeholder="Search..." className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-lg" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
            </div>
            <button onClick={() => setShowAddModal(true)} className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium flex items-center gap-2">
              <Plus className="h-5 w-5" />
              Add {activeTab === 'marketplace' ? 'Item' : 'Report'}
            </button>
          </div>
        </div>
        
        {activeTab === 'marketplace' ? <MarketplaceGrid items={filteredMarketplaceItems} /> : <LostFoundGrid items={filteredLostFoundItems} onViewThreads={(item) => { setSelectedItem(item); setShowThreadModal(true); }} />}
      </div>
      
      {showAddModal && <AddItemModal activeTab={activeTab} onClose={() => setShowAddModal(false)} onSubmit={handleAddItem} />}
      {showThreadModal && selectedItem && <ThreadModal item={selectedItem} onClose={() => setShowThreadModal(false)} newThread={newThread} setNewThread={setNewThread} onAddThread={handleAddThread} />}
    </div>
  );
};

export default CollegeMarketplace;
