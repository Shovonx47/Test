import UpdateAccountantForm from '@/components/Account_officer/Update Account Officer/UpdateAccountOfficer';
import React from 'react';

interface PageProps {
    params: {
      id: string; // Dynamic route parameter
    };
  }
  
  const page = ({ params }: PageProps) => {
    const { id } = params;
  
    console.log(id); // Log the ID to verify
  

    return (
        <div>
            <UpdateAccountantForm />
        </div>
    );
};

export default page;