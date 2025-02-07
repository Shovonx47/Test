import BasicInformation from '@/components/student/BasicInformation';
import ParentsInformation from '@/components/student/ParentsInformation';
import Documents from '@/components/student/Documents';
import PrimaryContact from '@/components/student/PrimaryContact';
import Address from '@/components/student/Address';
import PreviousSchool from '@/components/student/PreviousSchool';
import BankDetails from '@/components/student/BankDetails';
import MedicalHistory from '@/components/student/MedicalHistory';
import SiblingInformation from '@/components/student/SiblingInformation';
import HostelTransportInfo from '@/components/student/HostelTransportInfo';
import OtherInfo from '@/components/student/OtherInfo';
import { IoSearchOutline } from "react-icons/io5";
import Avatar from '@/assets/avatars/3d_avatar_3.png';

export default function StudentDetails() {
  const studentData = {
    avatar: Avatar,
    name: "Maria Shekh",
    id: "AZ09877",
    rollNo: "777"
  };

  const siblingsData = [
    {
      id: "1",
      avatar: Avatar,
      name: "Sabab Shekh",
      class: "III, B"
    },
    {
      id: "2",
      avatar: Avatar,
      name: "Mehrima Shekh",
      class: "III, B"
    }
  ];

  const parentsData = [
    {
      id: "1",
      avatar: Avatar,
      name: "Rayan Shekh",
      relation: "Father",
      phone: "+880174545454",
      email: "rayan@example.com"
    },
    {
      id: "2",
      avatar: Avatar,
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
        <div className="relative w-2/5">
          <input
            type="text"
            placeholder="Search"
            className="w-full max-w-full px-4 py-2 pr-10 bg-white border rounded-lg focus:outline-none focus:border-gray-400"
          />
          <IoSearchOutline className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400" />
        </div>
      </div>

      {/* Rest of the component remains the same */}
      <div className="flex justify-between items-center mb-6">
        <div className="flex flex-col gap-1">
          <span className="font-bold text-headerText">Student Details</span>
          <span className="text-dataText">Dashboard / Student</span>
        </div>
        <div className="flex gap-3">
          <button className="px-4 py-2 bg-gray-100 rounded">Login Details</button>
          <button className="px-4 py-2 bg-[#48CB45] text-white rounded">Edit Student</button>
        </div>
      </div>

      <div className="grid grid-cols-[300px,1fr] gap-6">
        <div className="space-y-6">
          <BasicInformation student={studentData} />
          <SiblingInformation siblings={siblingsData} />
          <HostelTransportInfo />
        </div>

        <div className="space-y-6">
          <div className="mb-6">
            <div className="flex space-x-6 border-b">
              {tabs.map((tab) => (
                <button
                  key={tab}
                  className={`pb-4 text-sm font-medium ${tab === 'Student Details'
                      ? 'text-blue-600 border-b-2 border-blue-600'
                      : 'text-dataText hover:text-headerText'
                    }`}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>

          <ParentsInformation parents={parentsData} />

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 shadow-sm">
            <Documents documents={documentsData} />
            <PrimaryContact contact={contactData} />
            <Address addresses={addressesData} />
          </div>
          <PreviousSchool school={schoolData} />
          <div className="grid grid-cols-2 gap-6">
            <BankDetails bank={bankData} />
            <MedicalHistory medical={medicalData} />
          </div>
          <OtherInfo />
        </div>
      </div>
    </div>
  );
}