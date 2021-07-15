import React from "react";
import PropTypes from "prop-types";
import s from "./Friends.module.css";

export const FriendCard = ({ avatar, name, isOnline }) => (
  <li className={s.item}>
    <span className={isOnline ? s.isOnline : s.isOffline}></span>
    <img className={s.avatar} src={avatar} alt={avatar} width="48" />
    <p className={s.name}>{name}</p>
  </li>
);

FriendCard.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};
