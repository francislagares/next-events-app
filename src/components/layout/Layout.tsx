import { useContext } from 'react';
import Notification from '../ui/Notification';
import MainHeader from './MainHeader';
import NotificationContext from '@/store/NotificationContext';

const Layout: React.FC = ({ children }) => {
  const notificationCtx = useContext(NotificationContext);

  const activeNotification = notificationCtx.notification;

  return (
    <>
      <MainHeader />
      <main>{children}</main>
      {activeNotification && (
        <Notification
          title={activeNotification.title}
          message={activeNotification.message}
          status={activeNotification.status}
        />
      )}
    </>
  );
};

export default Layout;
