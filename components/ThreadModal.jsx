import React from 'react';
import { X } from 'lucide-react';

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

export default ThreadModal; 