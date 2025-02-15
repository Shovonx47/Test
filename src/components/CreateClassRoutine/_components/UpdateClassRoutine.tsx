import { Input } from "@/components/ui/input";
import { Controller } from "react-hook-form";
import { NotebookTabs } from "lucide-react";
import { Switch } from "@/components/ui/switch";
import DynamicSelect from "@/components/Reusable/DynamicSelect";

const classOptions = [
    "Class 1",
    "Class 2",
    "Class 3"];
const sectionOptions = ["A", "B", "C"];
const subjectOptions = ["Math", "Science", "History"];
const dayOptions = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'
    , 'Saturday', 'Sunday'];


interface Routine {
    data: {
        teacherName: string;
        subjectName: string;
        subjectCode: string;
        class: string;
        section: string;
        day: string;
        startTime: string; // Format: "HH:mm" or "10:00 AM"
        endTime: string; // Format: "HH:mm" or "11:00 AM"
        roomNumber: string;
        buildingName?: string; // Optional field
        isOptional: boolean;
        createdBy: string;
    }
}

interface ClassRoutineProps {
    control: any;
    watch: any;

    setValue: (name: string, value: any) => void;
    trigger: (name?: string | string[]) => void;
    teacherNames: string[]

    singleClassRoutine: Routine
}

