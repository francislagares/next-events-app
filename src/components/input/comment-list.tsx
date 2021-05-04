import classes from '@/styles/comment-list.module.css';

const CommentList = () => (
  <ul className={classes.comments}>
    {/* Render list of comments - fetched from API */}
    <li>
      <p>My comment is amazing!</p>
      <div>
        By <address>Francis</address>
      </div>
    </li>
    <li>
      <p>My comment is amazing!</p>
      <div>
        By <address>Francis</address>
      </div>
    </li>
  </ul>
);

export default CommentList;
