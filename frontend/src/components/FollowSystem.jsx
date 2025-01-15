import { useState } from "react";
import axios from "axios";

const FollowSystem = ({ userId }) => {
  const [followers, setFollowers] = useState([]);
  const [following, setFollowing] = useState([]);

  const handleFollow = async (followingId) => {
    await followUser(userId, followingId);
    fetchFollowers(); // Refresh followers list
  };

  const handleUnfollow = async (followingId) => {
    await unfollowUser(userId, followingId);
    fetchFollowing(); // Refresh following list
  };

  const fetchFollowers = async () => {
    const followersList = await getFollowers(userId);
    setFollowers(followersList || []);
  };

  const fetchFollowing = async () => {
    const followingList = await getFollowing(userId);
    setFollowing(followingList || []);
  };

  return (
    <div>
      <h2>Follow System</h2>
      <button onClick={fetchFollowers}>Fetch Followers</button>
      <button onClick={fetchFollowing}>Fetch Following</button>

      <h3>Followers</h3>
      <ul>
        {followers.map((follower) => (
          <li key={follower.id}>{follower.name}</li>
        ))}
      </ul>

      <h3>Following</h3>
      <ul>
        {following.map((follow) => (
          <li key={follow.id}>
            {follow.name}{" "}
            <button onClick={() => handleUnfollow(follow.id)}>Unfollow</button>
          </li>
        ))}
      </ul>

      <button onClick={() => handleFollow(2)}>Follow User 2</button>
    </div>
  );
};

export default FollowSystem;