const UpdateClassRoutine = ({ control, setValue, trigger, watch, teacherNames, singleClassRoutine }: ClassRoutineProps) => {
    const hasRoutine = watch("hasRoutine", true);

    return (
        <div className="p-6 bg-white">
            <div className="border rounded-md">
                <div className="p-4 bg-[#E9EDF4] rounded-md flex justify-between items-center gap-2 mb-5">
                    <div className="flex items-center gap-2">
                        <NotebookTabs className="h-5 w-5" /> Class Routine
                    </div>

                </div>

                {hasRoutine && (
                    <div className="m-4">

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
                            {/* // teacher name  */}
                            <Controller
                                name="teacherName"
                                control={control}
                                defaultValue={singleClassRoutine?.data?.teacherName || ""}
                                rules={{ required: "Teacher Name is required" }}
                                render={({ field, fieldState: { error } }) => (
                                    <div>
                                        <DynamicSelect
                                            label="Teacher Name"
                                            placeholder="Select Teacher Name"
                                            options={teacherNames}
                                            value={field.value}
                                            onChange={(val) => {
                                                setValue("teacherName", val);
                                                trigger("teacherName");
                                            }}
                                        />
                                        {error && <p className="text-red-500 text-sm">{error.message}</p>}
                                    </div>
                                )}
                            />
                            <Controller
                                name="subjectName"
                                control={control}
                                defaultValue={singleClassRoutine?.data?.subjectName || ""}
                                rules={{ required: "Subject Name is required" }}
                                render={({ field, fieldState: { error } }) => (
                                    <div>
                                        <DynamicSelect
                                            label="Subject Name"
                                            placeholder="Select Subject Name"
                                            options={subjectOptions}
                                            value={field.value}
                                            onChange={(val) => {
                                                setValue("subjectName", val);
                                                trigger("subjectName");
                                            }}
                                        />
                                        {error && <p className="text-red-500 text-sm">{error.message}</p>}
                                    </div>
                                )}
                            />
                            <Controller
                                name={`subjectCode`}
                                control={control}
                                defaultValue={singleClassRoutine?.data?.subjectCode || ""}
                                rules={{ required: "Subject Code is required" }}
                                render={({ field, fieldState: { error } }) => (
                                    <div>
                                        <label className="text-sm text-gray-600">Subject Code</label>
                                        <Input type="text" {...field} placeholder="Enter Subject Code" />
                                        {error && <p className="text-red-500 text-sm">{error.message}</p>}
                                    </div>
                                )}
                            />
                            {/* Class */}
                            <Controller
                                name="class"
                                control={control}
                                defaultValue={singleClassRoutine?.data?.class || ""}
                                rules={{ required: "Class is required" }}
                                render={({ field, fieldState: { error } }) => (
                                    <div>
                                        <DynamicSelect
                                            label="Class"
                                            placeholder="Select Class"
                                            options={classOptions}
                                            value={field.value}
                                            onChange={(val) => {
                                                setValue("class", val);
                                                trigger("class");
                                            }}
                                        />
                                        {error && <p className="text-red-500 text-sm">{error.message}</p>}
                                    </div>
                                )}
                            />

                            {/* Section */}
                            <Controller
                                name="section"
                                control={control}
                                defaultValue={singleClassRoutine?.data?.section || ""}
                                rules={{ required: "Section is required" }}
                                render={({ field, fieldState: { error } }) => (
                                    <div>
                                        <DynamicSelect
                                            label="Section"
                                            placeholder="Select Section"
                                            options={sectionOptions}
                                            value={field.value}
                                            onChange={(val) => {
                                                setValue("section", val);
                                                trigger("section");
                                            }}
                                        />
                                        {error && <p className="text-red-500 text-sm">{error.message}</p>}
                                    </div>
                                )}
                            />



                            {/* Day */}
                            <Controller
                                name="day"
                                control={control}
                                defaultValue={singleClassRoutine?.data?.day || ""}
                                rules={{ required: "Day is required" }}
                                render={({ field, fieldState: { error } }) => (
                                    <div>
                                        <DynamicSelect
                                            label="Day"
                                            placeholder="Select Day"
                                            options={dayOptions}
                                            value={field.value}
                                            onChange={(val) => {
                                                setValue("day", val);
                                                trigger("day");
                                            }}
                                        />
                                        {error && <p className="text-red-500 text-sm">{error.message}</p>}
                                    </div>
                                )}
                            />

                            <Controller
                                name={`startTime`}
                                control={control}
                                defaultValue={singleClassRoutine?.data?.startTime || ""}
                                rules={{ required: "Start Time is required" }}
                                render={({ field, fieldState: { error } }) => (
                                    <div>
                                        <label className="text-sm text-gray-600">Start Time</label>
                                        <Input type="time" {...field} />
                                        {error && <p className="text-red-500 text-sm">{error.message}</p>}
                                    </div>
                                )}
                            />
                            <Controller
                                name={`endTime`}
                                control={control}
                                defaultValue={singleClassRoutine?.data?.endTime || ""}
                                rules={{ required: "End Time is required" }}
                                render={({ field, fieldState: { error } }) => (
                                    <div>
                                        <label className="text-sm text-gray-600">End Time</label>
                                        <Input type="time" {...field} />
                                        {error && <p className="text-red-500 text-sm">{error.message}</p>}
                                    </div>
                                )}
                            />
                            <Controller
                                name={`roomNumber`}
                                control={control}
                                defaultValue={singleClassRoutine?.data?.roomNumber || ""}
                                rules={{ required: "Room Number is required" }}
                                render={({ field, fieldState: { error } }) => (
                                    <div>
                                        <label className="text-sm text-gray-600">Room Number</label>
                                        <Input type="text" {...field} placeholder="Enter Room Number" />
                                        {error && <p className="text-red-500 text-sm">{error.message}</p>}
                                    </div>
                                )}
                            />
                            <Controller
                                name={`buildingName`}
                                control={control}
                                defaultValue={singleClassRoutine?.data?.buildingName || ""}
                                render={({ field }) => (
                                    <div>
                                        <label className="text-sm text-gray-600">Building Name (Optional) </label>
                                        <Input type="text" {...field} placeholder="Enter Building Name" />

                                    </div>
                                )}
                            />
                            <Controller
                                name={`createdBy`}
                                control={control}
                                defaultValue={singleClassRoutine?.data?.createdBy || ""}
                                rules={{ required: "Created by is required" }}
                                render={({ field, fieldState: { error } }) => (
                                    <div>
                                        <label className="text-sm text-gray-600">Created By </label>
                                        <Input type="text" {...field} placeholder="Enter Created By" />
                                        {error && <p className="text-red-500 text-sm">{error.message}</p>}
                                    </div>
                                )}
                            />
                            <Controller
                                name={`isOptional`}
                                control={control}
                                defaultValue={singleClassRoutine?.data?.isOptional || false}

                                render={({ field }) => (
                                    <div className="flex items-center gap-2">
                                        <label className="text-sm text-gray-600">Is Optional ?</label>
                                        <Switch checked={field.value} onCheckedChange={field.onChange} />
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

export default UpdateClassRoutine;