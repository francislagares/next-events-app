import EventItem from '@/components/events/EventItem';

const EventsList = ({ events }: IEventList) => (
  <div className="featured-events">
    {events.map((event) => (
      <EventItem key={event.id} featured={event} />
    ))}
  </div>
);

export default EventsList;
