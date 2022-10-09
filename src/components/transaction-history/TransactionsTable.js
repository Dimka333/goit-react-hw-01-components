import PropTypes from 'prop-types'
import styles from './transactions.module.css'

function upperFirstLetter(string) {
     return string[0].toUpperCase() + string.substr(1);
}

const TransactionsTable = ({ items }) => (
    <div>
        <table className={styles.transactions}>
  <thead>
    <tr className={styles.table_tr}>
      <th className={styles.table_th}>TYPE</th>
      <th className={styles.table_th}>AMOUNT</th>
      <th className={styles.table_th}>CURRENCY</th>
    </tr>
  </thead>

  <tbody>
   {items.map((items) =>
    (<tr className={styles.table_tr}>
      <td className={styles.table_td}>{ upperFirstLetter(items.type)}</td>
      <td className={styles.table_td}>{items.amount}</td>
      <td className={styles.table_td}>{items.currency}</td>
    </tr>))}
  </tbody>
</table>
</div>
);

TransactionsTable.propTypes = {
    items: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            type: PropTypes.string.isRequired,
            amount: PropTypes.string.isRequired,
            currency: PropTypes.string.isRequired,
      
        })
    ).isRequired,
};




export default TransactionsTable;