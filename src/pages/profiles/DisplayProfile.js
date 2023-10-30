import React, { useEffect, useState } from "react";
import axios from "axios";
import Cookies from "js-cookie";
import { useHistory } from "react-router-dom/cjs/react-router-dom";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

function DisplayProfile() {
  const [profileData, setProfileDataState] = useState({});
  const history = useHistory();

  useEffect(() => {
    const fetchProfileData = async () => {
      try {
        const { data } = await axios.get(`/me/`, {
          headers: { Authorization: `Bearer ${Cookies.get("access")}` },
        });
        setProfileDataState(data);
      } catch (err) {
        console.log(err.response.status);
        if (err.response.status === 401) {
          history.push("/signin");
        }
      }
    };

    fetchProfileData();
  }, [history]);

  return (
    <>
      <div className="container mt-4">
        <div className="row">
          <div className="col-lg-3 ">
            <div className="profile-section text-center p-4 shadow user-info bg-light">
              <img
                src={profileData.image || "https://i.imgur.com/JSW6mEk.png"}
                alt="Profile"
                className="profile-picture img-fluid mb-3 rounded-circle"
              />
              <h1 className="mb-4">{profileData.name || ""}</h1>
              <p>{profileData.biography || ""}</p>
              <p>Joined: {profileData.date_joined || "No date"}</p>
              <button className="btn btn-primary btn-block mt-2 shadow">
                Update Profile
              </button>
            </div>
          </div>
          <div className="col-lg-9">
            <div className="user-posts bg-light p-4 mt-4 shadow">
              <h2 className="mb-4">Here goes all Issues made by this user:</h2>
              {profileData?.issues?.map((issue) => {
                return (
                  <Link to={`/issue/${issue?.id}`}>
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
                  </Link>
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

export default DisplayProfile;
