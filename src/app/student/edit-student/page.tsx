import UpdateStudentForm from '@/components/Students/Update Student/UpdateStudent';
import React from 'react';

// interface PageProps {
//     params: {
//       id: string; // Dynamic route parameter
//     };
//   }
  
  const page = ( ) => {
    // const { id } = params;
  
    // console.log(id); // Log the ID to verify
  

    return (
        <div>
            <UpdateStudentForm />
        </div>
    );
};

export default page;