import css from './Profile.module.css';

export const Profile = ({ username, tag, location, avatar, stats }) => {
  return (
    <div className={css.profile}>
      <div className={css.profileDescription}>
        <img src={avatar} alt="User avatar" className={css.avatar} />
        <p className={css.profileName}>{username}</p>
        <p className={css.profileTag}>{tag}</p>
        <p className={css.profileLocation}>{location}</p>
      </div>

      <ul className={css.profileStatsList}>
        <li className={css.statsItemF}>
          <span className={css.profileLabel}>Followers</span>
          <span className={css.profileQuantity}>{stats.followers}</span>
        </li>
        <li className={css.statsItemS}>
          <span className={css.profileLabel}>Views</span>
          <span className={css.profileQuantity}>{stats.views}</span>
        </li>
        <li className={css.statsItemT}>
          <span className={css.profileLabel}>Likes</span>
          <span className={css.profileQuantity}>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
};
