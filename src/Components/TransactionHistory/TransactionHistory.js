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

TransactionHistory.propTypes = {
  id: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  amount: PropTypes.string.isRequired,
  currency: PropTypes.string.isRequired,
};
