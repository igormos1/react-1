import PropTypes from 'prop-types';
import Friend from './Friends';
import s from './Friends.module.css';

export default FriendsList;
function FriendsList({ friends }) {
    return (
        <ul className={s.friendList}>
            {friends.map(friend => (
                <Friend
                    key={friend.id}
                    avatar={friend.avatar}
                    name={friend.name}
                isOnline={friend.isOnline}/>
            )
                )}

        </ul>
    )
}
FriendsList.propTypes = {
    friends: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,  
        })
    )
}