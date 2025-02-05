interface ContactProps {
  contact: {
    phone: string;
    email: string;
  }
}

export default function PrimaryContact({ contact }: ContactProps) {
  return (
    <div className="p-4 border rounded-lg">
      <h3 className="text-lg font-semibold mb-4">Primary Contact</h3>
      <div className="space-y-4">
        <div>
          <p className="text-sm text-gray-500">Phone Number</p>
          <p>{contact.phone}</p>
        </div>
        <div>
          <p className="text-sm text-gray-500">Email Address</p>
          <p>{contact.email}</p>
        </div>
      </div>
    </div>
  );
} 