import PropTypes from 'prop-types';
import s from './User.module.css'

export default function User({
    avatar,
    username,
    tag,
    location,
    userFollowers,
    userViews,
    userLikes }) {
    return (
        <div className={s.profile}>
            <div className={s.description}>
                <img
                    src={avatar}
                    alt={username}
                    className={s.avatar}
                />
                <p className={s.name}>{username}</p>
                <p className={s.tag}>{tag}</p>
                <p className={s.location}>{location}</p>
            </div>

            <ul className={s.stats}>
                <li className={s.statsItem}>
                    <span className={s.label}>Followers</span>
                    <span className={s.quantity}>{userFollowers}</span>
                </li>
                <li className={s.statsItem}>
                    <span className={s.label}>Views</span>
                    <span className={s.quantity}>{userViews}</span>
                </li>
                <li className={s.statsItem}>
                    <span className={s.label}>Likes</span>
                    <span className={s.quantity}>{userLikes}</span>
                </li>
            </ul>
        </div>
    );
};

User.propTypes = {
    avatar: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    userFollowers: PropTypes.number.isRequired,
    userViews: PropTypes.number.isRequired,
    userLikes: PropTypes.number.isRequired,
};