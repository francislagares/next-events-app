/* eslint-disable no-restricted-syntax */
import { IDate, IEvent } from '@/types';

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

export const getEventById = async (
  id: string | string[] | undefined,
): Promise<IEvent | undefined> => {
  const allEvents = await getAllEvents();

  return allEvents.find((event) => event.id === id);
};

export const getFilteredEvents = async (dateFilter: IDate) => {
  const { year, month } = dateFilter;

  const allEvents = await getAllEvents();

  const filteredEvents = allEvents.filter((event) => {
    const eventDate = new Date(event.date);
    return (
      eventDate.getFullYear() === year && eventDate.getMonth() === month - 1
    );
  });

  return filteredEvents;
};
