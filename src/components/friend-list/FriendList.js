import PropTypes from 'prop-types';
import styles from './friend-list.module.css';

const FriendList = ({ friends }) => (
  <div className={styles.frindList}>
    <ul className={styles.friendList__list}>
      {friends.map(({ id, avatar, name, isOnline }) =>
        (<li className={styles.friendList__item} key={id}>
          <span className={styles.friendList__status} style={{ backgroundColor: isOnline ? 'green' : 'red' }}></span>
          <img className={styles.friendList__avatar} src={avatar} alt='Аватар Пользователя' width='48' />
          <p className={styles.friendList__name}>{name}</p>
        </li>),
      )}
    </ul>
  </div>
);

FriendList.defaultProps = {
  avatar: 'Аватар Пользователя',
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        avatar: PropTypes.string.isRequired,
        isOnline: PropTypes.bool.isRequired,
      })
  ).isRequired

};


export default FriendList;

