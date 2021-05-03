import { GetServerSideProps } from 'next';
import Head from 'next/head';
import { useRouter } from 'next/router';
import EventList from '@/components/events/EventsList';
import ResultsTitle from '@/components/events/ResultsTitle';
import Button from '@/components/ui/Button';
import ErrorAlert from '@/components/ui/ErrorAlert';
import { getFilteredEvents } from '@/helpers/api-utils';
import { IFilteredEvents } from '@/types';

const FilteredEvents = ({ hasError, events, date }: IFilteredEvents) => {
  const router = useRouter();

  /* const filterData = router.query.slug;

  if (!filterData) {
    return <p className="center">Loading...</p>;
  }

  const filteredYear = filterData[0];
  const filteredMonth = filterData[1];

  // Transform data strings to numbers
  const numYear = +filteredYear;
  const numMonth = +filteredMonth; */

  if (hasError) {
    return (
      <>
        <ErrorAlert>
          <p>Invalid filter. Please adjust your values!</p>
        </ErrorAlert>
        <div className="center">
          <Button link="/events">Show All Events</Button>
        </div>
      </>
    );
  }

  const filteredEvents = events;

  if (!filteredEvents || filteredEvents.length === 0) {
    return (
      <>
        <ErrorAlert>
          <p>No events found for the chosen filter!</p>
        </ErrorAlert>
        <div className="center">
          <Button link="/events">Show All Events</Button>
        </div>
      </>
    );
  }

  const newDate = new Date(date.year, date.month - 1);

  return (
    <>
      <Head>
        <title>Filtered Events</title>
        <meta name="description" content={`All events for ${newDate}`} />
      </Head>
      <ResultsTitle date={newDate} />
      <EventList events={filteredEvents} />
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { params } = context;

  const filterData = params?.slug;

  const filteredYear = filterData[0];
  const filteredMonth = filterData[1];

  // Transform data strings to numbers
  const numYear = +filteredYear;
  const numMonth = +filteredMonth;

  if (
    Number.isNaN(numYear) ||
    Number.isNaN(numMonth) ||
    numYear > 2030 ||
    numYear < 2021 ||
    numMonth < 1 ||
    numMonth > 12
  ) {
    return {
      props: { hasError: true },
      /* notFound: true,
      redirect: {
        destination: '/error',
      }, */
    };
  }

  const filteredEvents = await getFilteredEvents({
    year: numYear,
    month: numMonth,
  });

  return {
    props: {
      events: filteredEvents,
      date: {
        year: numYear,
        month: numMonth,
      },
    },
  };
};

export default FilteredEvents;
