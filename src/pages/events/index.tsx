import EventsList from '@/components/events/EventsList';
import { getAllEvents } from '@/data/dummy-data';

const AllEvents = () => {
  const events = getAllEvents();

  return (
    <div>
      <h1>The Events List Page</h1>
      <EventsList events={events} />
    </div>
  );
};
export default AllEvents;
