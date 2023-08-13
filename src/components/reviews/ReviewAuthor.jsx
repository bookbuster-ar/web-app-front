import { useSelector } from 'react-redux';
import { selectAllUsers } from '../../store/user/userSlice';

const ReviewAuthor = ({ userId }) => {
  const users = useSelector(selectAllUsers);

  const author = users.find((user) => user.id === userId);

  return <span>Por {author ? author.name : 'Unknown author'}</span>;
};

export default ReviewAuthor;
