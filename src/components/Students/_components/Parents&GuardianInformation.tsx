

import { Input } from "@/components/ui/input";
import { Controller } from "react-hook-form";
import { UserRoundCogIcon } from "lucide-react";
import DynamicSelect from "@/components/Reusable/DynamicSelect";


const occupations = [
    "Agricultural Laborer",
    "Bank Manager",
    "Construction Worker",
    "Doctor",
    "Driver",
    "Engineer",
    "Factory Worker",
    "Journalist",
    "Lawyer",
    "Mid-Level Manager",
    "Nurse",
    "Others",
    "Pharmacist",
    "School Teacher",
    "Street Vendor",
    "University Professor"
]

interface PersonalInfoProps {
    control: any; // control from useForm
    setValue: (name: string, value: any) => void;
}

const ParentsAndGuardianInformation = ({ control, setValue }: PersonalInfoProps) => {
    return (
        <div className="p-6 bg-white">


            <div className="border rounded-md">
                <div className="p-4 bg-[#E9EDF4] rounded-md rounded-b-none flex items-center gap-2 mb-5">
                    <UserRoundCogIcon className="w-5 h-5" /> Parents & Guardian Information
                </div>
                <div>
                    <div className="ml-4">
                        Father’s Info
                    </div>
                    <div className="m-4 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
                        {/* Academic Year Select */}

                        {/* Admission Number */}
                        <div>
                            <label className="text-sm text-gray-600">Father name</label>
                            <Controller
                                name="fatherName" // Field name
                                control={control} // Pass control from useForm
                                render={({ field }) => (
                                    <Input
                                        {...field} // Spread the field props to connect the input
                                        placeholder="Enter father name"
                                    />
                                )}
                            />

                        </div>





                        <div>
                            <label className="text-sm text-gray-600">Father email</label>
                            <Controller
                                name="fatherEmail" // Field name
                                control={control} // Pass control from useForm
                                render={({ field }) => (
                                    <Input
                                        {...field} // Spread the field props to connect the input
                                        placeholder="Enter father email"
                                    />
                                )}
                            />

                        </div>




                        <div>
                            <label className="text-sm text-gray-600">Father contact number</label>
                            <Controller
                                name="fatherContactNumber" // Field name
                                control={control} // Pass control from useForm
                                render={({ field }) => (
                                    <Input
                                        {...field} // Spread the field props to connect the input
                                        placeholder="Enter contact number"
                                    />
                                )}
                            />
                        </div>



                        {/* Occupation Select */}
                        <Controller
                            name="fatherOccupation"
                            control={control}
                            render={({ field }) => (
                                <DynamicSelect
                                    label="Father Occupation"
                                    placeholder="Select Occupation"
                                    options={occupations}
                                    value={field.value}
                                    onChange={(val) => setValue("fatherOccupation", val)}
                                />
                            )}
                        />

                        <div>
                            <label className="text-sm text-gray-600">Father Nid Number</label>
                            <Controller
                                name="fatherNidNumber" // Field name
                                control={control} // Pass control from useForm
                                render={({ field }) => (
                                    <Input
                                        {...field} // Spread the field props to connect the input
                                        placeholder="Enter father Nid Number"
                                    />
                                )}
                            />

                        </div>

                    </div>
                </div>
                <div className="border-t mt-6 m-4">

                </div>
                <div >
                    <div className="ml-4">
                        Mother's Info
                    </div>
                    <div className="m-4 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
                        {/* Academic Year Select */}

                        {/* Admission Number */}
                        <div>
                            <label className="text-sm text-gray-600">Mother name</label>
                            <Controller
                                name="motherName" // Field name
                                control={control} // Pass control from useForm
                                render={({ field }) => (
                                    <Input
                                        {...field} // Spread the field props to connect the input
                                        placeholder="Enter mother name"
                                    />
                                )}
                            />

                        </div>





                        <div>
                            <label className="text-sm text-gray-600">Mother email</label>
                            <Controller
                                name="motherEmail" // Field name
                                control={control} // Pass control from useForm
                                render={({ field }) => (
                                    <Input
                                        {...field} // Spread the field props to connect the input
                                        placeholder="Enter mother email"
                                    />
                                )}
                            />

                        </div>




                        <div>
                            <label className="text-sm text-gray-600">Mother contact number</label>
                            <Controller
                                name="motherContactNumber" // Field name
                                control={control} // Pass control from useForm
                                render={({ field }) => (
                                    <Input
                                        {...field} // Spread the field props to connect the input
                                        placeholder="Enter mother number"
                                    />
                                )}
                            />
                        </div>



                        {/* Occupation Select */}
                        <Controller
                            name="motherOccupation"
                            control={control}
                            render={({ field }) => (
                                <DynamicSelect
                                    label="Mother Occupation"
                                    placeholder="Select Occupation"
                                    options={occupations}
                                    value={field.value}
                                    onChange={(val) => setValue("fatherOccupation", val)}
                                />
                            )}
                        />

                        <div>
                            <label className="text-sm text-gray-600">Mother Nid Number</label>
                            <Controller
                                name="motherNidNumber" // Field name
                                control={control} // Pass control from useForm
                                render={({ field }) => (
                                    <Input
                                        {...field} // Spread the field props to connect the input
                                        placeholder="Enter mother Nid Number"
                                    />
                                )}
                            />

                        </div>

                    </div>
                </div>
                <div className="border-t mt-6 m-4">

                </div>
                <div >
                    <div className="ml-4">
                        Local Guardian's Info
                    </div>
                    <div className="m-4 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
                        {/* Academic Year Select */}

                        {/* Admission Number */}
                        <div>
                            <label className="text-sm text-gray-600">Local guardian name</label>
                            <Controller
                                name="localGuardianName" // Field name
                                control={control} // Pass control from useForm
                                render={({ field }) => (
                                    <Input
                                        {...field} // Spread the field props to connect the input
                                        placeholder="Enter local guardian name"
                                    />
                                )}
                            />

                        </div>
                        <div>
                            <label className="text-sm text-gray-600">Relationship</label>
                            <Controller
                                name="relationshipWithLocalGuardian" // Field name
                                control={control} // Pass control from useForm
                                render={({ field }) => (
                                    <Input
                                        {...field} // Spread the field props to connect the input
                                        placeholder="Enter relationship"
                                    />
                                )}
                            />

                        </div>





                        <div>
                            <label className="text-sm text-gray-600">Local guardian email</label>
                            <Controller
                                name="localGuardianEmail" // Field name
                                control={control} // Pass control from useForm
                                render={({ field }) => (
                                    <Input
                                        {...field} // Spread the field props to connect the input
                                        placeholder="Enter local guardian email"
                                    />
                                )}
                            />

                        </div>




                        <div>
                            <label className="text-sm text-gray-600">Local guardian contact number</label>
                            <Controller
                                name="localGuardianContactNumber" // Field name
                                control={control} // Pass control from useForm
                                render={({ field }) => (
                                    <Input
                                        {...field} // Spread the field props to connect the input
                                        placeholder="Enter local guardian number"
                                    />
                                )}
                            />
                        </div>



                        {/* Occupation Select */}
                        <Controller
                            name="localGuardianOccupation"
                            control={control}
                            render={({ field }) => (
                                <DynamicSelect
                                    label="Guardian Occupation"
                                    placeholder="Select Occupation"
                                    options={occupations}
                                    value={field.value}
                                    onChange={(val) => setValue("fatherOccupation", val)}
                                />
                            )}
                        />

                        <div>
                            <label className="text-sm text-gray-600">Local guardian Nid Number</label>
                            <Controller
                                name="localGuardianNidNumber" // Field name
                                control={control} // Pass control from useForm
                                render={({ field }) => (
                                    <Input
                                        {...field} // Spread the field props to connect the input
                                        placeholder="Enter local guardian Nid Number"
                                    />
                                )}
                            />

                        </div>

                    </div>
                </div>


            </div>
        </div>
    );
};

export default ParentsAndGuardianInformation;
