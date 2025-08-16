import React, { useState } from 'react';
import {
  Search, Plus, MessageCircle, Clock, User, BookOpen, AlertCircle, CheckCircle, X, 
  Star, Heart, ShoppingBag, Users, Shield, Zap, Filter
} from 'lucide-react';

// Utility function for class merging (from Aceternity UI)
function cn(...inputs) {
  // Simple implementation without external dependencies
  return inputs.filter(Boolean).join(' ');
}

// Background Lines Component (Aceternity UI style)
// Background Lines Component (Aceternity UI style)
// Background Lines Component (Aceternity UI style)
// Background Lines Component (Aceternity UI style)
const BackgroundLines = ({ children, className, svgOptions, ...props }) => {
  const paths = [
    "M720 450C720 450 742.459 440.315 755.249 425.626C768.039 410.937 778.88 418.741 789.478 401.499C800.076 384.258 817.06 389.269 826.741 380.436C836.423 371.603 851.957 364.826 863.182 356.242C874.408 347.657 877.993 342.678 898.867 333.214C919.741 323.75 923.618 319.88 934.875 310.177C946.133 300.474 960.784 300.837 970.584 287.701C980.384 274.564 993.538 273.334 1004.85 263.087C1016.15 252.84 1026.42 250.801 1038.22 242.1C1050.02 233.399 1065.19 230.418 1074.63 215.721C1084.07 201.024 1085.49 209.128 1112.65 194.884C1139.8 180.64 1132.49 178.205 1146.43 170.636C1160.37 163.066 1168.97 158.613 1181.46 147.982C1193.95 137.35 1191.16 131.382 1217.55 125.645C1243.93 119.907 1234.19 118.899 1254.53 100.846C1274.86 82.7922 1275.12 92.8914 1290.37 76.09C1305.62 59.2886 1313.91 62.1868 1323.19 56.7536C1332.48 51.3204 1347.93 42.8082 1361.95 32.1468C1375.96 21.4855 1374.06 25.168 1397.08 10.1863C1420.09 -4.79534 1421.41 -3.16992 1431.52 -15.0078",
    "M720 450C720 450 741.044 435.759 753.062 410.636C765.079 385.514 770.541 386.148 782.73 370.489C794.918 354.83 799.378 353.188 811.338 332.597C823.298 312.005 825.578 306.419 843.707 295.493C861.837 284.568 856.194 273.248 877.376 256.48C898.558 239.713 887.536 227.843 909.648 214.958C931.759 202.073 925.133 188.092 941.063 177.621C956.994 167.151 952.171 154.663 971.197 135.041C990.222 115.418 990.785 109.375 999.488 96.1291C1008.19 82.8827 1011.4 82.2181 1032.65 61.8861C1053.9 41.5541 1045.74 48.0281 1064.01 19.5798C1082.29 -8.86844 1077.21 -3.89415 1093.7 -19.66C1110.18 -35.4258 1105.91 -46.1146 1127.68 -60.2834C1149.46 -74.4523 1144.37 -72.1024 1154.18 -97.6802C1163.99 -123.258 1165.6 -111.332 1186.21 -135.809C1206.81 -160.285 1203.29 -160.861 1220.31 -177.633C1237.33 -194.406 1236.97 -204.408 1250.42 -214.196",
    "M720 450C720 450 712.336 437.768 690.248 407.156C668.161 376.544 672.543 394.253 665.951 365.784C659.358 337.316 647.903 347.461 636.929 323.197C625.956 298.933 626.831 303.639 609.939 281.01C593.048 258.381 598.7 255.282 582.342 242.504C565.985 229.726 566.053 217.66 559.169 197.116C552.284 176.572 549.348 171.846 529.347 156.529C509.345 141.211 522.053 134.054 505.192 115.653C488.33 97.2527 482.671 82.5627 473.599 70.7833C464.527 59.0039 464.784 50.2169 447 32.0721C429.215 13.9272 436.29 0.858563 423.534 -12.6868C410.777 -26.2322 407.424 -44.0808 394.364 -56.4916C381.303 -68.9024 373.709 -72.6804 365.591 -96.1992C357.473 -119.718 358.364 -111.509 338.222 -136.495C318.08 -161.481 322.797 -149.499 315.32 -181.761C307.843 -214.023 294.563 -202.561 285.795 -223.25C277.026 -243.94 275.199 -244.055 258.602 -263.871"
  ];

  const colors = [
    "#46A5CA", "#8C2F2F", "#4FAE4D", "#D6590C", "#811010", "#247AFB", "#A534A0", "#A8A438",
    "#D6590C", "#46A29C", "#670F6D", "#D7C200", "#59BBEB", "#504F1C", "#55BC54", "#4D3568",
    "#9F39A5", "#363636", "#860909", "#6A286F", "#604483"
  ];

  return (
    <div className={cn("h-screen w-full bg-white dark:bg-black relative flex items-center justify-center", className)} {...props}>
      <svg
        viewBox="0 0 1440 900"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute inset-0 w-full h-full opacity-100"
        style={{ animation: 'fadeIn 1s ease-out' }}
      >
        {paths.map((path, idx) => (
          <path
            key={`path-${idx}`}
            d={path}
            stroke={colors[idx]}
            strokeWidth="2.3"
            strokeLinecap="round"
            fill="none"
            style={{
              strokeDasharray: "50 800",
              strokeDashoffset: "800",
              animation: `pathAnimation${idx} ${svgOptions?.duration || 10}s linear infinite`,
              animationDelay: `${Math.random() * 10}s`
            }}
          />
        ))}
        {/* Duplicate paths for more density */}
        {paths.map((path, idx) => (
          <path
            key={`path-duplicate-${idx}`}
            d={path}
            stroke={colors[idx]}
            strokeWidth="2.3"
            strokeLinecap="round"
            fill="none"
            style={{
              strokeDasharray: "50 800",
              strokeDashoffset: "800",
              animation: `pathAnimation${idx} ${svgOptions?.duration || 10}s linear infinite`,
              animationDelay: `${Math.random() * 10 + 5}s`
            }}
          />
        ))}
      </svg>
      
      <div className="relative z-20">
        {children}
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        
        ${paths.map((_, idx) => `
          @keyframes pathAnimation${idx} {
            0% { 
              stroke-dashoffset: 800; 
              stroke-dasharray: 50 800; 
              opacity: 0; 
            }
            25% { 
              stroke-dashoffset: 0; 
              stroke-dasharray: 20 800; 
              opacity: 1; 
            }
            75% { 
              stroke-dashoffset: 0; 
              stroke-dasharray: 20 800; 
              opacity: 1; 
            }
            100% { 
              stroke-dashoffset: 0; 
              stroke-dasharray: 20 800; 
              opacity: 0; 
            }
          }
        `).join('')}
      `}</style>
    </div>
  );
};
// Landing Page Component
const LandingPage = ({ onEnterApp }) => (
  <div className="min-h-screen bg-white">
    {/* Hero Section with Aceternity UI BackgroundLines */}
    <BackgroundLines className="flex items-center justify-center w-full flex-col px-4">
      <h2 className="bg-clip-text text-transparent text-center bg-gradient-to-b from-neutral-900 to-neutral-700 dark:from-neutral-600 dark:to-white text-2xl md:text-4xl lg:text-7xl font-sans py-2 md:py-10 relative z-20 font-bold tracking-tight">
        College Hub, <br /> Your Campus Marketplace.
      </h2>
      <p className="max-w-xl mx-auto text-sm md:text-lg text-neutral-700 dark:text-neutral-400 text-center mb-8">
        Buy, sell, lend, and find lost items within your college community. 
        Connect with fellow students in a safe and trusted environment.
      </p>
      
      <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16 relative z-20">
        <button 
          onClick={onEnterApp}
          className="px-8 py-4 bg-black dark:bg-white dark:text-black text-white rounded-lg font-medium transition-colors duration-200 flex items-center gap-2 justify-center"
        >
          <ShoppingBag className="h-5 w-5" />
          Enter Marketplace
        </button>
        <button className="px-8 py-4 bg-white hover:bg-gray-50 border border-gray-200 text-gray-900 rounded-lg font-medium transition-colors duration-200 flex items-center gap-2 justify-center">
          <BookOpen className="h-5 w-5" />
          Learn More
        </button>
      </div>
    </BackgroundLines>
    
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
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="sticky top-0 z-30 bg-white/80 backdrop-blur-lg border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                <BookOpen className="h-6 w-6 text-blue-600" />
              </div>
              <h1 className="text-2xl font-bold text-gray-900">
                College Hub
              </h1>
            </div>
            
            <div className="flex items-center gap-4">
              <button
                onClick={() => setActiveTab('marketplace')}
                className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                  activeTab === 'marketplace'
                    ? 'bg-blue-600 text-white'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                Marketplace
              </button>
              <button
                onClick={() => setActiveTab('lostfound')}
                className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                  activeTab === 'lostfound'
                    ? 'bg-blue-600 text-white'
                    : 'text-gray-600 hover:text-gray-900'
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
        <div className="mb-8 bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
          <div className="flex flex-col lg:flex-row gap-4 items-stretch lg:items-center">
            {/* Search */}
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder={`Search ${activeTab === 'marketplace' ? 'marketplace items' : 'lost & found items'}...`}
                className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            
            {/* Filter Toggle */}
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="px-4 py-3 bg-gray-100 border border-gray-200 rounded-lg text-gray-700 hover:bg-gray-200 transition-colors flex items-center gap-2"
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
            <div className="mt-6 pt-6 border-t border-gray-200">
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
                  className="px-4 py-2 text-sm bg-gray-100 border border-gray-200 rounded-lg text-gray-700 hover:bg-gray-200 transition-colors"
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

export default CollegeMarketplace;
