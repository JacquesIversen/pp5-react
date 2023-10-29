import React, { useEffect, useState } from "react";
import axios from "axios";
import Cookies from "js-cookie";
import UpdateProfile from "./UpdateProfile";
import { useHistory } from "react-router-dom/cjs/react-router-dom";

function ProfilePage() {
  // create a profile state variable
  const [profileData, setProfileDataState] = useState({});

  const [updateProfileM, setUpdateProfileM] = useState(false);

  const history = useHistory();
  const fetchProfileData = async () => {
    try {
      // send request with url /me
      const { data } = await axios.get(`/me/`, {
        headers: { Authorization: `Bearer ${Cookies.get("access")}` },
      });
      setProfileDataState(data);
      console.log(data);
    } catch (err) {
      console.log(err.response.status);
      if (err.response.status === 401) {
        history.push("/signin");
      }
    }
  };
  useEffect(() => {
    fetchProfileData();
  }, []);

  const handleUpdateProfile = ({ name, image, biography }) => {
    console.log("update profile");
    console.log(name, image, biography);
    // create a form data object
    const formData = new FormData();
    // append the data to the form data object
    formData.append("name", name);
    formData.append("image", image);
    formData.append("biography", biography);
    // send a patch request with the form data object
    axios
      .patch(`/me/`, formData, {
        headers: { Authorization: `Bearer ${Cookies.get("access")}` },
      })
      .then((res) => {
        console.log(res);
        // set the profile data state to the response data
        setProfileDataState(res.data);
        // close the modal
        setUpdateProfileM(false);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      {updateProfileM && (
        <UpdateProfile
          handleUpdateProfile={handleUpdateProfile}
          setUpdateProfileM={setUpdateProfileM}
        />
      )}
      <div className="container mt-4">
        <div className="row">
          <div className="col-lg-3 ">
            <div className="profile-section text-center p-4 shadow user-info bg-light">
              <img
                src={profileData.image || "https://i.imgur.com/JSW6mEk.png"}
                alt="Profile"
                className="profile-picture img-fluid mb-3 rounded-circle"
              />
              <h1 className="mb-4">{profileData.name || "No name added"}</h1>
              <p>Email: {profileData.email || "No email added."}</p>
              <p>Joined: {profileData.date_joined || "No date"}</p>

              <p>{profileData.biography || "No date"}</p>
              <button
                onClick={() => setUpdateProfileM(true)}
                className="btn btn-primary btn-block mt-2 shadow"
              >
                Update Profile
              </button>
            </div>
          </div>
          <div className="col-lg-9">
            <div className="user-posts bg-light p-4 mt-4 shadow">
              <h2 className="mb-4">Here goes all Issues made by this user:</h2>
              {/* go over profile data issues */}
              {profileData?.issues?.map((issue) => {
                return (
                  <div
                    style={{
                      backgroundColor: "#f1f1f1",
                      padding: "10px",
                      marginBottom: "10px",
                      borderRadius: "10px",
                    }}
                  >
                    <p style={{ fontSize: "18px", fontWeight: "bold" }}>
                      {issue.title}
                    </p>
                    <p>{issue.created_at}</p>
                  </div>
                );
              })}
            </div>
            <div className="user-comments bg-light p-4 mt-4 shadow">
              <h2 className="mb-4">
                Here goes all comments made by this user:{" "}
              </h2>
              {profileData?.comments?.map((comment) => {
                return (
                  // some sort of smple box to display comments
                  <div
                    style={{
                      backgroundColor: "#f1f1f1",
                      padding: "10px",
                      marginBottom: "10px",
                      borderRadius: "10px",
                    }}
                  >
                    <p style={{ fontSize: "18px", fontWeight: "bold" }}>
                      {comment.comment_area}
                    </p>
                    <p>{comment.created_at}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProfilePage;
