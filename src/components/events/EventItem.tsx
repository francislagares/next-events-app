import Button from '@/components/ui/Button';
import classes from '@/styles/event-item.module.css';
import { IFeatured } from '@/types';

const EventItem = ({ featured }: IFeatured) => {
  const { id, title, location, date, image } = featured;

  const humanReadableDate = new Date(date).toLocaleDateString('en-US', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });

  const formattedAddress = location.replace(', ', '\n');
  const exploreLink = `/events/${id}`;

  return (
    <div className={classes.item}>
      <img src={`/${image}`} alt="Event" />
      <div className={classes.content}>
        <div className={classes.summary}>
          <h2>{title}</h2>
          <div className={classes.date}>
            <time>{humanReadableDate}</time>
          </div>
          <div className={classes.address}>
            <address>{formattedAddress}</address>
          </div>
        </div>
        <div className={classes.actions}>
          <Button link={exploreLink}>Explore Event</Button>
        </div>
      </div>
    </div>
  );
};

export default EventItem;
