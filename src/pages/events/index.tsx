import EventsFilter from '@/components/events/EventsFilter';
import EventsList from '@/components/events/EventsList';
import { getAllEvents } from '@/data/dummy-data';

const AllEvents = () => {
  const events = getAllEvents();

  return (
    <>
      <h1>The Events List Page</h1>
      <EventsFilter />
      <EventsList events={events} />
    </>
  );
};
export default AllEvents;
