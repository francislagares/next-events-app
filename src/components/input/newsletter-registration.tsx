import { useRef, useContext } from 'react';
import NotificationContext from '@/store/NotificationContext';
import classes from '@/styles/newsletter-registration.module.css';
import { Submit } from '@/types';

const NewsletterRegistration = () => {
  const emailRef = useRef<HTMLInputElement>(null);
  const notificationCtx = useContext(NotificationContext);

  const registrationHandler = (event: Submit) => {
    event.preventDefault();

    const enteredEmail = emailRef.current?.value;

    notificationCtx.showNotification({
      title: 'Signin up...',
      message: 'Registering for pending',
      status: 'pending',
    });

    fetch('/api/newsletter', {
      method: 'POST',
      body: JSON.stringify({ email: enteredEmail }),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        }

        return response.json().then((data) => {
          throw new Error(data.message || 'Something went wrong!');
        });
      })
      .then((data) => {
        notificationCtx.showNotification({
          title: 'Success!',
          message: 'Successfully registered for newsletter!',
          status: 'success',
        });
      })
      .catch((error) => {
        notificationCtx.showNotification({
          title: 'Error!',
          message: error.message || 'Something went wrong!',
          status: 'error',
        });
      });
  };

  return (
    <section className={classes.newsletter}>
      <h2>Sign up to stay updated!</h2>
      <form onSubmit={registrationHandler}>
        <div className={classes.control}>
          <input
            type="email"
            id="email"
            placeholder="Your email"
            aria-label="Your email"
            ref={emailRef}
          />
          <button type="submit">Register</button>
        </div>
      </form>
    </section>
  );
};

export default NewsletterRegistration;
