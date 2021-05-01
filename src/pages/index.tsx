import EventsList from '@/components/events/EventsList';
import { getFeaturedEvents } from '@/data/dummy-data';

const Home = () => {
  const featuredEvents = getFeaturedEvents();

  return (
    <div>
      <EventsList events={featuredEvents} />
    </div>
  );
};

export default Home;
