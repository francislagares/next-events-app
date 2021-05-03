import { GetStaticProps } from 'next';
import Head from 'next/head';
import { useRouter } from 'next/router';
import EventsFilter from '@/components/events/EventsFilter';
import EventsList from '@/components/events/EventsList';
import { getAllEvents } from '@/helpers/api-utils';
import { IEventList, Month, Year } from '@/types';

const AllEvents = ({ events }: IEventList) => {
  const router = useRouter();

  const findEventsHandler = (year: Year, month: Month) => {
    const fullPath = `/events/${year}/${month}`;

    router.push(fullPath);
  };

  return (
    <>
      <Head>
        <title>All Events</title>
        <meta
          name="description"
          content="Find a lot of great events that allow you to evolve..."
        />
      </Head>
      <EventsFilter onFilter={findEventsHandler} />
      <EventsList events={events} />
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const allEvents = await getAllEvents();

  return {
    props: {
      events: allEvents,
    },
    revalidate: 60,
  };
};

export default AllEvents;
