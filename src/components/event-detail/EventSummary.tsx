import classes from '@/styles/event-summary.module.css';
import { IEventSummary } from '@/types';

const EventSummary = ({ title }: IEventSummary) => (
  <section className={classes.summary}>
    <h1>{title}</h1>
  </section>
);

export default EventSummary;
