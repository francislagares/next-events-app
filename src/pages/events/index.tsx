import { useRouter } from 'next/router';
import EventsFilter from '@/components/events/EventsFilter';
import EventsList from '@/components/events/EventsList';
import { getAllEvents } from '@/data/dummy-data';
import { Month, Year } from '@/types';

const AllEvents = () => {
  const router = useRouter();
  const events = getAllEvents();

  const findEventsHandler = (year: Year, month: Month) => {
    const fullPath = `/events/${year}/${month}`;

    router.push(fullPath);
  };

  return (
    <>
      <h1>The Events List Page</h1>
      <EventsFilter onFilter={findEventsHandler} />
      <EventsList events={events} />
    </>
  );
};
export default AllEvents;
