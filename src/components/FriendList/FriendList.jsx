import css from './FriendList.module.css';
import { FriendListItem } from './FriendListItem';

export const FriendList = ({ friends }) => {
  return (
    <ul className={css.friendList}>
      {friends.map(f => {
        return (
          <FriendListItem
            key={f.id}
            avatar={f.avatar}
            name={f.name}
            isOnline={f.isOnline}
            id={f.id}
          />
        );
      })}
    </ul>
  );
};
