interface DocumentsProps {
  documents: {
    name: string;
  }[]
}

export default function Documents({ documents }: DocumentsProps) {
  return (
    <div className="p-4 border rounded-lg">
      <h3 className="text-lg font-semibold mb-4">Documents</h3>
      <div className="space-y-3">
        {documents.map((doc) => (
          <div key={doc.name} className="flex items-center gap-2 p-2 bg-gray-50 rounded">
            <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            <span>{doc.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
} 