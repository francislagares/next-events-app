import classes from '@/styles/comment-list.module.css';
import { ICommentList } from '@/types';

const CommentList = ({ comments }: ICommentList) => (
  <ul className={classes.comments}>
    {comments.map((comment) => (
      <li key={comment._id}>
        <p>{comment.text}</p>
        <div>
          By <address>{comment.name}</address>
        </div>
      </li>
    ))}
  </ul>
);

export default CommentList;
