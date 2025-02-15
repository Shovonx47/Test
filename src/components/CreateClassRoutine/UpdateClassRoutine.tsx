"use client"
import React from 'react';
import { useForm } from 'react-hook-form';
import { Button } from '../ui/button';
import { useGetAllTeachersQuery } from '@/redux/api/Teacher/teacherApi';
import LoadingSpinner from '@/components/Loader';
import { useGetSingleClassRoutineQuery, useUpdateClassRoutineMutation } from '@/redux/api/ClassRoutine/classRoutineApi';
import { toast } from 'sonner';
import UpdateClassRoutine from './_components/UpdateClassRoutine';



interface Teacher {
    firstName: string;
    lastName: string;
    teacherId: string;
 
}


const UpdateClassRoutineForm = () => {

    const id = "67af15dd613f4305096d8627"
    const sort = "createdAt"
    const { data: teachers, isLoading } = useGetAllTeachersQuery({ sort })

    const { data: singleClassRoutine, isLoading: classRoutineLoading } = useGetSingleClassRoutineQuery(id)

    const { control, handleSubmit, setValue, watch, trigger, reset } = useForm({});
    const [updateClassRoutine, { isLoading: updateLoading }] = useUpdateClassRoutineMutation()


    const teacherNames: string[] = teachers?.data?.data?.map(
        (teacher: Teacher) => `${teacher.firstName} ${teacher.lastName} ${teacher.teacherId.toString().slice(-6)}`
    ) || [];

    const onSubmit = async (data: any) => {

        const values = {
            id, data
        }
        try {
            const response = await updateClassRoutine(values).unwrap();

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


    if (isLoading || classRoutineLoading) {
        return <LoadingSpinner />
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <UpdateClassRoutine control={control} setValue={setValue} watch={watch} trigger={trigger} teacherNames={teacherNames} singleClassRoutine={singleClassRoutine} />
            <div className="flex justify-end m-10">
                <Button
                    disabled={updateLoading}
                    variant="default" type="submit">
                    {
                        updateLoading ? " Submitting" :
                            "Submit"
                    } </Button>
            </div>
        </form>
    );
};

export default UpdateClassRoutineForm;