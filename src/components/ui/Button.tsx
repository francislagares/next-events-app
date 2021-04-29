import Link from 'next/link';
import classes from '@/styles/button.module.css';
import { IButton } from '@/types';

const Button = ({ link, children }: IButton) => (
  <Link href={link}>
    <a className={classes.btn}>{children}</a>
  </Link>
);

export default Button;
