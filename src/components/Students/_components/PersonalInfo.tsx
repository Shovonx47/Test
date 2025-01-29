
"use client"
import { Input } from "@/components/ui/input";

import { Controller } from "react-hook-form";
import { ImagePlus, InfoIcon } from "lucide-react";
import DynamicSelect from "@/components/Reusable/DynamicSelect";
import { DatePickerForm } from "@/components/Reusable/DatePickerForm";
import { useState } from "react";


const academicYears = ["June 2024/25", "July 2025/26"];
const statuses = ["Active", "Inactive"];
const genders = ["Male", "Female", "Other"];
const classes = ["I", "II", "III"];
const sections = ["A", "B", "C"];
const bloodGroups = ["O +ve", "A +ve", "B +ve"];
const houses = ["Red", "Blue"];
const religions = ["Christianity", "Islam", "Hinduism"];
const categories = ["OBC", "General"];
const motherTongues = ["English", "Spanish"];

interface PersonalInfoProps {
    control: any; // control from useForm
    setValue: (name: string, value: any) => void;
}

const PersonalInfo = ({ control, setValue }: PersonalInfoProps) => {


    const [file, setFile] = useState<File | null>(null);

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const selectedFile = e.target.files ? e.target.files[0] : null;
        if (selectedFile) {
            setFile(selectedFile);
        }
    };

    const handleRemove = () => {
        setFile(null);
    };

    return (
        <div className="p-6 bg-white">
            <h2 className="text-xl font-semibold text-gray-800">Add Student</h2>
            <nav className="text-sm text-gray-500 mb-4">
                Dashboard / Students / <span className="text-gray-800">Add Student</span>
            </nav>

            <div className="border rounded-md">
                <div className="p-4 bg-[#E9EDF4] rounded-md rounded-b-none flex items-center gap-2 mb-5">
                    <InfoIcon /> Personal Information
                </div>

                <div className="ml-4">


                    <div className="mt-1 flex items-center">
                        <div className="w-20 h-20 border border-dashed border-gray-300 rounded-sm flex justify-center items-center">
                            {file ? (
                                <img
                                    src={URL.createObjectURL(file)}
                                    alt="Selected image"
                                    className="w-20 h-20 object-cover border border-dashed border-gray-300"
                                />
                            ) : (
                                <label htmlFor="file-upload" className="text-gray-400 flex justify-center items-center"><ImagePlus></ImagePlus> </label>
                            )}
                        </div>
                        <div className="ml-3">
                            <input
                                type="file"
                                accept=".jpg,.jpeg,.png,.svg"
                                className="hidden"
                                id="file-upload"
                                onChange={handleFileChange}
                            />
                            <label
                                htmlFor="file-upload"
                                className="bg-white py-2 px-3 border border-dashed border-gray-300 rounded-sm text-sm leading-4 font-medium text-gray-700 cursor-pointer"
                            >
                                Upload
                            </label>
                            <button
                                type="button"
                                className="ml-3 py-2 px-3 border border-dashed border-gray-300 rounded-sm text-sm leading-4 font-medium text-white bg-blue-500"
                                onClick={handleRemove}
                            >
                                Remove
                            </button>
                            <p className="mt-2 text-xs text-gray-500">
                                Upload image size 4MB, Format JPG, PNG, SVG
                            </p>
                        </div>
                    </div>
                </div>
                <div className="m-4 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
                    {/* Academic Year Select */}
                    <Controller
                        name="academicYear"
                        control={control}
                        render={({ field }) => (
                            <DynamicSelect
                                label="Academic Year"
                                placeholder="Select Academic Year"
                                options={academicYears}
                                value={field.value}
                                onChange={(value: string) => setValue("academicYear", value)} // single value is passed to onChange
                            />
                        )}
                    />
                    {/* Admission Number */}
                    <div>
                        <label className="text-sm text-gray-600">Admission number</label>
                        <Controller
                            name="admissionNumber" // Field name
                            control={control} // Pass control from useForm
                            render={({ field }) => (
                                <Input
                                    {...field} // Spread the field props to connect the input
                                    placeholder="Enter admission number"
                                />
                            )}
                        />

                    </div>

                    {/* Admission Date */}
                    <Controller
                        name="admissionDate"
                        control={control}
                        render={({ field }) => (
                            <DatePickerForm
                                value={field.value ? new Date(field.value) : undefined}
                                onChange={(formattedDate) => setValue("admissionDate", formattedDate)}
                                label="Admission Date"
                            />
                        )}
                    />

                    {/* Roll Number */}
                    <div>
                        <label className="text-sm text-gray-600">Roll number</label>
                        <Controller
                            name="roll" // Field name
                            control={control} // Pass control from useForm
                            render={({ field }) => (
                                <Input
                                    {...field} // Spread the field props to connect the input
                                    placeholder="Enter roll number"
                                />
                            )}
                        />

                    </div>

                    {/* Status Select */}
                    <Controller
                        name="status"
                        control={control}
                        render={({ field }) => (
                            <DynamicSelect
                                label="Status"
                                placeholder="Select Status"
                                options={statuses}
                                value={field.value}
                                onChange={(val) => setValue("status", val)}
                            />
                        )}
                    />

                    {/* First Name */}
                    <div>
                        <label className="text-sm text-gray-600">First name</label>
                        <Controller
                            name="firstName" // Field name
                            control={control} // Pass control from useForm
                            render={({ field }) => (
                                <Input
                                    {...field} // Spread the field props to connect the input
                                    placeholder="Enter first name"
                                />
                            )}
                        />
                    </div>

                    {/* Last Name */}
                    <div>
                        <label className="text-sm text-gray-600">Last name</label>
                        <Controller
                            name="lastName" // Field name
                            control={control} // Pass control from useForm
                            render={({ field }) => (
                                <Input
                                    {...field} // Spread the field props to connect the input
                                    placeholder="Enter last name"
                                />
                            )}
                        />
                    </div>

                    {/* Class Select */}
                    <Controller
                        name="class"
                        control={control}
                        render={({ field }) => (
                            <DynamicSelect
                                label="Class"
                                placeholder="Select Class"
                                options={classes}
                                value={field.value}
                                onChange={(val) => setValue("class", val)}
                            />
                        )}
                    />

                    {/* Section Select */}
                    <Controller
                        name="section"
                        control={control}
                        render={({ field }) => (
                            <DynamicSelect
                                label="Section"
                                placeholder="Select Section"
                                options={sections}
                                value={field.value}
                                onChange={(val) => setValue("section", val)}
                            />
                        )}
                    />

                    {/* Gender Select */}
                    <Controller
                        name="gender"
                        control={control}
                        render={({ field }) => (
                            <DynamicSelect
                                label="Gender"
                                placeholder="Select Gender"
                                options={genders}
                                value={field.value}
                                onChange={(val) => setValue("gender", val)}
                            />
                        )}
                    />

                    {/* Date of Birth */}
                    <Controller
                        name="dob"
                        control={control}
                        render={({ field }) => (
                            <DatePickerForm
                                value={field.value ? new Date(field.value) : undefined}
                                onChange={(formattedDate) => setValue("dob", formattedDate)}
                                label="Date of Birth"
                            />
                        )}
                    />

                    {/* Blood Group Select */}
                    <Controller
                        name="bloodGroup"
                        control={control}
                        render={({ field }) => (
                            <DynamicSelect
                                label="Blood Group"
                                placeholder="Select Blood Group"
                                options={bloodGroups}
                                value={field.value}
                                onChange={(val) => setValue("bloodGroup", val)}
                            />
                        )}
                    />

                    {/* House Select */}
                    <Controller
                        name="house"
                        control={control}
                        render={({ field }) => (
                            <DynamicSelect
                                label="House"
                                placeholder="Select House"
                                options={houses}
                                value={field.value}
                                onChange={(val) => setValue("house", val)}
                            />
                        )}
                    />

                    {/* Religion Select */}
                    <Controller
                        name="religion"
                        control={control}
                        render={({ field }) => (
                            <DynamicSelect
                                label="Religion"
                                placeholder="Select Religion"
                                options={religions}
                                value={field.value}
                                onChange={(val) => setValue("religion", val)}
                            />
                        )}
                    />

                    {/* Category Select */}
                    <Controller
                        name="category"
                        control={control}
                        render={({ field }) => (
                            <DynamicSelect
                                label="Category"
                                placeholder="Select Category"
                                options={categories}
                                value={field.value}
                                onChange={(val) => setValue("category", val)}
                            />
                        )}
                    />

                    <div>
                        <label className="text-sm text-gray-600">Personal contact number</label>
                        <Controller
                            name="contactNumber" // Field name
                            control={control} // Pass control from useForm
                            render={({ field }) => (
                                <Input
                                    {...field} // Spread the field props to connect the input
                                    placeholder="Enter contact number"
                                />
                            )}
                        />

                    </div>

                    <div>
                        <label className="text-sm text-gray-600">Email address</label>
                        <Controller
                            name="email" // Field name
                            control={control} // Pass control from useForm
                            render={({ field }) => (
                                <Input
                                    {...field} // Spread the field props to connect the input
                                    placeholder="Enter email address"
                                />
                            )}
                        />

                    </div>
                    {/* Mother Tongue Select */}
                    <Controller
                        name="motherTongue"
                        control={control}
                        render={({ field }) => (
                            <DynamicSelect
                                label="Mother Tongue"
                                placeholder="Select Mother Tongue"
                                options={motherTongues}
                                value={field.value}
                                onChange={(val) => setValue("motherTongue", val)}
                            />
                        )}
                    />
                </div>
            </div>
        </div>
    );
};

export default PersonalInfo;
