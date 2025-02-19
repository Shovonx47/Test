interface ContactProps {
    contact: {
      phone: string;
      email: string;
    }
  }
  
  export default function PrimaryContact({ contact }: ContactProps) {
    return (
      <div className="w-[318px] rounded-lg bg-white shadow-sm p-4">
        <h4 className="text-md mb-3 text-black">Primary Contact Info</h4>
        <div className="space-y-4">
          <div className="flex items-start space-x-3">
            <div className="w-9 h-9 bg-gray-50 rounded-sm flex-shrink-0 mt-1" />
            <div>
              <p className="text-md font-medium text-headerText">Phone Number</p>
              <p className="text-dataText">{contact.phone}</p>
            </div>
          </div>
          <div className="flex items-start space-x-3">
            <div className="w-9 h-9 bg-gray-50 rounded-sm flex-shrink-0 mt-1" />
            <div>
              <p className="text-md font-medium text-headerText">Email Address</p>
              <p className="text-dataText">{contact.email}</p>
            </div>
          </div>
        </div>
      </div>
    );
  }