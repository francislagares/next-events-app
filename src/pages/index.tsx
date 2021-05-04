import { GetStaticProps } from 'next';
import Head from 'next/head';
import EventsList from '@/components/events/EventsList';
import NewsletterRegistration from '@/components/input/newsletter-registration';
import { getFeaturedEvents } from '@/helpers/api-utils';
import { IEventList } from '@/types';

const Home = ({ events }: IEventList) => (
  <div>
    <Head>
      <title>NextJS Events</title>
      <meta
        name="description"
        content="Find a lot of great events that allow you to evolve..."
      />
    </Head>
    <NewsletterRegistration />
    <EventsList events={events} />
  </div>
);

export const getStaticProps: GetStaticProps = async () => {
  const featuredEvents = await getFeaturedEvents();

  return {
    props: { events: featuredEvents },
    revalidate: 1800,
  };
};

export default Home;
