import initialFriends from "./data";
import Friend from "./Friend";
export default function FriendsList() {
  return (
    <div className="sidebar">
      <ul>
        {initialFriends.map((friend) => (
          <Friend friend={friend} key={friend.id} />
        ))}
      </ul>
    </div>
  );
}
