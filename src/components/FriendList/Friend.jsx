import css from 'components/FriendList/Friend.module.css';
import PropTypes from 'prop-types';

export const Friend = friend => {
  return (
    <li key={friend.id} className={css.item}>
      <span
        className={friend.isOnline === true ? css.isOnline : css.isOfline}
      ></span>
      <img
        className={css.avatar}
        src={friend.avatar}
        alt="User avatar"
        width="48"
      />
      <p className={css.name}>{friend.name}</p>
    </li>
  );
};

Friend.propTypes = {
  isOnline: PropTypes.bool.isRequired,
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};
