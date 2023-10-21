/* import React from "react";
import styles from "../../styles/Profile.module.css";
import { useAuth } from "../../contexts/CurrentUserContext";

const Profile = () => {
  const { currentUser } = useAuth();

  const user = {
    username: currentUser.user.username,
  };

  const recentPosts = [
    { id: 1, title: "Exploring React Hooks", date: "2023-10-15" },
    { id: 2, title: "Building Responsive Web Designs", date: "2023-10-12" },
    // ... more recent posts
  ];

  const items = [
    "Item 1",
    "Item 2",
    "Item 3",
    "Item 4",
    "Item 5",
    "Item 6",
    "Item 7",
    "Item 8",
    "Item 9",
    "Item 10",
  ];

  return (
    <>
      <div className={styles.ProfileContainer}>
        <div className={styles.LeftColumn}>
          <div className={styles.ProfileHeader}>
            { <Avatar
            src={user.avatarUrl}
            alt="User Avatar"
            className={styles.Avatar}
          />}
            <h2>This is your profile {user.username}</h2>
            <p>{user.bio}</p>
          </div>
        </div>
        <div className={styles.RightColumn}>
          <div className={styles.RecentPosts}>
            <h3>Recent Posts</h3>
            <ul>
              {recentPosts.map((post) => (
                <li key={post.id}>
                  <span className={styles.PostDate}>{post.date}</span>
                  <span className={styles.PostTitle}>{post.title}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div className={styles.ProfileContainer}>
        <div className={styles.LeftColumn}>
          <div className={styles.ProfileHeader}>
            <img />
            <h1>Here follows </h1>
          </div>
        </div>
        <div className={styles.RightColumn}>
          <div className={styles.RecentPosts}>
            <h3>Profile information</h3>
            <ul>
              {items.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
 */
