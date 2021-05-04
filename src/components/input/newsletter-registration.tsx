import { useRef } from 'react';
import classes from '@/styles/newsletter-registration.module.css';
import { Submit } from '@/types';

const NewsletterRegistration = () => {
  const emailRef = useRef<HTMLInputElement>(null);

  const registrationHandler = (event: Submit) => {
    event.preventDefault();

    const enteredEmail = emailRef.current?.value;

    fetch('/api/newsletter', {
      method: 'POST',
      body: JSON.stringify({ email: enteredEmail }),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => response.json())
      .then((data) => console.log(data));

    // fetch user input (state or refs)
    // optional: validate input
    // send valid data to API
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
