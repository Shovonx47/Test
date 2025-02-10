interface ContactProps {
  contact: {
    phone: string;
    email: string;
  }
}

export default function PrimaryContact({ contact }: ContactProps) {
  return (
    <div className="p-4 border rounded-lg bg-white">
      <h3 className="text-lg font-semibold mb-3 text-headerText">Primary Contact</h3>
      <hr className="border-gray-200 -mx-4 mb-3" />
      <div className="space-y-4">
        <div className="flex items-start space-x-3">
          <div className="w-9 h-9 bg-gray-50 rounded-sm flex-shrink-0 mt-1" />
          <div>
            <p className="text-md text-headerText">Phone Number</p>
            <p className="text-dataText">{contact.phone}</p>
          </div>
        </div>
        <div className="flex items-start space-x-3">
          <div className="w-9 h-9 bg-gray-50 rounded-sm flex-shrink-0 mt-1" />
          <div>
            <p className="text-md text-headerText">Email Address</p>
            <p className="text-dataText">{contact.email}</p>
          </div>
        </div>
      </div>
    </div>
  );
}