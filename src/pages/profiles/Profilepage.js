import React, { useEffect, useRef, useState } from "react";

const Profile = () => {
  /*     useEffect(() => {})
  const fuckdig = async () => {
    try {
      const [{ data: pageProfile }] = await Promise.all([
        axios.get(`/profiles/${id}/`),
      ]);
      useSetProfileData((prevState) => ({
        ...prevState,
        pageProfile: { results: [pageProfile] },
      }));
    } catch (err) {
      console.log(err);
    }
    fuckdig()
  }; */

  /*   const [profileIssue, setProfileIssue] = useState({ results: [] });
  const { id } = useParams();
  const currentUser = useAuth();
  const { setProfileData } = useSetProfileData();
  const { pageProfile } = useProfileData();
  const [profile] = pageProfile.results;
  const is_owner = currentUser?.username === profile?.owner;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [{ data: pageProfile }, { data: profileIssue }] =
          await Promise.all([
            axios.get(`/profiles/${id}/`),
            axios.get(`/issue/?owner__profile=${id}`),
          ]);
        setProfileData((prevState) => ({
          ...prevState,
          pageProfile: { results: [pageProfile] },
        }));
        setProfileIssue(profileIssue);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, [id, setProfileData]); */

  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col-lg-3 ">
          <div className="profile-section text-center p-4 shadow user-info bg-light">
            <img
              /* src={profilePicture} */
              alt="Profile"
              className="profile-picture img-fluid mb-3 rounded-circle"
            />
            <input
              type="file"
              /* onChange={handlePictureChange} */
              accept="image/*"
              className="form-control"
            />
            <h1 className="mb-4">User's Name</h1>
            <p>Email: user@example.com</p>
            <p>Joined: January 1, 2023</p>
          </div>
        </div>
        <div className="col-lg-9">
          <div className="user-posts bg-light p-4 mt-4 shadow">
            <h2 className="mb-4">Issues</h2>
          </div>
          <div className="user-comments bg-light p-4 mt-4 shadow">
            <h2 className="mb-4">Comments</h2>
            {/*     <UserComments comments={comments} /> */}
          </div>
        </div>
      </div>
    </div>
  );
};

const UserPosts = ({ posts }) => {
  return (
    <ul className="list-unstyled">
      {posts.map((post, index) => (
        <li key={index} className="mb-2">
          {post.title}
        </li>
      ))}
    </ul>
  );
};

const UserComments = ({ comments }) => {
  return (
    <ul className="list-unstyled">
      {comments.map((comment, index) => (
        <li key={index} className="mb-2">
          {comment.text}
        </li>
      ))}
    </ul>
  );
};

export default Profile;
