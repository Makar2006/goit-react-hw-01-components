import css from './FriendListItem.module.css';

export const FriendListItem = ({ avatar, name, isOnline, id }) => {
  return (
    <li className={css.friendListItemItem} key={id}>
      <span className={isOnline ? css.isOnline : css.isOfline}></span>
      <img
        className={css.friendListItemAvatar}
        src={avatar}
        alt={name}
        width="48"
      />
      <p className={css.friendListItemName}>{name}</p>
    </li>
  );
};
