import PropTypes from 'prop-types';
import s from './Friends.module.css';

export default function Friends ({id, avatar , name, isOnline}){
    return (
        <li key={id} className={s.item}>
            <span
                className={`${s.status} ${isOnline ? s.online : s.notOnline}`}>
                
                </span>
  <img className={s.image} src={avatar} alt={name} width="48" />
  <p className={s.text}>{name}</p>
</li>
    )
}
Friends.propTypes = {
    avtar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline : PropTypes.bool.isRequired
}