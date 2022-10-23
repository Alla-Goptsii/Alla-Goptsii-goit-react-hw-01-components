import css from './FriendList.module.css';
import PropTypes from 'prop-types';

export const FriendList = ({ friends }) => {
  return friends.map(friend => {
    return (
      <li key={friend.id} className={css.item}>
        <span className={css.status}></span>
        <img
          className={css.avatar}
          src={friend.avatar}
          alt="User avatar"
          width="48"
        />
        <p className={css.name}>{friend.name}</p>
      </li>
    );
  });
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.number,
      avatar: PropTypes.string,
      name: PropTypes.string,
      isOnline: PropTypes.bool,
    })
  ).isRequired,
};
