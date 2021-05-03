import Image from 'next/image';
import LogisticsItem from './LogisticsItem';
import AddressIcon from '@/components/icons/address-icon';
import DateIcon from '@/components/icons/date-icon';
import classes from '@/styles/event-logistics.module.css';
import { IEventLogistics } from '@/types';

const EventLogistics = (props: IEventLogistics) => {
  const { date, address, image, imageAlt } = props;

  const humanReadableDate = new Date(date).toLocaleDateString('en-US', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });
  const addressText = address.replace(', ', '\n');

  return (
    <section className={classes.logistics}>
      <div className={classes.image}>
        <Image src={`/${image}`} alt={imageAlt} width={160} height={160} />
      </div>
      <ul className={classes.list}>
        <LogisticsItem icon={DateIcon}>
          <time>{humanReadableDate}</time>
        </LogisticsItem>
        <LogisticsItem icon={AddressIcon}>
          <address>{addressText}</address>
        </LogisticsItem>
      </ul>
    </section>
  );
};

export default EventLogistics;
