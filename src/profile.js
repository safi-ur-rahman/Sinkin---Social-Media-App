import React from "react";
import Button from "react-bootstrap/Button";
import Badge from "react-bootstrap/Badge";
import "./profile.css";

const Profile = () => {
  return (
    <div className="parallel">
      <div>
        <div>
          <div className="Main">
            <img className="profileimage" src={require("./Images/pf.png")} alt=""/>
            <div className="UserDetails">
              <h2> Ali Ahmad Azhar</h2>
              <div style={{ display: "flex", alignItems: "baseline" }}>
                <h4 style={{ marginRight: "5px" }}> Sink_In Score </h4>
                <Badge bg="success">240 pts</Badge>
              </div>
              <div style={{ display: "flex", alignItems: "baseline" }}>
                <h4 style={{ marginRight: "5px" }}> Number of Posts </h4>
                <Badge bg="success">20</Badge>
              </div>
              <div>
                <Button variant="outline-primary">Followers</Button>{" "}
                <Button variant="outline-primary">Requests</Button>{" "}
              </div>
            </div>
          </div>
          <div style={{margin:'50px'}}>
          <div style={{ display: "flex", alignItems: "baseline" }}>
            <Badge bg="secondary">Bio</Badge>{" "}
            <p className="Bio">A heavy storm makes a great sailor </p>
          </div>
          <Button variant="outline-primary">Communities</Button>{" "}
          <Button variant="outline-success">HomePage</Button>{" "}
          </div>
        </div>
      </div>

      <div style={{marginTop : '100px'}}>
        <div className="posts">
          <img className="postimage" src={require("./Images/Untitled.jpg")} alt=""/>
          <p> Captions</p>{" "}
          <div>
            <div className="flexrow">
              <p>Likes</p>{" "}
              <Badge bg="warning" text="dark">
                2k
              </Badge>{" "}
            </div>
            <div className="flexrow">
              <p>Comments</p>
              <Badge bg="warning" text="dark">
                523
              </Badge>{" "}
            </div>
            <div className="flexrow">
              <p>Shares</p>
              <Badge bg="danger" text="dark">
                0
              </Badge>{" "}
            </div>
          </div>
        </div>
        <div className="posts">
          <img className="postimage" src={require("./Images/Untitled.jpg")} alt=""/>
          <p> Captions</p>{" "}
          <div>
            <div className="flexrow">
              <p>Likes</p>{" "}
              <Badge bg="warning" text="dark">
                2k
              </Badge>{" "}
            </div>
            <div className="flexrow">
              <p>Comments</p>
              <Badge bg="warning" text="dark">
                523
              </Badge>{" "}
            </div>
            <div className="flexrow">
              <p>Shares</p>
              <Badge bg="danger" text="dark">
                0
              </Badge>{" "}
            </div>
          </div>
        </div>

        <div className="posts">
          <img className="postimage" src={require("./Images/Untitled.jpg")} alt=""/>
          <p> Captions</p>{" "}
          <div>
            <div className="flexrow">
              <p>Likes</p>{" "}
              <Badge bg="warning" text="dark">
                2k
              </Badge>{" "}
            </div>
            <div className="flexrow">
              <p>Comments</p>
              <Badge bg="warning" text="dark">
                523
              </Badge>{" "}
            </div>
            <div className="flexrow">
              <p>Shares</p>
              <Badge bg="danger" text="dark">
                0
              </Badge>{" "}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
