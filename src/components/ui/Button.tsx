import Link from 'next/link';
import classes from '@/styles/button.module.css';
import { IButton } from '@/types';

const Button = ({ link, children, onClick }: IButton) => {
  if (link) {
    return (
      <Link href={link}>
        <a className={classes.btn}>{children}</a>
      </Link>
    );
  }

  return (
    <button type="submit" className={classes.btn} onClick={onClick}>
      {children}
    </button>
  );
};
export default Button;
