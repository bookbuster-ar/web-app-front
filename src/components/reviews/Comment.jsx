const Comment = ({ comment }) => {
  const nameAndLastname = `${comment.by.name} ${comment.by.last_name}`;
  return (
    <article>
      <p>{comment.content}</p>
      <p>Por {nameAndLastname || 'unknown author'}</p>
      <p>{comment.createdAt} </p>
    </article>
  );
};

export default Comment;
