import React from 'react';
import { User, Clock } from 'lucide-react';

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

export default MarketplaceGrid; 