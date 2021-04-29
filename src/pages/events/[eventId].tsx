import { useRouter } from 'next/router';
import EventContent from '@/components/event-detail/EventContent';
import EventLogistics from '@/components/event-detail/EventLogistics';
import EventSummary from '@/components/event-detail/EventSummary';
import { getEventById } from '@/data/dummy-data';

const EventDetail = () => {
  const router = useRouter();

  const { eventId } = router.query;
  const event = getEventById(eventId);

  if (!event) {
    return <p>No event found!</p>;
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

export default EventDetail;
