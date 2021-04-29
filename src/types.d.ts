import { ReactNode } from 'react';

interface IEvent {
  id: string;
  title: string;
  description: string;
  location: string;
  date: string;
  image: string;
  isFeatured?: boolean;
}

interface IFeatured {
  featured: IEvent;
}

interface IEventList {
  events: IEvent[];
}

interface IEventSummary {
  title: string;
}

interface IEventLogistics {
  date: string;
  address: string;
  image: string;
  imageAlt: string;
}

interface IButton {
  link: string;
  children?: ReactNode;
}
