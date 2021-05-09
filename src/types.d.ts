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

interface IFilteredEvents {
  events: IEvent[];
  date: Date;
  hasError: boolean;
}

interface IButton {
  link?: string;
  children?: ReactNode;
  onClick?: () => void;
}

interface IDate {
  date: Date;
  month?: number | undefined;
  year?: number | undefined;
}

type Year = string | undefined;
type Month = string | undefined;

interface IFilter {
  onFilter: (year: Year, month: Month) => void;
}

type Submit = React.FormEvent<HTMLFormElement>;

interface IComment {
  id?: number;
  name: string;
  email: string;
  text: string;
}

interface ICommentList {
  comments: IComment[];
}

interface ICommentProps {
  onAddComment: (args: IComment) => void;
}

interface IContext {
  notification: INotification | null;
  showNotification: (notificationData: INotification) => void;
  hideNotification: () => void;
}

interface INotification {
  title: string;
  message: string;
  status: string;
}
