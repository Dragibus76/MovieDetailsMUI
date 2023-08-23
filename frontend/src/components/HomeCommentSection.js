import React from "react";
import CommentHomeCard from "./CommentHomeCard";
import { HomCommentsData } from "../mocks/HomeCommentData";

const HomeCommentSection = () => {
  return (
    <div>
      {HomCommentsData.map((comment) => (
        <CommentHomeCard
          key={comment.id}
          avatar={comment.avatar}
          pseudo={comment.pseudo}
          subheader={`${comment.date} - ${comment.heure}`}
          extraText={comment.reponse}
        />
      ))}
    </div>
  );
};

export default HomeCommentSection;
