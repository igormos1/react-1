import PropTypes from 'prop-types';
import s from './Transactions.module.css';

export default function Transactions({ type, amount, currency }) {
    return (
        <tr className={s.tr}>
            <td className={s.td}>{type}</td>
            <td className={s.td}>{amount}</td>
            <td className={s.td}>{currency}</td>
      
        </tr>
    );
}

 Transactions.propTypes = {
    type: PropTypes.string.isRequired,
    amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,

}
