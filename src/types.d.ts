import React, { ReactNode } from 'react';

interface IEvent {
  id: string;
  title: string;
  description: string;
  location: string;
  date: string;
  image: string;
  isFeatured?: boolean;
}

interface IEventItem {
  event: IEvent;
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
  link?: string;
  children?: ReactNode;
  onClick?: () => void;
}

interface IDate {
  date: Date;
}

type Year = string | undefined;
type Month = string | undefined;

interface IFilter {
  onFilter: (year: Year, month: Month) => void;
}

type Submit = React.FormEvent<HTMLFormElement>;
