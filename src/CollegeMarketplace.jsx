import React, { useState } from 'react';
import {
  Search, Plus, MessageCircle, Clock, User, BookOpen, AlertCircle, CheckCircle, X, 
  Star, Heart, ShoppingBag, Users, Shield, Zap
} from 'lucide-react';

// Landing Page Component
const LandingPage = ({ onEnterApp }) => (
  <div className="min-h-screen bg-off-white">
    {/* Hero Section */}
    <section className="hero-gradient section-padding">
      <div className="max-w-7xl mx-auto container-padding">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 bg-cream border border-sage-light rounded-full px-6 py-2 mb-8">
            <Star className="h-4 w-4 text-sage" />
            <span className="text-sm font-medium text-text-medium">Welcome to College Hub</span>
          </div>
          
          <h1 className="font-display text-5xl md:text-7xl font-bold text-text-dark mb-6 leading-tight">
            Your Campus
            <span className="text-sage block">Marketplace</span>
          </h1>
          
          <p className="text-xl text-text-medium max-w-2xl mx-auto mb-12 leading-relaxed">
            Buy, sell, lend, and find lost items within your college community. 
            Connect with fellow students in a safe and trusted environment.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={onEnterApp}
              className="btn-primary text-lg px-8 py-4 inline-flex items-center gap-3"
            >
              <ShoppingBag className="h-5 w-5" />
              Enter Marketplace
            </button>
            <button className="btn-secondary text-lg px-8 py-4 inline-flex items-center gap-3">
              <BookOpen className="h-5 w-5" />
              Learn More
            </button>
          </div>
        </div>
        
        {/* Hero Image/Illustration Placeholder */}
        <div className="relative max-w-4xl mx-auto">
          <div className="card-professional p-8 animate-float">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center p-6 bg-mint rounded-xl">
                <div className="feature-icon mx-auto mb-4">
                  <BookOpen className="h-6 w-6" />
                </div>
                <h3 className="font-semibold text-text-dark mb-2">Textbooks</h3>
                <p className="text-sm text-text-light">Find affordable textbooks from seniors</p>
              </div>
              <div className="text-center p-6 bg-mint rounded-xl">
                <div className="feature-icon mx-auto mb-4">
                  <Search className="h-6 w-6" />
                </div>
                <h3 className="font-semibold text-text-dark mb-2">Lost & Found</h3>
                <p className="text-sm text-text-light">Recover your lost belongings</p>
              </div>
              <div className="text-center p-6 bg-mint rounded-xl">
                <div className="feature-icon mx-auto mb-4">
                  <Users className="h-6 w-6" />
                </div>
                <h3 className="font-semibold text-text-dark mb-2">Community</h3>
                <p className="text-sm text-text-light">Connect with fellow students</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    
    {/* Features Section */}
    <section className="section-padding bg-cream">
      <div className="max-w-7xl mx-auto container-padding">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl font-bold text-text-dark mb-6">
            Why Choose College Hub?
          </h2>
          <p className="text-lg text-text-medium max-w-2xl mx-auto">
            Built specifically for college students, by college students. Safe, simple, and trusted.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="feature-icon mx-auto mb-6">
              <Shield className="h-6 w-6" />
            </div>
            <h3 className="font-semibold text-text-dark mb-3 text-lg">Safe & Secure</h3>
            <p className="text-text-light">College email verification ensures you're only dealing with fellow students</p>
          </div>
          
          <div className="text-center">
            <div className="feature-icon mx-auto mb-6">
              <Zap className="h-6 w-6" />
            </div>
            <h3 className="font-semibold text-text-dark mb-3 text-lg">Quick & Easy</h3>
            <p className="text-text-light">Post items in seconds and connect with buyers instantly</p>
          </div>
          
          <div className="text-center">
            <div className="feature-icon mx-auto mb-6">
              <Users className="h-6 w-6" />
            </div>
            <h3 className="font-semibold text-text-dark mb-3 text-lg">Campus Community</h3>
            <p className="text-text-light">Build connections and help your fellow students</p>
          </div>
          
          <div className="text-center">
            <div className="feature-icon mx-auto mb-6">
              <Heart className="h-6 w-6" />
            </div>
            <h3 className="font-semibold text-text-dark mb-3 text-lg">Student Friendly</h3>
            <p className="text-text-light">No fees, no hassle - just students helping students</p>
          </div>
        </div>
      </div>
    </section>
    
    {/* CTA Section */}
    <section className="section-padding">
      <div className="max-w-4xl mx-auto container-padding text-center">
        <div className="card-professional p-12">
          <h2 className="font-display text-3xl font-bold text-text-dark mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-lg text-text-medium mb-8">
            Join hundreds of students already using College Hub to buy, sell, and connect.
          </p>
          <button 
            onClick={onEnterApp}
            className="btn-primary text-lg px-8 py-4 inline-flex items-center gap-3"
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
    <div className="min-h-screen bg-off-white">
      {/* Header */}
      <header className="header-professional sticky top-0 z-30">
        <div className="max-w-7xl mx-auto container-padding py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="feature-icon">
                <BookOpen className="h-6 w-6" />
              </div>
              <h1 className="font-display text-2xl font-bold text-text-dark">
                College Hub
              </h1>
            </div>
            
            <div className="flex items-center gap-4">
              <button
                onClick
