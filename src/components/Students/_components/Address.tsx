import { Input } from "@/components/ui/input";
 
import { Controller } from "react-hook-form";
import { MapPinHouse, NotebookTabs } from "lucide-react";

interface PersonalInfoProps {
    control: any; // control from useForm
    setValue: (name: string, value: any) => void;
}

const Address = ({ control, setValue }: PersonalInfoProps) => {
    return (
        <div className="p-6 bg-white">
             
            <div className="border rounded-md">
                <div className="p-4 bg-[#E9EDF4] rounded-md rounded-b-none flex items-center gap-2 mb-5">
                    <MapPinHouse className="h-5 w-5"/> Address
                </div>
                <div className="m-4 grid grid-cols-1 md:grid-cols-2 gap-4">
                    {/* Academic Year Select */}
                     
                    {/* Admission Number */}
                    <div>
                        <label className="text-sm text-gray-600">Current address </label>
                        <Controller
                            name="currentAddress" // Field name
                            control={control} // Pass control from useForm
                            render={({ field }) => (
                                <Input
                                    {...field} // Spread the field props to connect the input
                                    placeholder="Enter current address"
                                />
                            )}
                        />

                    </div>

                    {/* Admission Date */}
                    

                    {/* Roll Number */}
                    <div>
                        <label className="text-sm text-gray-600">Permanent address</label>
                        <Controller
                            name="permanentAddress" // Field name
                            control={control} // Pass control from useForm
                            render={({ field }) => (
                                <Input
                                    {...field} // Spread the field props to connect the input
                                    placeholder="Enter permanent address"
                                />
                            )}
                        />

                    </div>
  
                </div>
            </div>
        </div>
    );
};

export default Address;
