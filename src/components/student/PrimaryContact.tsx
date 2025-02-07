interface ContactProps {
  contact: {
    phone: string;
    email: string;
  }
}

export default function PrimaryContact({ contact }: ContactProps) {
  return (
    <div className="p-4 border rounded-lg">
        <h3 className="text-lg font-semibold mb-4 text-headerText">Primary Contact</h3>
        <div className="space-y-4">
        <div>
          <p className="text-md text-headerText">Phone Number</p>
          <p className="text-dataText">{contact.phone}</p>
        </div>
        <div>
          <p className="text-md text-headerText">Email Address</p>
          <p className="text-dataText">{contact.email}</p>
        </div>
      </div>
    </div>
  );
} 