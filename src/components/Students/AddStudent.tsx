"use client";
import { useForm } from "react-hook-form";
import PersonalInfo from "./_components/PersonalInfo";
import ParentsAndGuardianInformation from "./_components/Parents&GuardianInformation";
import Siblings from "./_components/Siblings";
import Address from "./_components/Address";
import TransportInformation from "./_components/TransportInformation";
import PreviousSchoolDetails from "./_components/PreviousSchoolDetails";
import { Button } from "../ui/button";
import HostelInformation from "./_components/HostelInformation";
import Documents from "./_components/Documents";



const formSections = [
    PersonalInfo,
    ParentsAndGuardianInformation,
    Siblings,
    Address,
    TransportInformation,
    HostelInformation,
    PreviousSchoolDetails,
    Documents
];

const AddStudentForm = () => {
    const { control, handleSubmit, setValue, watch, trigger } = useForm({});

    const onSubmit = (data: any) => {
        console.log("Form Data: ", data);
    };


    


    return (
        // <form onSubmit={handleSubmit(onSubmit)}>
        //     <PersonalInfo control={control} setValue={setValue} />
        //     <ParentsAndGuardianInformation control={control} setValue={setValue} />
        //     <Siblings control={control} setValue={setValue} trigger={trigger} />
        //     <Address control={control} setValue={setValue} />
        //     <TransportInformation control={control} setValue={setValue} watch={watch} trigger={trigger} />
        //     <HostelInformation control={control} setValue={setValue} watch={watch} trigger={trigger} />
        //     <PreviousSchoolDetails control={control} setValue={setValue} watch={watch} trigger={trigger} />
        //     <Documents control={control} setValue={setValue} />


        //     <div className="flex justify-end m-10">
        //         <Button variant="default" type="submit">Submit</Button>
        //     </div>
        // </form>

        <form onSubmit={handleSubmit(onSubmit)}>
            {formSections.map((Component, index) => (
                <Component key={index} control={control} setValue={setValue} watch={watch} trigger={trigger} />
            ))}

            <div className="flex justify-end m-10">
                <Button variant="default" type="submit">Submit</Button>
            </div>
        </form>

    );
}

export default AddStudentForm