"use client";
import React, { useState } from 'react';
import { ChevronDown, Filter } from 'lucide-react';
import Avatar from '@/assets/avatars/3d_avatar_3.png';

type Tickers = {
  [key: string]: boolean;
};

const AllStudentsTable = () => {
  const [tickers, setTickers] = useState<Tickers>({});
  const [filterBy, setFilterBy] = useState('all');
  const [sortBy, setSortBy] = useState('name-asc');

  const students = [
    {
      admissionNo: 'AD11223344',
      rollNo: '1234',
      name: 'Ryan',
      profileImage: Avatar.src,
      class: 'VII',
      section: 'A',
      gender: 'Male',
      status: 'Active',
      dateOfJoin: '22 Jan 2024',
      dateOfBirth: '06 Mar 2011',
      paid: true
    },
    {
      admissionNo: 'AD11223345',
      rollNo: '1235',
      name: 'Emma',
      profileImage: Avatar.src,
      class: 'VII',
      section: 'A',
      gender: 'Female',
      status: 'Active',
      dateOfJoin: '22 Jan 2024',
      dateOfBirth: '15 Apr 2011',
      paid: false
    },
    {
      admissionNo: 'AD11223346',
      rollNo: '1236',
      name: 'Liam',
      profileImage: Avatar.src,
      class: 'VII',
      section: 'B',
      gender: 'Male',
      status: 'Inactive',
      dateOfJoin: '22 Jan 2024',
      dateOfBirth: '20 May 2011',
      paid: true
    },
    {
      admissionNo: 'AD11223347',
      rollNo: '1237',
      name: 'Olivia',
      profileImage: Avatar.src,
      class: 'VIII',
      section: 'A',
      gender: 'Female',
      status: 'Active',
      dateOfJoin: '22 Jan 2024',
      dateOfBirth: '30 Jun 2010',
      paid: false
    },
    {
      admissionNo: 'AD11223348',
      rollNo: '1238',
      name: 'Noah',
      profileImage: Avatar.src,
      class: 'VIII',
      section: 'B',
      gender: 'Male',
      status: 'Active',
      dateOfJoin: '22 Jan 2024',
      dateOfBirth: '12 Jul 2010',
      paid: true
    },
    {
      admissionNo: 'AD11223349',
      rollNo: '1239',
      name: 'Ava',
      profileImage: Avatar.src,
      class: 'VII',
      section: 'C',
      gender: 'Female',
      status: 'Inactive',
      dateOfJoin: '22 Jan 2024',
      dateOfBirth: '25 Aug 2011',
      paid: false
    },
  ];

  const handleTickerClick = (studentIndex: number, tickerIndex: number) => {
    setTickers(prev => ({
      ...prev,
      [`${studentIndex}-${tickerIndex}`]: !prev[`${studentIndex}-${tickerIndex}`]
    }));
  };

  return (
    <div className="bg-white shadow-lg">
      <div className="flex justify-between items-center p-6">
        <h1 className="text-xl font-semibold text-gray-800">Students List</h1>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <div className="border border-gray-200 py-1 px-2">
            <span className="text-sm text-gray-600">01/01/2025 - 31/01/2025</span>

            </div>
            <div className="relative">
              <select 
                value={filterBy}
                onChange={(e) => setFilterBy(e.target.value)}
                className="appearance-none bg-white border rounded px-3 py-1 pr-8 text-sm text-gray-600 cursor-pointer hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="all">Fiters</option>
                <option value="active">Active</option>
                <option value="inactive">Inactive</option>
                <option value="paid">Paid</option>
                <option value="unpaid">Unpaid</option>
              </select>
              <Filter className="w-4 h-4 absolute right-2 top-1/2 transform -translate-y-1/2 pointer-events-none text-gray-400" />
            </div>
          </div>
          <div className="relative">
            <select 
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="appearance-none bg-white border rounded px-3 py-1 pr-8 text-sm text-gray-600 cursor-pointer hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="name-asc">Sort by A-Z</option>
              <option value="name-desc">Sort by Z-A</option>
              <option value="date-asc">Date Ascending</option>
              <option value="date-desc">Date Descending</option>
            </select>
            <ChevronDown className="w-4 h-4 absolute right-2 top-1/2 transform -translate-y-1/2 pointer-events-none text-gray-400" />
          </div>
        </div>
      </div>
      <div className="border-b border-gray-200"></div>

      {/* Rest of the component remains the same */}
      <div className="flex items-center justify-between mb-4 p-6">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <span className="text-sm text-gray-600">Row Per Page</span>
            <select className="border rounded px-2 py-1 text-sm">
              <option>10</option>
            </select>
          </div>
          <span className="text-sm text-gray-600">Entries</span>
        </div>
        <input
          type="search"
          placeholder="Search"
          className="border rounded px-3 py-1 text-sm"
        />
      </div>

      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="bg-gray-100 w-full">
              <th className="w-4 p-4 -mx-6">
                <input type="checkbox" className="rounded" />
              </th>
              <th className="p-4 text-left text-sm font-semibold text-gray-600">Admission No</th>
              <th className="p-4 text-left text-sm font-semibold text-gray-600">Roll No</th>
              <th className="p-4 text-left text-sm font-semibold text-gray-600">Name</th>
              <th className="p-4 text-left text-sm font-semibold text-gray-600">Class</th>
              <th className="p-4 text-left text-sm font-semibold text-gray-600">Section</th>
              <th className="p-4 text-left text-sm font-semibold text-gray-600">Gender</th>
              <th className="p-4 text-left text-sm font-semibold text-gray-600">Status</th>
              <th className="p-4 text-left text-sm font-semibold text-gray-600">Date of Join</th>
              <th className="p-4 text-left text-sm font-semibold text-gray-600">Date of Birth</th>
              <th className="p-4 text-left text-sm font-semibold text-gray-600">Action</th>
            </tr>
          </thead>
          <tbody className="text-sm font-medium text-[#515B73]">
            {students.map((student, index) => (
              <tr key={index} className="border-b">
                <td className="p-4">
                  <input type="checkbox" className="rounded" />
                </td>
                <td className="p-4">
                  <span className="text-blue-600">{student.admissionNo}</span>
                </td>
                <td className="p-4">{student.rollNo}</td>
                <td className="p-4">
                  <div className="flex items-center gap-2">
                    <img 
                      src={student.profileImage} 
                      alt={`${student.name}'s profile`}
                      className="w-8 h-8 rounded-full object-cover"
                    />
                    <span>{student.name}</span>
                  </div>
                </td>
                <td className="p-4">{student.class}</td>
                <td className="p-4">{student.section}</td>
                <td className="p-4">{student.gender}</td>
                <td className="p-4">
                  <span className={`px-2 py-1 rounded text-xs ${
                    student.status === 'Active' 
                      ? 'bg-green-100 text-green-600' 
                      : 'bg-red-100 text-red-600'
                  }`}>
                    {student.status}
                  </span>
                </td>
                <td className="p-4">{student.dateOfJoin}</td>
                <td className="p-4">{student.dateOfBirth}</td>
                <td className="p-4">
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-2">
                      {[0, 1, 2].map((tickerIndex) => (
                        <button
                          key={tickerIndex}
                          onClick={() => handleTickerClick(index, tickerIndex)}
                          className={`w-8 h-8 rounded-full border-2 border-gray-200 cursor-pointer transition-colors ${
                            tickers[`${index}-${tickerIndex}`] 
                              ? 'bg-blue-500 border-blue-500' 
                              : 'bg-white'
                          }`}
                        />
                      ))}
                    </div>
                    <button className={`px-4 py-1 rounded text-white ${
                      student.paid ? 'bg-green-500' : 'bg-red-500'
                    }`}>
                      {student.paid ? 'Paid' : 'Due'}
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="flex justify-end p-6">
        <div className="flex items-center gap-2">
          <button className="px-3 py-1 text-sm text-gray-600 hover:bg-gray-100 rounded">Prev</button>
          <button className="px-3 py-1 text-sm text-white bg-blue-600 rounded">1</button>
          <button className="px-3 py-1 text-sm text-gray-600 hover:bg-gray-100 rounded">2</button>
          <button className="px-3 py-1 text-sm text-gray-600 hover:bg-gray-100 rounded">Next</button>
        </div>
      </div>
    </div>
  );
};

export default AllStudentsTable;