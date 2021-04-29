import EventsList from '@/components/events/EventsList';
import { getFeaturedEvents } from '@/data/dummy-data';

const Home = () => {
  const featuredEvents = getFeaturedEvents();

  return (
    <div>
      <h1>The Home Page</h1>
      <EventsList events={featuredEvents} />
    </div>
  );
};

export default Home;
