const SessionCard = () => {
  return (
    <div className="flex flex-col max-w-xs text-white items-center aspect-[3/4] bg-fuchsia-950 rounded-xl overflow-hidden">
      <img
        src="https://via.placeholder.com/150"
        alt="Event Image"
        className="w-full h-[70%] overflow-hidden"
      />
      <div className="p-2">
        <h3>Event Name</h3>
        <h4>Event Date</h4>
        <h5 className="pt-1">Event Time</h5>
      </div>
    </div>
  );
};
export default SessionCard;
