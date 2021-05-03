import Image from 'next/image';
import AddressIcon from '@/components/icons/address-icon';
import ArrowRightIcon from '@/components/icons/arrow-right-icon';
import DateIcon from '@/components/icons/date-icon';
import Button from '@/components/ui/Button';
import classes from '@/styles/event-item.module.css';
import { IEventItem } from '@/types';

const EventItem = ({ event }: IEventItem) => {
  const { id, title, location, date, image } = event;

  const humanReadableDate = new Date(date).toLocaleDateString('en-US', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });

  const formattedAddress = location.replace(', ', '\n');
  const exploreLink = `/events/${id}`;

  return (
    <div className={classes.item}>
      <Image src={`/${image}`} alt="Event" width={250} height={160} />
      <div className={classes.content}>
        <div className={classes.summary}>
          <h2>{title}</h2>
          <div className={classes.date}>
            <DateIcon />
            <time>{humanReadableDate}</time>
          </div>
          <div className={classes.address}>
            <AddressIcon />
            <address>{formattedAddress}</address>
          </div>
        </div>
        <div className={classes.actions}>
          <Button link={exploreLink}>
            <span>Explore Event</span>
            <span className={classes.icon}>
              <ArrowRightIcon />
            </span>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default EventItem;
