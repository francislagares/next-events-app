import Link from 'next/link';

const EventItem = ({ featured }: IFeatured) => {
  const { id, title, description, location, date, image } = featured;

  const humanReadableDate = new Date(date).toLocaleDateString('en-US', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });

  const formattedAddress = location.replace(', ', '\n');
  const exploreLink = `/events/${id}`;

  return (
    <div className="featured-events" key={id}>
      <img src={`/${image}`} alt="Event" />
      <h2>{title}</h2>
      <p>{description}</p>
      <address>{formattedAddress}</address>
      <time>{humanReadableDate}</time>
      <Link href={exploreLink}>Explore Event</Link>
    </div>
  );
};

export default EventItem;
