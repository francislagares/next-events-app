import { GetStaticProps } from 'next';
import EventContent from '@/components/event-detail/EventContent';
import EventLogistics from '@/components/event-detail/EventLogistics';
import EventSummary from '@/components/event-detail/EventSummary';
import ErrorAlert from '@/components/ui/ErrorAlert';
import { getAllEvents, getEventById } from '@/helpers/api-utils';
import { IEventItem } from '@/types';

const EventDetail = ({ event }: IEventItem) => {
  if (!event) {
    return (
      <ErrorAlert>
        <p>No event found!</p>
      </ErrorAlert>
    );
  }

  return (
    <>
      <EventSummary title={event.title} />
      <EventLogistics
        date={event.date}
        address={event.location}
        image={event.image}
        imageAlt={event.title}
      />
      <EventContent>
        <p>{event.description}</p>
      </EventContent>
    </>
  );
};

export const getStaticProps: GetStaticProps = async (context) => {
  const { eventId } = context.params;

  const event = await getEventById(eventId);

  return {
    props: {
      event,
    },
  };
};

export const getStaticPaths = async () => {
  const events = await getAllEvents();

  const paths = events.map((event) => ({ params: { eventId: event.id } }));

  return {
    paths,
    fallback: false,
  };
};

export default EventDetail;
