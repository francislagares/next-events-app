/* eslint-disable no-restricted-syntax */
import { IEvent } from '@/types';

/* eslint-disable guard-for-in */
export const getAllEvents = async (): Promise<IEvent[]> => {
  const response = await fetch(
    'https://next-events-1d003-default-rtdb.firebaseio.com/events.json',
  );
  const data = await response.json();

  const events = [];

  for (const key in data) {
    events.push({
      id: key,
      ...data[key],
    });
  }

  return events;
};

export const getFeaturedEvents = async (): Promise<IEvent[]> => {
  const allEvents = await getAllEvents();

  return allEvents.filter((event) => event.isFeatured);
};
