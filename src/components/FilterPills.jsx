import React from 'react';

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

export default FilterPills; 