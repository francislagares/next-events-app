import classes from '@/styles/error-alert.module.css';

const ErrorAlert: React.FC = ({ children }) => (
  <div className={classes.alert}>{children}</div>
);

export default ErrorAlert;
