import PropTypes from "prop-types";
import s from "./Profile.module.css";

const Profile = ({ avatar, name, tag, location, stats }) => {
  return (
    <div className={s.profile}>
      <div className="description">
        <img className={s.avatar} src={avatar} alt="Аватар пользователя" />
        <p className={s.name}>{name}</p>
        <p className="tag">{tag}</p>
        <p className="location">{location}</p>
      </div>
      <ul className="stats">
        <li>
          <span className="label">Followers </span>
          <span className="quantity">{stats.followers}</span>
        </li>
        <li>
          <span className="label">Views </span>
          <span className="quantity">{stats.views}</span>
        </li>
        <li>
          <span className="label">Likes </span>
          <span className="quantity">{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
};

Profile.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  stats: PropTypes.number.isRequired,
};

export default Profile;
