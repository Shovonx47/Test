// import { Input } from "@/components/ui/input";
 
// import { Controller } from "react-hook-form";
// import { NotebookTabs } from "lucide-react";

// interface PersonalInfoProps {
//     control: any; // control from useForm
//     setValue: (name: string, value: any) => void;
// }

// const PreviousSchoolDetails = ({ control, setValue }: PersonalInfoProps) => {
//     return (
//         <div className="p-6 bg-white">
             
//             <div className="border rounded-md">
//                 <div className="p-4 bg-[#E9EDF4] rounded-md rounded-b-none flex items-center gap-2 mb-5">
//                     <NotebookTabs className="h-5 w-5"/> Previous School Details
//                 </div>
//                 <div className="m-4 grid grid-cols-2 gap-4">
//                     {/* Academic Year Select */}
                     
//                     {/* Admission Number */}
//                     <div>
//                         <label className="text-sm text-gray-600">School Name </label>
//                         <Controller
//                             name="previousSchoolName" // Field name
//                             control={control} // Pass control from useForm
//                             render={({ field }) => (
//                                 <Input
//                                     {...field} // Spread the field props to connect the input
//                                     placeholder="Previous school name"
//                                 />
//                             )}
//                         />

//                     </div>

//                     {/* Admission Date */}
                    

//                     {/* Roll Number */}
//                     <div>
//                         <label className="text-sm text-gray-600">Address</label>
//                         <Controller
//                             name="previousSchoolAddress" // Field name
//                             control={control} // Pass control from useForm
//                             render={({ field }) => (
//                                 <Input
//                                     {...field} // Spread the field props to connect the input
//                                     placeholder="Enter school address"
//                                 />
//                             )}
//                         />

//                     </div>
  
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default PreviousSchoolDetails;




import { Controller } from "react-hook-form";
import { NotebookTabs } from "lucide-react";
import { Switch } from "@/components/ui/switch";
import { Input } from "@/components/ui/input";  
 

interface PersonalInfoProps {
    control: any;
    setValue: (name: string, value: any) => void;
    watch: (name: string, defaultValue?: any) => any;
    trigger: (name?: string | string[]) => void;
}

const PreviousSchoolDetails = ({ control, setValue, watch, trigger }: PersonalInfoProps) => {
    const isPreviousSchool = watch("previousSchool", true);

    return (
        <div className="p-6 bg-white">
            <div className="border rounded-md">
                <div className="p-4 bg-[#E9EDF4] rounded-md rounded-b-none flex justify-between items-center gap-2 mb-5">
                    <div className="flex items-center gap-2">
                        <NotebookTabs className="h-5 w-5" /> Previous School Details
                    </div>
                    <Controller
                        name="previousSchool"
                        control={control}
                        defaultValue={true}
                        render={({ field }) => (
                            <Switch
                                checked={field.value ?? true}
                                onCheckedChange={(checked) => {
                                    field.onChange(checked);
                                    setValue("previousSchool", checked);
                                    if (checked) {
                                        trigger(["previousSchoolName", "previousSchoolAddress"]);
                                    }
                                }}
                            />
                        )}
                    />
                </div>

                {isPreviousSchool && (
                    <div className="m-4 grid grid-cols-1 md:grid-cols-2 gap-4">
                        {/* Route Select */}

                        <div>
                        <label className="text-sm text-gray-600">School Name </label>
                        <Controller
                            name="previousSchoolName"
                            control={control}
                            rules={{ required: "School name is required" }}
                            render={({ field, fieldState: { error } }) => (
                                <div>
                                    <Input
                                        {...field}
                                        placeholder="Add school name"
                                        onChange={(e) => {
                                            field.onChange(e.target.value);
                                            trigger("previousSchoolName"); // Revalidate field
                                        }}
                                    />
                                    {error && <p className="text-red-500 text-sm">{error.message}</p>}
                                </div>
                            )}
                        />
                        </div>

                        {/* address Select */}
                        <div>
                        <label className="text-sm text-gray-600">Address</label>
                        <Controller
                            name="previousSchoolAddress"
                            control={control}
                            rules={{ required: "School address is required" }}
                            render={({ field, fieldState: { error } }) => (
                                <div>
                                    <Input
                                        {...field}
                                       
                                        placeholder="Add school address"
                                        onChange={(e) => {
                                            field.onChange(e.target.value);
                                            trigger("previousSchoolAddress"); // Revalidate field
                                        }}
                                    />
                                    {error && <p className="text-red-500 text-sm">{error.message}</p>}
                                </div>
                            )}
                        />
                        </div>

                        
                    </div>
                )}
            </div>
        </div>
    );
};

export default PreviousSchoolDetails;


