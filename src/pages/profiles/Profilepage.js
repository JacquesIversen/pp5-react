import React, { useEffect, useState } from "react";
import axios from "axios";
import Cookies from "js-cookie";

function ProfilePage() {
  // create a profile state variable
  const [profileData, setProfileDataState] = useState({});

  const fetchProfileData = async () => {
    try {
      // send request with url /me
      const { data } = await axios.get(`/me/`, {
        headers: { Authorization: `Bearer ${Cookies.get("access")}` },
      });
      setProfileDataState(data);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    fetchProfileData();
  }, []);

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
            <h1 className="mb-4">{profileData.name || "No name added"}</h1>
            <p>Email: user@example.com</p>
            <p>Joined: January 1, 2023</p>
          </div>
        </div>
        <div className="col-lg-9">
          <div className="user-posts bg-light p-4 mt-4 shadow">
            <h2 className="mb-4">Issues</h2>
            {/* go over profile data issues */}
            {profileData?.issues?.map((issue) => {
              return <p>{issue.title}</p>;
            })}
          </div>
          <div className="user-comments bg-light p-4 mt-4 shadow">
            <h2 className="mb-4">Comments</h2>
            {/*     <UserComments comments={comments} /> */}
            {profileData?.comments?.map((comment) => {
              return <p>{comment.comment_area}</p>;
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfilePage;
