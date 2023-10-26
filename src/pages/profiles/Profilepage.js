import React, { useEffect, useRef, useState } from "react";
import { useAuth } from "../../contexts/CurrentUserContext";
import { useParams } from "react-router-dom/cjs/react-router-dom";
import {
  useProfileData,
  useSetProfileData,
} from "../../contexts/ProfileDataContext";
import axios from "axios";

function ProfilePage() {
  const [profilePosts, setProfilePosts] = useState({ results: [] });
  const { currentUser } = useAuth();
  const { id } = useParams();
  const { setProfileData } = useSetProfileData();
  const { pageProfile } = useProfileData();
  const [profile] = pageProfile.results;
  const is_owner = currentUser?.username === profile?.is_owner;

  useEffect(() => {
    const fetchProfileData = async () => {
      try {
        const [{ data: pageProfile }, { data: profilePosts }] =
          await Promise.all([
            axios.get(`/profiles/${id}/`),
            axios.get(`/issues/?owner__profile=${id}`),
          ]);
        setProfileData((prevState) => ({
          ...prevState,
          pageProfile: {
            results: [pageProfile],
          },
        }));
        setProfilePosts(profilePosts);
      } catch (err) {
        console.log(err);
      }
    };
    fetchProfileData();
  }, [id, setProfileData]);

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
}

export default ProfilePage;
