import initialFriends from "./data";
import Friend from "./Friend";
export default function FriendsList() {
  return (
    <ul>
      {initialFriends.map((friend) => (
        <Friend friend={friend} key={friend.id} />
      ))}
    </ul>
  );
}
