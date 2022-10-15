import PropTypes from "prop-types";
import styles from '../social-profile/social-profile.module.css'

const User = ({ name, tag, location, avatar, stats }) => (
        <div  className={styles.profile}>
        <div className={styles.description}>
            <div className={styles.photo}>
                <img
                    src={avatar}
                    alt="Аватар пользователя"
                    className={styles.avatar}
                />
                </div>
                <p className={styles.name}>{name}</p>
                <p className={styles.tag}>@{tag}</p>
                <p className={styles.location}>{location}</p>
            </div>

            <ul className={styles.statsList}>
                <li className={styles.statsItem}>
                    <span className={styles.label}>Followers</span>
                    <span className={styles.quantity}>{stats.followers}</span>
                </li>
                <li className={styles.statsItem}>
                    <span class={styles.label}>Views</span>
                    <span class={styles.quantity}>{stats.views}</span>
                </li>
                <li className={styles.statsItem}>
                    <span class={styles.label}>Likes</span>
                    <span class={styles.quantity}>{stats.likes}</span>
                </li>
            </ul>
        </div>
);

User.defaultProps = {
    avatar: 'Аватар Пользователя',
    location: 'Страна, город проживания'

}

User.propTypes = {
    name: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string,
    avatar: PropTypes.string,
    stats: PropTypes.number.isRequired
};

export default User;
