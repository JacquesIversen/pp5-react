import axios from "axios";
import React, { useEffect, useState } from "react";

const SolvedIssues = () => {
  /*   const [recentData, setRecentData] = useState();

  useEffect(() => {
    const handleMount = async () => {
      try {
        const { data } = await axios.get("/issue/?ordering=-comments_count");
        setRecentData((prevState) => ({
          ...prevState,
          popularProfiles: data,
        }));
      } catch (err) {
        console.log(err);
      }
    };

    handleMount();
  }, [currentUser]); */

  return (
    <div>
      {" "}
      <h2>Here goes solved issues</h2>
    </div>
  );
};

export default SolvedIssues;
