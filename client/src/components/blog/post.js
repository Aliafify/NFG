import React, { useState } from "react";
import Header from "../About/header";
import Modal from "../modal/modal";
import "./post.css";
import PostData from "./postData";
function Post({ light, post }) {
  const [isOpen, setIsOpen] = useState(false);
  const [projectId, setProjectId] = useState(null);
  return (
    <>
      {post ? (
        <div
          onClick={() => {
            setIsOpen(true);
          }}
          className="post-cont"
        >
          <div className="img-cont">
            <img src={post.image} />
          </div>
          <div
            className="post-content"
            style={{ backgroundColor: `${light ? "#f5f8fc" : "#252525"}` }}
          >
            <h2>{post.title}</h2>
            <p>{post.discription}</p>
          </div>
        </div>
      ) : (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            color: `${light ? "#333" : "#fff"}`,
          }}
        >
          No Posts yet......
        </div>
      )}
      <Modal
        open={isOpen}
        projectId={projectId}
        onClose={() => setIsOpen(false)}
        light={light}
        width={  '60vw'}
        height= {'90vh'}
      >
    
     <PostData post={post} light={light}/>
      </Modal>
    </>
  );
}

export default Post;
