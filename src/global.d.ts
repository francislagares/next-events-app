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
