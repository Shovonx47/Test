import { memo } from 'react';

const LoadingSpinner = () => (
  <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-60 z-50">
    <div className="animate-spin rounded-full h-14 w-14 border-t-[3px] border-b-[3px] border-white" />
  </div>
);

export default memo(LoadingSpinner);
