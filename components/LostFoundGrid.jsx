import React from 'react';
import { AlertCircle, CheckCircle, MessageCircle } from 'lucide-react';

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

export default LostFoundGrid; 