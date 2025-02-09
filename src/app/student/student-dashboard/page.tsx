import React from 'react';
import { IoSearchOutline } from 'react-icons/io5';
import ProfileCard from "@/components/Students/Students Dashboard/ProfileCard";
import TodaysClasses from "@/components/Students/Students Dashboard/TodaysClasses";
import StatusIndicators from "@/components/Students/Students Dashboard/StatusIndicators";
import AttendanceSection from "@/components/Students/Students Dashboard/AttendanceSection";
import LeaveStatusSection from "@/components/Students/Students Dashboard/LeaveStatusSection";
import ExamResultsSection from "@/components/Students/Students Dashboard/ExamResultsSection";
import ClassFacultiesSection from "@/components/Students/Students Dashboard/ClassFacultiesSection";
import NoticeBoardSection from "@/components/Students/Students Dashboard/NoticeBoardSection";
import PerformanceSection from "@/components/Students/Students Dashboard/PerformanceSection";
import ScheduleSection from "@/components/Students/Students Dashboard/ScheduleSection";

export default function StudentDashboard() {
  return (
    <div className="p-6 bg-gray-50 min-h-screen">
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

      {/* Main Grid Layout */}
      <div className="grid grid-cols-12 gap-6">
        {/* Left Column */}
        <div className="col-span-4">
          <ProfileCard />
          <div className="mt-6">
            <TodaysClasses />
          </div>
          <div className="mt-6">
            <StatusIndicators />
          </div>
          <div className="mt-6 -mr-[100%]">
            <div className="col-span-8">
              <PerformanceSection />
            </div>
          </div>
          <div className="mt-6">
            <LeaveStatusSection />
          </div>
        </div>

        {/* Middle Column */}
        <div className="col-span-4">
          <AttendanceSection />
          <div className="mt-[42rem]">
            <ExamResultsSection />
          </div>
        </div>

        {/* Right Column */}
        <div className="col-span-4">
          <ScheduleSection />
        </div>

        {/* Class Faculties - Full Width */}
        <div className="col-span-12">
          <ClassFacultiesSection />
        </div>

        {/* Notice Board - Left Column */}
        <div className="col-span-4">
          <NoticeBoardSection />
        </div>
      </div>
    </div>
  );
}