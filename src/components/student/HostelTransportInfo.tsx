"use client";
import React, { useState } from 'react';

const HostelTransportInfo = () => {
  const [activeTab, setActiveTab] = useState('Hostel');
  const tabs = ['Hostel', 'Transportation'];

  return (
    <div className="bg-white rounded-lg shadow p-6">
      {/* Tab Navigation */}
      <div className="mb-6">
        <div className="flex space-x-6 border-b">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`pb-4 text-sm font-medium ${
                tab === activeTab
                  ? 'text-blue-600 border-b-2 border-blue-600'
                  : 'text-headerText hover:text-gray-700'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      {/* Content Section */}
      {activeTab === 'Hostel' && (
        <div className="space-y-2">
          <div className="text-headerText font-semibold">MI-Hostel, Floor-05</div>
          <div className="flex items-center">
            <span className="text-blue-600">Room No :</span>
            <span className="text-blue-600 ml-1">10</span>
          </div>
        </div>
      )}

      {activeTab === 'Transportation' && (
        <div className="text-gray-500">
          Transportation information will be displayed here
        </div>
      )}
    </div>
  );
};

export default HostelTransportInfo;