import React, { useState } from "react";
import Title from "./components/Title";
import { FaRegCommentDots } from "react-icons/fa6";
import { FcDislike, FcLike } from "react-icons/fc";

const LikePhoto = () => {
  const [like, setLike] = useState(false);
  const [count, setCount] = useState(0);
  const handleLike = () => {
    setLike(!like);
    like ? setCount((prev) => prev - 1) : setCount((prev) => prev + 1);
    // if (like) {
    //   setCount(count - 1);
    // } else {
    //   setCount(count + 1);
    // }
  };
  return (
    <>
      <Title classes={"title"} text={"Like My Photo"} />
      <p style={{width: "50vw", textAlign: "center", margin: "1rem auto"}}>
        Here I have created one card with header, image and footer. You can see the &quot;1&quot; if photo is liked otherwise &quot;0&quot;.
        <ol style={{marginTop: "1rem", textAlign: "left"}}>
        Here you can like and dislike the photo by followin two ways:
          <li>By double click on the image</li>
          <li>By clicking on the like/dislike icon</li>
        </ol>
      </p>
      <div className="card">
        <div className="likes">
          <Title classes={"subTitle"} text={"Likes"} />
          {count}
        </div>
        <img
          src="https://picsum.photos/200/300?image=100"
          alt="Avatar"
          style={{ width: "100%" }}
          onDoubleClick={handleLike}
        />
        <div className="container">
          <FaRegCommentDots />
          <div onClick={handleLike}>{like ? <FcLike /> : <FcDislike />}</div>
        </div>
      </div>
    </>
  );
};

export default LikePhoto;
