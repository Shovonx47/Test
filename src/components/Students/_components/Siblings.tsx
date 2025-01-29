"use client";

import { Input } from "@/components/ui/input";
import { Controller, useFieldArray } from "react-hook-form";
import { Users, Trash2, SquarePlus } from "lucide-react";
import DynamicSelect from "@/components/Reusable/DynamicSelect";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

const genders = ["Male", "Female", "Other"];
const classes = ["I", "II", "III"];
const sections = ["A", "B", "C"];
const motherTongues = ["English", "Spanish"];

interface PersonalInfoProps {
    control: any;
    setValue: (name: string, value: any) => void;
}

const Siblings = ({ control, setValue }: PersonalInfoProps) => {
    const [isSibling, setIsSibling] = useState<boolean>(true);

    // UseFieldArray to handle dynamic sibling fields
    const { fields, append, remove, replace } = useFieldArray({
        control,
        name: "siblings",
    });


    console.log(fields)
    // Ensure only ONE sibling field is initialized
    useEffect(() => {
        if (isSibling) {
            // Ensure only ONE sibling field exists
            if (fields.length === 0) {
                replace([{ siblingName: "", class: "", section: "", gender: "", roll: "", motherTongue: "" }]);
            }
        } else {
            replace([]); // Clear all siblings when "No" is selected
        }
    }, [isSibling, replace, fields.length]);
    

    return (
        <div className="p-6 bg-white">
            <div className="border rounded-md">
                <div className="p-4 bg-[#E9EDF4] rounded-md rounded-b-none flex items-center gap-2 mb-5">
                    <Users /> Siblings
                </div>

                <div className="m-4">
                    <h1>Sibling Info</h1>
                    <div className="flex gap-x-2 items-center">
                        <h2 className="text-gray-700">Is Sibling studying in the same school?</h2>
                        <RadioGroup defaultValue="option-one" className="flex">
                            <div onClick={() => setIsSibling(!isSibling)} className="flex items-center space-x-2">
                                <RadioGroupItem value="option-one" id="option-one" />
                                <Label htmlFor="option-one" className="text-gray-700">Yes</Label>
                            </div>
                            <div onClick={() => setIsSibling(!isSibling)} className="flex items-center space-x-2">
                                <RadioGroupItem value="option-two" id="option-two" />
                                <Label htmlFor="option-two">No</Label>
                            </div>
                        </RadioGroup>
                    </div>
                </div>

                {isSibling && (
                    <div className="m-4">
                        {fields.map((field, index) => (
                            <div key={field.id} className="grid grid-cols-5 gap-4 mb-4">
                                {/* Name */}
                                <div>
                                    <label className="text-sm text-gray-600">Name</label>
                                    <Controller
                                        name={`siblings.${index}.siblingName`}
                                        control={control}
                                        rules={{ required: "Name is required" }}
                                        render={({ field, fieldState: { error } }) => (
                                            <div>
                                                <Input {...field} placeholder="Enter sibling name" />
                                                {error && <p className="text-red-500 text-sm">{error.message}</p>}
                                            </div>
                                        )}
                                    />
                                </div>

                                {/* Class */}
                                <div>
                                    <Controller
                                        name={`siblings.${index}.class`}
                                        control={control}
                                        rules={{ required: "Class is required" }}
                                        render={({ field, fieldState: { error } }) => (
                                            <div>
                                                <DynamicSelect
                                                    label="Class"
                                                    placeholder="Select Class"
                                                    options={classes}
                                                    value={field.value}
                                                    onChange={(val) => setValue(`siblings.${index}.class`, val)}
                                                />
                                                {error && <p className="text-red-500 text-sm">{error.message}</p>}
                                            </div>
                                        )}
                                    />
                                </div>

                                {/* Section */}
                                <div>
                                    <Controller
                                        name={`siblings.${index}.section`}
                                        control={control}
                                        rules={{ required: "Section is required" }}
                                        render={({ field, fieldState: { error } }) => (
                                            <div>
                                                <DynamicSelect
                                                    label="Section"
                                                    placeholder="Select Section"
                                                    options={sections}
                                                    value={field.value}
                                                    onChange={(val) => setValue(`siblings.${index}.section`, val)}
                                                />
                                                {error && <p className="text-red-500 text-sm">{error.message}</p>}
                                            </div>
                                        )}
                                    />
                                </div>

                                {/* Gender */}
                                <div>
                                    <Controller
                                        name={`siblings.${index}.gender`}
                                        control={control}
                                        rules={{ required: "Gender is required" }}
                                        render={({ field, fieldState: { error } }) => (
                                            <div>
                                                <DynamicSelect
                                                    label="Gender"
                                                    placeholder="Select Gender"
                                                    options={genders}
                                                    value={field.value}
                                                    onChange={(val) => setValue(`siblings.${index}.gender`, val)}
                                                />
                                                {error && <p className="text-red-500 text-sm">{error.message}</p>}
                                            </div>
                                        )}
                                    />
                                </div>

                                {/* Roll Number */}
                                <div>
                                    <label className="text-sm text-gray-600">Roll number</label>
                                    <Controller
                                        name={`siblings.${index}.roll`}
                                        control={control}
                                        rules={{ required: "Roll number is required" }}
                                        render={({ field, fieldState: { error } }) => (
                                            <div>
                                                <Input {...field} placeholder="Enter roll number" />
                                                {error && <p className="text-red-500 text-sm">{error.message}</p>}
                                            </div>
                                        )}
                                    />
                                </div>

                                {/* Mother Tongue */}
                                <div>
                                    <Controller
                                        name={`siblings.${index}.motherTongue`}
                                        control={control}
                                        rules={{ required: "Mother Tongue is required" }}
                                        render={({ field, fieldState: { error } }) => (
                                            <div>
                                                <DynamicSelect
                                                    label="Mother Tongue"
                                                    placeholder="Select Mother Tongue"
                                                    options={motherTongues}
                                                    value={field.value}
                                                    onChange={(val) => setValue(`siblings.${index}.motherTongue`, val)}
                                                />
                                                {error && <p className="text-red-500 text-sm">{error.message}</p>}
                                            </div>
                                        )}
                                    />
                                </div>

                                {/* Delete Button */}
                                <div className="flex items-end">
                                    <Button
                                        type="button"
                                        onClick={() => remove(index)}
                                        variant="destructive"
                                        className="flex items-center gap-2"
                                        disabled={fields.length === 1} // Prevent removing the last sibling
                                    >
                                        <Trash2 size={16} />
                                    </Button>
                                </div>
                            </div>
                        ))}

                        {/* Add Sibling Button */}
                        <Button
                            type="button"
                            onClick={() => append({ siblingName: "", class: "", section: "", gender: "", roll: "", motherTongue: "" })}
                            className="mb-4"
                        >
                            <SquarePlus /> Add Sibling
                        </Button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Siblings;

                        