import React, { useEffect, useState } from "react";
import axios from "axios";
import Cookies from "js-cookie";
import UpdateProfile from "./UpdateProfile";
import { useHistory } from "react-router-dom/cjs/react-router-dom";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import styles from "../../styles/Profile.module.css";
import Asset from "../../components/Asset";

function ProfilePage() {
  const [profileData, setProfileDataState] = useState({});
  const [updateProfileM, setUpdateProfileM] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const history = useHistory();

  useEffect(() => {
    const fetchProfileData = async () => {
      setIsLoading(true);

      try {
        const { data } = await axios.get(`/me/`, {
          headers: { Authorization: `Bearer ${Cookies.get("access")}` },
        });
        setProfileDataState(data);
      } catch (err) {
        if (err.response.status === 401) {
          history.push("/signin");
        }
      }
      setIsLoading(false);
    };

    fetchProfileData();
  }, [history]);

  const handleUpdateProfile = ({ name, image, biography }) => {
    const formData = new FormData();
    formData.append("name", name);
    formData.append("image", image);
    formData.append("biography", biography);
    axios
      .patch(`/me/`, formData, {
        headers: { Authorization: `Bearer ${Cookies.get("access")}` },
      })
      .then((res) => {
        setProfileDataState(res.data);
        setUpdateProfileM(false);
      })
      .catch((err) => {});
  };

  return (
    <>
      {isLoading && <Asset spinner />}
      {updateProfileM && (
        <UpdateProfile
          handleUpdateProfile={handleUpdateProfile}
          setUpdateProfileM={setUpdateProfileM}
        />
      )}
      <div className={`container mt-4 ${styles.userInfo}`}>
        <div className="row">
          <div className="col-lg-3 ">
            <div
              className={`profile-section text-center p-4 shadow ${styles.userInfo}`}
            >
              <img
                src={profileData.image || "https://i.imgur.com/JSW6mEk.png"}
                alt="Profile"
                className="profile-picture img-fluid mb-3 rounded-circle"
              />
              <h3 className="mb-4 font-weight-bold">
                {profileData.name || ""}
              </h3>
              <p>{profileData.biography || ""}</p>
              <p>Joined: {profileData.date_joined || "No date"}</p>
              <button
                onClick={() => setUpdateProfileM(true)}
                className={`btn btn-primary btn-block mt-2 shadow ${styles.updateProfileBtn}`}
              >
                Update Profile
              </button>
            </div>
          </div>
          <div className="col-lg-9">
            <div
              className={`user-posts bg-light p-4 mt-4 shadow ${styles.issueContainer}`}
            >
              <h2 className="mb-4">Find your latest issues posted:</h2>
              {profileData?.issues?.map((issue, index) => {
                return (
                  <Link
                    to={`/issue/${issue?.id}`}
                    className={styles.linkStyle}
                    key={`issue-${index}`}
                  >
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
            <div
              className={`user-comments bg-light p-4 mt-4 shadow ${styles.issueContainer}`}
            >
              <h2 className="mb-4">Comments you made recently:</h2>
              {profileData?.comments?.map((comment, index) => {
                return (
                  <Link
                    to={`/issue/${comment?.issue}`}
                    className={styles.linkStyle}
                    key={`comment-${index}`}
                  >
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
                  </Link>
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
