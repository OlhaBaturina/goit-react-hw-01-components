import React from "react";
import PropTypes from "prop-types";
import friends from "./friends.json";
import s from "./Friends.module.css";
import { FriendCard } from "./FriendCard";

export const FriendList = () => (
  <ul className={s.friendList}>
    {friends.map(({ avatar, name, isOnline, id }) => (
      <FriendCard key={id} avatar={avatar} name={name} isOnline={isOnline} />
    ))}
  </ul>
);

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }).isRequired
  ),
};
