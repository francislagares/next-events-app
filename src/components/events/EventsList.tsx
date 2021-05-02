import EventItem from '@/components/events/EventItem';
import classes from '@/styles/event-list.module.css';
import { IEventList } from '@/types';

const EventsList = ({ events }: IEventList) => (
  <div className={classes.list}>
    {events.map((event) => (
      <EventItem key={event.id} event={event} />
    ))}
  </div>
);

export default EventsList;
