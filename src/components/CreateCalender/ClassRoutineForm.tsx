"use client"
import React from 'react';
import { useForm } from 'react-hook-form';
import { Button } from '../ui/button';
import { useGetAllTeachersQuery } from '@/redux/api/Teacher/teacherApi';
import LoadingSpinner from '@/components/Loader';
import { useCreateClassRoutineMutation } from '@/redux/api/ClassRoutine/classRoutineApi';
import { toast } from 'sonner';
import CreateClassRoutine from './_components/CreateClassRoutine';


interface Teacher {
    firstName: string;
    lastName: string;
    teacherId: string;
    
}
interface TeachersResponse {
    data: {
        data: Teacher[];
    };
}

const ClassRoutineForm = () => {

    const sort = "createdAt"
    const { data: teachers, isLoading } = useGetAllTeachersQuery({ sort })

    const { control, handleSubmit, setValue, watch, trigger, reset } = useForm({});
    const [createClassRoutine, { isLoading: createLoading }] = useCreateClassRoutineMutation()


    const teacherNames: string[] = teachers?.data?.data?.map(
        (teacher: Teacher) => `${teacher.firstName} ${teacher.lastName} ${teacher.teacherId.toString().slice(-6)}`
    ) || [];

    const onSubmit = async (data: any) => {

        try {
            const response = await createClassRoutine(data).unwrap();

            if (response.success) {
                toast.success(response.message);
                // reset()
            } else if (response.success === false && response.errorSources) {
                // Extract error messages from errorSources array
                const errorMessage = response.errorSources.map((err: any) => err.message).join(", ");
                toast.error(errorMessage);
            }
        } catch (error: any) {
            let errorMessage = "Network error, please try again!";

            // Check if error contains data with specific error messages
            if (error?.data?.errorSources) {
                errorMessage = error.data.errorSources.map((err: any) => err.message).join(", ");
            } else if (error?.data?.message) {
                errorMessage = error.data.message;
            }

            toast.error(errorMessage);
        }
    };






    if (isLoading) {
        return <LoadingSpinner />
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <CreateClassRoutine control={control} setValue={setValue} watch={watch} trigger={trigger} teacherNames={teacherNames} />
            <div className="flex justify-end m-10">
                <Button
                    disabled={createLoading}
                    variant="default" type="submit">
                    {
                        createLoading ? " Submitting" :
                            "Submit"
                    } </Button>
            </div>
        </form>
    );
};

export default ClassRoutineForm;