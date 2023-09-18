import React from "react";
import styles from "./ProfileList.module.css";
import Profile from "../Profile/Profile";
import { profiles } from "./profile-data";

const ProfileList = () => {
  return (
    <section className={styles.center}>
      <div>
        <h1>Team Members</h1>
        <div className={styles["profile-container"]}>
          {profiles.map((profile) => {
            const { key, img, name, job, company, link } = profile;
            return (
              <Profile
                key={key}
                image={img}
                name={name}
                job={job}
                company={company}
                link={link}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProfileList;
