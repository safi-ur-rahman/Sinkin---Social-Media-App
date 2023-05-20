import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { isLoggedIn } from "../helpers/authHelper";
import CommentEditor from "./CommentEditor";
import ContentDetails from "./ContentDetails";
import HorizontalStack from "./util/HorizontalStack";
import { deleteComment, updateComment } from "../api/posts";
import ContentUpdateEditor from "./ContentUpdateEditor";
import Markdown from "./Markdown";
import Moment from "react-moment";
import {
  AiFillEdit,
  AiOutlineLine,
  AiOutlinePlus,
  AiFillDelete,
} from "react-icons/ai";
import { MdCancel } from "react-icons/md";
import { BsReplyFill } from "react-icons/bs";
import"./comment.css"

const Comment = (props) => {
  const [minimised, setMinimised] = useState(props.depth % 4 === 3);
  const [replying, setReplying] = useState(false);
  const [editing, setEditing] = useState(false);
  const [comment, setComment] = useState(props.comment);
  const user = isLoggedIn();
  const isAuthor = user && user.userId === comment.commenter._id;
  const navigate = useNavigate();

  const handleSetReplying = () => {
    if (isLoggedIn()) {
      setReplying(!replying);
    } else {
      navigate("/login");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const content = e.target.content.value;

    await updateComment(comment._id, user, { content });

    const newCommentData = { ...comment, content, edited: true };

    setComment(newCommentData);

    props.editComment(newCommentData);

    setEditing(false);
  };

  const handleDelete = async () => {
    await deleteComment(comment._id, user);
    props.removeComment(comment);
  };

  let style = {
    backgroundColor: "#f0f0f0",
    borderRadius: 1.5,
    marginBottom: "8px",
    padding: 0,
  };

  if (props.depth % 2 === 1) {
    style.backgroundColor = "#444";
  }

  return (
    <div style={style}>
      <div className="comment-header">
        {props.profile ? (
          <div>
            <h6>
              <Link
                className="comment-link"
                to={"/posts/" + comment.post._id}
              >
                {comment.post.title}
              </Link>
            </h6>
            <p className="comment-timestamp">
              <Moment fromNow>{comment.createdAt}</Moment>{" "}
              {comment.edited && <>(Edited)</>}
            </p>
          </div>
        ) : (
          <div className="comment-details">
            <div className="comment-details-left">
              <ContentDetails
                username={comment.commenter.username}
                createdAt={comment.createdAt}
                edited={comment.edited}
              />

              <button
                className="comment-toggle-button"
                onClick={() => setMinimised(!minimised)}
              >
                {minimised ? (
                  <AiOutlinePlus size={15} />
                ) : (
                  <AiOutlineLine size={15} />
                )}
              </button>
            </div>
            <div className="comment-details-right">
              {!minimised && (
                <div className="comment-actions">
                  <button
                    className="comment-reply-button"
                    onClick={handleSetReplying}
                  >
                    {!replying ? (
                      <BsReplyFill color="blue" />
                    ) : (
                      <MdCancel color="blue" />
                    )}
                  </button>
                  {user && (isAuthor || user.isAdmin) && (
                    <div className="comment-admin-actions">
                      <button
                        className="comment-edit-button"
                        onClick={() => setEditing(!editing)}
                      >
                        {editing ? (
                          <MdCancel color="blue" />
                        ) : (
                          <AiFillEdit color="blue" />
                        )}
                      </button>
                      <button
                        className="comment-delete-button"
                        onClick={handleDelete}
                      >
                        <AiFillDelete color="red" />
                      </button>
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        )}
      </div>
      {!minimised && (
        <div className="comment-content-container">
          {!editing ? (
            <Markdown content={comment.content} />
          ) : (
            <ContentUpdateEditor
              handleSubmit={handleSubmit}
              originalContent={comment.content}
            />
          )}

          {replying && !minimised && (
            <div className="comment-editor-container">
              <CommentEditor
                comment={comment}
                addComment={props.addComment}
                setReplying={setReplying}
                label="What are your thoughts on this comment?"
              />
            </div>
          )}
          {comment.children && (
            <div className="comment-children-container">
              {comment.children.map((reply, i) => (
                <Comment
                  key={reply._id}
                  comment={reply}
                  depth={props.depth + 1}
                  addComment={props.addComment}
                  removeComment={props.removeComment}
                  editComment={props.editComment}
                />
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Comment;
