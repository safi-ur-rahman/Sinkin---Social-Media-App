import React, { useEffect, useState } from "react";
import GoBack from "../GoBack";
import "./PostView.css";
import { Container, Stack } from "@mui/material";
import GridLayout from "../GridLayout";
import Loading from "../Loading";
import Navbar from "../Navbar";
import PostCard from "../PostCard";
import Sidebar from "../Sidebar";
import { useParams } from "react-router-dom";
import { getPost } from "../../api/posts";
import Comments from "../Comments";
import ErrorAlert from "../ErrorAlert";
import { isLoggedIn } from "../../helpers/authHelper";

const PostView = () => {
  const params = useParams();

  const [post, setPost] = useState(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);
  const user = isLoggedIn();

  const fetchPost = async () => {
    setLoading(true);
    const data = await getPost(params.id, user && user.token);
    if (data.error) {
      setError(data.error);
    } else {
      setPost(data);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchPost();
  }, [params.id]);

  return (
    <div className="post-view-container">
      <Navbar />
      <GoBack />
      <div className="grid-layout">
        {loading ? (
          <Loading />
        ) : post ? (
          <div className="post-content">
            <PostCard post={post} key={post._id} />
            <Comments />
          </div>
        ) : (
          error && <ErrorAlert error={error} />
        )}
        <Sidebar />
      </div>
    </div>
  );
};

export default PostView;
