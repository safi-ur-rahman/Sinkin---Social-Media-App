import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getUser, updateUser } from "../../api/users";
import { isLoggedIn } from "../../helpers/authHelper";
import CommentBrowser from "../CommentBrowser";
import ErrorAlert from "../ErrorAlert";
import Footer from "../Footer";
import GoBack from "../GoBack";
import Loading from "../Loading";
import MobileProfile from "../MobileProfile";
import Navbar from "../Navbar";
import PostBrowser from "../PostBrowser";
import Profile from "../Profile";
import ProfileTabs from "../ProfileTabs";
import "./ProfileView.css";

const ProfileView = () => {
  const [loading, setLoading] = useState(true);
  const [profile, setProfile] = useState(null);
  const [editing, setEditing] = useState(false);
  const [tab, setTab] = useState("posts");
  const user = isLoggedIn();
  const [error, setError] = useState("");
  const params = useParams();
  const navigate = useNavigate();

  const fetchUser = async () => {
    setLoading(true);
    const data = await getUser(params);
    setLoading(false);
    if (data.error) {
      setError(data.error);
    } else {
      setProfile(data);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const content = e.target.content.value;

    await updateUser(user, { biography: content });

    setProfile({ ...profile, user: { ...profile.user, biography: content } });
    setEditing(false);
  };

  const handleEditing = () => {
    setEditing(!editing);
  };

  const handleMessage = () => {
    navigate("/messenger", { state: { user: profile.user } });
  };

  useEffect(() => {
    fetchUser();
  }, []);

  const validate = (content) => {
    let error = "";

    if (content.length > 250) {
      error = "Bio cannot be longer than 250 characters";
    }

    return error;
  };

  let tabs;
  if (profile) {
    tabs = {
      posts: (
        <PostBrowser
          profileUser={profile.user}
          contentType="posts"
          key="posts"
        />
      ),
      liked: (
        <PostBrowser
          profileUser={profile.user}
          contentType="liked"
          key="liked"
        />
      ),
      comments: <CommentBrowser profileUser={profile.user} />,
    };
  }

  return (
    <div className="profile-view-container">
      <Navbar />
      <GoBack />
      <div className="grid-layout">
        <div className="left-column">
          <MobileProfile
            profile={profile}
            editing={editing}
            handleSubmit={handleSubmit}
            handleEditing={handleEditing}
            handleMessage={handleMessage}
            validate={validate}
          />
          <div className="tab-content">
            {profile ? (
              <>
                <ProfileTabs tab={tab} setTab={setTab} />
                {tabs[tab]}
              </>
            ) : (
              <Loading />
            )}
            {error && <ErrorAlert error={error} />}
          </div>
        </div>
        <div className="right-column">
          <Profile
            profile={profile}
            editing={editing}
            handleSubmit={handleSubmit}
            handleEditing={handleEditing}
            handleMessage={handleMessage}
            validate={validate}
          />
          {/* <FindUsers /> */}
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default ProfileView;
