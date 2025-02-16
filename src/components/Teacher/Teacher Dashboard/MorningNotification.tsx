interface NotificationProps {
    name: string;
    message?: string;
    meetingTime?: string;
  }
  
  const MorningNotification = ({ 
    name, 
    message = "Have a Good day at work",
    meetingTime = "9AM"
  }: NotificationProps) => {
    return (
      <div className="bg-blue-600 text-white p-4 w-full text-sm">
        <h1 className="text-2xl font-semibold mb-2">
          Good Morning Mr. {name}
        </h1>
        <p className="text-white/90 mb-2">
          {message}
        </p>
        <p className="text-white/90">
          Notice : There is a staff meeting at {meetingTime} today, Don't forget to Attend!!!
        </p>
      </div>
    );
  };
  
  export default MorningNotification;