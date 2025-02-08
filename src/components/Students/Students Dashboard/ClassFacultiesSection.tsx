"use client";
import Image from "next/image";
import { IoMail, IoChatbubble } from "react-icons/io5";

const ClassFacultiesSection = () => {
  const faculties = [
    {
      name: "Sarah",
      subject: "Chemistry",
      image: "/faculty1.jpg",
    },
    {
      name: "Rekha",
      subject: "Hindi",
      image: "/faculty2.jpg",
    },
    {
      name: "Kamal",
      subject: "Mathematics",
      image: "/faculty3.jpg",
    },
    {
      name: "Shivam",
      subject: "Physics",
      image: "/faculty4.jpg",
    },
    {
      name: "Sushant",
      subject: "English",
      image: "/faculty5.jpg",
    },
  ];

  return (
    <div className="bg-white p-6 rounded-lg shadow">
      <h2 className="text-lg font-semibold mb-4">Class Faculties</h2>
      <div className="flex gap-6 overflow-x-auto pb-2">
        {faculties.map((faculty, index) => (
          <div key={index} className="flex-shrink-0 text-center">
            <div className="relative w-16 h-16 mx-auto mb-2">
              <Image
                src={faculty.image}
                alt={faculty.name}
                fill
                className="rounded-full object-cover"
              />
            </div>
            <h4 className="font-medium text-sm">{faculty.name}</h4>
            <p className="text-xs text-gray-500">{faculty.subject}</p>
            <div className="flex justify-center gap-2 mt-2">
              <button className="p-1.5 bg-gray-100 rounded-full hover:bg-gray-200">
                <IoMail className="text-gray-600" />
              </button>
              <button className="p-1.5 bg-gray-100 rounded-full hover:bg-gray-200">
                <IoChatbubble className="text-gray-600" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ClassFacultiesSection;
