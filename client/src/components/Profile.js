import React, { useEffect, useState } from "react";
import { isLoggedIn } from "../helpers/authHelper";
import ContentUpdateEditor from "./ContentUpdateEditor";
import Footer from "./Footer";
import Loading from "./Loading";
import UserAvatar from "./UserAvatar";
import "./profile.css";

const Profile = (props) => {
  const [user, setUser] = useState(null);
  const currentUser = isLoggedIn();

  useEffect(() => {
    if (props.profile) {
      setUser(props.profile.user);
    }
  }, [props.profile]);

  return (
    <div className="profile-card">
      {user ? (
        <div className="profile-content">
          <div className="profile-avatar">
            <UserAvatar width={150} height={150} username={user.username} />
          </div>

          <h5 className="profile-username">{user.username}</h5>

          {props.editing ? (
            <div className="profile-bio-editor">
              <ContentUpdateEditor
                handleSubmit={props.handleSubmit}
                originalContent={user.biography}
                validate={props.validate}
              />
            </div>
          ) : user.biography ? (
            <p className="profile-bio">
              <b>Bio: </b>
              {user.biography}
            </p>
          ) : (
            <p className="profile-bio">
              <i>No bio yet</i>
            </p>
          )}

          {currentUser && user._id === currentUser.userId && (
            <div className="profile-edit-button">
              <button
                className="edit-button"
                onClick={props.handleEditing}
              >
                {props.editing ? "Cancel" : "Edit bio"}
              </button>
            </div>
          )}

          {currentUser && user._id !== currentUser.userId && (
            <button className="message-button" onClick={props.handleMessage}>
              Message
            </button>
          )}

          <p className="profile-sp">
            SP{" "}
            <b>
              {(
                props.profile.posts.likeCount * 2 +
                props.profile.posts.count * 1.5
              ).toFixed(2)}
            </b>
          </p>
        </div>
      ) : (
        <Loading label="Loading profile" />
      )}
    </div>
  );
};

export default Profile;
