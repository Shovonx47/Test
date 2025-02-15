import React from 'react';
import { ChevronDown } from 'lucide-react';
import Avatar from '@/assets/avatars/3d_avatar_3.png';

interface Student {
  id: string;
  name: string;
  class: string;
  section: string;
  marks: number;
  cgpa: number;
  status: 'Pass' | 'Fail';
  avatarUrl: string;
}

const StudentMarksTable = () => {
  const students: Student[] = [
    {
      id: '112233',
      name: 'Ruby',
      class: 'III',
      section: 'A',
      marks: 89,
      cgpa: 4.2,
      status: 'Pass',
      avatarUrl: Avatar.src
    },
    {
      id: '112233',
      name: 'Hashem',
      class: 'IV',
      section: 'B',
      marks: 88,
      cgpa: 3.2,
      status: 'Pass',
      avatarUrl: Avatar.src
    },
    {
      id: '112233',
      name: 'Gina',
      class: 'II',
      section: 'A',
      marks: 69,
      cgpa: 4.5,
      status: 'Pass',
      avatarUrl: Avatar.src
    },
    {
      id: '112233',
      name: 'Sammy',
      class: 'I',
      section: 'B',
      marks: 21,
      cgpa: 4.5,
      status: 'Pass',
      avatarUrl: Avatar.src
    }
  ];

  return (
    <div className="p-6 border border-gray-200">
      <div className="mb-6">
        <h1 className="text-xl font-semibold mb-4">Student Marks</h1>
        <div className="flex gap-4">
          <button className="flex items-center gap-2">
            All Classes
            <ChevronDown size={16} />
          </button>
          <button className="flex items-center gap-2">
            All Sections
            <ChevronDown size={16} />
          </button>
        </div>
      </div>

      <div className="bg-white shadow -mx-6">
        <table className="w-full">
          <thead>
            <tr className="bg-orange-50 text-md">
              <th className="px-6 py-4 text-left">ID</th>
              <th className="px-6 py-4 text-left">Name</th>
              <th className="px-6 py-4 text-left">Class</th>
              <th className="px-6 py-4 text-left">Section</th>
              <th className="px-6 py-4 text-left">Marks %</th>
              <th className="px-6 py-4 text-left">CGPA</th>
              <th className="px-6 py-4 text-left">Status</th>
            </tr>
          </thead>
          <tbody>
            {students.map((student, index) => (
              <tr key={index} className="border-t">
                <td className="px-6 py-4">{student.id}</td>
                <td className="px-6 py-4">
                  <div className="flex items-center gap-3">
                    <img
                      src={student.avatarUrl}
                      alt={student.name}
                      className="w-8 h-8 rounded-full"
                    />
                    {student.name}
                  </div>
                </td>
                <td className="px-6 py-4">{student.class}</td>
                <td className="px-6 py-4">{student.section}</td>
                <td className="px-6 py-4">{student.marks}%</td>
                <td className="px-6 py-4">{student.cgpa}</td>
                <td className="px-6 py-4">
                  <span className="px-3 py-1 text-sm text-white bg-green-500 rounded-sm">
                    {student.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default StudentMarksTable;