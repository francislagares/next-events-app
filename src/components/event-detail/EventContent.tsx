import classes from '@/styles/event-content.module.css';

const EventContent: React.FC = ({ children }) => (
  <section className={classes.content}>{children}</section>
);

export default EventContent;
