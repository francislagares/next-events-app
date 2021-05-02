import { GetStaticProps } from 'next';
import EventsList from '@/components/events/EventsList';
import { getFeaturedEvents } from '@/helpers/api-utils';
import { IEventList } from '@/types';

const Home = ({ events }: IEventList) => (
  <div>
    <EventsList events={events} />
  </div>
);

export const getStaticProps: GetStaticProps = async () => {
  const featuredEvents = await getFeaturedEvents();

  return {
    props: { events: featuredEvents },
  };
};

export default Home;
