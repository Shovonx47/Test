"use client";
import { IoSearchOutline } from "react-icons/io5";
import ProfileCard from "@/components/Students/Students Dashboard/ProfileCard";
import AttendanceSection from "@/components/Students/Students Dashboard/AttendanceSection";
import ScheduleSection from "@/components/Students/Students Dashboard/ScheduleSection";
import PerformanceSection from "@/components/Students/Students Dashboard/PerformanceSection";
import LeaveStatusSection from "@/components/Students/Students Dashboard/LeaveStatusSection";
import ExamResultsSection from "@/components/Students/Students Dashboard/ExamResultsSection";
import FeesReminderSection from "@/components/Students/Students Dashboard/FeesReminderSection";
import ClassFacultiesSection from "@/components/Students/Students Dashboard/ClassFacultiesSection";
import NoticeBoardSection from "@/components/Students/Students Dashboard/NoticeBoardSection";
import SyllabusSection from "@/components/Students/Students Dashboard/SyllabusSection";

export default function StudentDashboard() {
  return (
    <div className="p-6 bg-gray-50 min-h-screen">
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

      <div className="grid grid-cols-12 gap-6">
        {/* Profile Card - Full Width */}
        <div className="col-span-4">
          <ProfileCard />
        </div>

        {/* Main Content - Left Side */}
        <div className="col-span-12 lg:col-span-8 space-y-6">
          <div className="grid grid-cols-2 gap-6">
            <AttendanceSection />
            <ScheduleSection />
          </div>
          <PerformanceSection />
          <div className="grid grid-cols-2 gap-6">
            <LeaveStatusSection />
            <ExamResultsSection />
          </div>
          <ClassFacultiesSection />
        </div>

        {/* Sidebar - Right Side */}
        <div className="col-span-12 lg:col-span-4 space-y-6">
          <FeesReminderSection />
          <NoticeBoardSection />
          <SyllabusSection />
        </div>
      </div>
    </div>
  )
}