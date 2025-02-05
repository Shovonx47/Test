import BasicInformation from '@/components/student/BasicInformation';
import ParentsInformation from '@/components/student/ParentsInformation';
import Documents from '@/components/student/Documents';
import PrimaryContact from '@/components/student/PrimaryContact';
import Address from '@/components/student/Address';
import PreviousSchool from '@/components/student/PreviousSchool';
import BankDetails from '@/components/student/BankDetails';
import MedicalHistory from '@/components/student/MedicalHistory';
import SiblingInformation from '@/components/student/SiblingInformation';
import { IoSearchOutline } from "react-icons/io5";

export default function StudentDetails() {
  const studentData = {
    avatar: "/assets/avatars/3d_avatar_3.png",
    name: "Maria Shekh",
    id: "AZ09877",
    rollNo: "777"
  };

  const siblingsData = [
    {
      id: "1",
      avatar: "/assets/avatars/3d_avatar_18.png",
      name: "Sabab Shekh",
      class: "III, B"
    }
  ];

  const parentsData = [
    {
      id: "1",
      avatar: "/assets/avatars/3d_avatar_21.png",
      name: "Rayan Shekh",
      relation: "Father",
      phone: "+880174545454",
      email: "rayan@example.com"
    },
    {
      id: "2",
      avatar: "/images/mother.jpg",
      name: "Mohua Majid",
      relation: "Mother",
      phone: "+880175050505",
      email: "mohua@example.com"
    }
  ];

  const documentsData = [
    { name: "Birth Certificate.pdf" },
    { name: "Transfer Certificate.pdf" }
  ];

  const tabs = [
    'Student Details',
    'Leave & Attendance',
    'Fees',
    'Exam & Results',
    'Library'
  ];

  const contactData = {
    phone: "+880174545454",
    email: "rayan@example.com"
  };

  const addressesData = {
    current: "01 Block-A, Newtown, Jashore",
    permanent: "01 Block-A, Newtown, Jashore"
  };

  const schoolData = {
    name: "Jashore Govt. Girls High School",
    address: "Shahid Sarak Road, Jashore"
  };

  const bankData = {
    name: "City Bank",
    branch: "Jashore",
    ifsc: "CB15012015"
  };

  const medicalData = {
    allergies: "None",
    medications: "-"
  };

  return (
    <div className="p-6">
      {/* Search Bar */}
      <div className="mb-6">
        <div className="relative flex items-center">
          <input
            type="text"
            placeholder="Search"
            className="w-full max-w-md px-4 py-2 pr-10 bg-white border rounded-lg focus:outline-none focus:border-gray-400"
          />
          <IoSearchOutline className="absolute right-3 text-gray-400 w-5 h-5" />
        </div>
      </div>

      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <div className="flex flex-col gap-1 text-gray-500">
          <span className="font-bold">Student Details</span>
          <span>Dashboard / Student</span>
        </div>
        <div className="flex gap-3">
          <button className="px-4 py-2 bg-gray-100 rounded">Login Details</button>
          <button className="px-4 py-2 bg-[#48CB45] text-white rounded">Edit Student</button>
        </div>
      </div>

      {/* Content */}
      <div className="grid grid-cols-[300px,1fr] gap-6">
        <div className="space-y-6">
          <BasicInformation student={studentData} />
          <SiblingInformation siblings={siblingsData} />
        </div>
        
        <div className="space-y-6">
          {/* Tabs moved here, just above ParentsInformation */}
          <div className="mb-6">
            <div className="flex space-x-6 border-b">
              {tabs.map((tab) => (
                <button
                  key={tab}
                  className={`pb-4 text-sm font-medium ${
                    tab === 'Student Details'
                      ? 'text-blue-600 border-b-2 border-blue-600'
                      : 'text-gray-500 hover:text-gray-700'
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>

          <ParentsInformation parents={parentsData} />
          <div className="grid grid-cols-2 gap-6">
            <Documents documents={documentsData} />
            <PrimaryContact contact={contactData} />
          </div>
          <Address addresses={addressesData} />
          <PreviousSchool school={schoolData} />
          <div className="grid grid-cols-2 gap-6">
            <BankDetails bank={bankData} />
            <MedicalHistory medical={medicalData} />
          </div>
        </div>
      </div>
    </div>
  );
}