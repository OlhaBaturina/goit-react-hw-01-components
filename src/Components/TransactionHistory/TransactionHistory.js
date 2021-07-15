import React from "react";
import PropTypes from "prop-types";
import transaction from "./transactions.json";
import s from "./Transaction.module.css";

export const TransactionHistory = ({ id, type, amount, currency }) => (
  <table className={s.transactionHistory}>
    <thead>
      <tr className={s.tableName}>
        <th>Type</th>
        <th>Amount</th>
        <th>Currency</th>
      </tr>
    </thead>

    <tbody>
      {transaction.map(({ id, type, amount, currency }) => (
        <tr key={id}>
          <td className={s.type}>{type}</td>
          <td>{amount}</td>
          <td>{currency}</td>
        </tr>
      ))}
    </tbody>
  </table>
);

//   <section className={s.statistics}>
//     {title && <h2 className={s.title}>{title}</h2>}
//     <ul className={s.stat}>
//       {stats.map(({ id, label, percentage }) => (
//         <StatsItem key={id} label={label} percentage={percentage} />
//       ))}
//     </ul>
//   </section>

// TransactionHistory.propTypes = {
//   stats: PropTypes.arrayOf(
//     PropTypes.shape({
//       id: PropTypes.string.isRequired,
//     }).isRequired
//   ),
// };
