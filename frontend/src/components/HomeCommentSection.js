import React from "react";
import CommentHomeCard from "./HomeCardComment";
import { HomCommentsData } from "../mocks/HomeCommentData";
import { StyledHomeCommentSection, StyledHomeCommentTitle } from '../Styles/HomeCommentSectionStyled';

const HomeCommentSection = () => {
  return (
    <>
    <StyledHomeCommentTitle variant="h6" >Ils viennent de donner leurs avis !</StyledHomeCommentTitle>
    <StyledHomeCommentSection>
      {HomCommentsData.map((comment) => (
        <CommentHomeCard
          key={comment.id}
          avatar={comment.avatar}
          pseudo={comment.pseudo}
          subheader={`${comment.date} - ${comment.heure}`}
          extraText={comment.reponse}
        />
      ))}
    </StyledHomeCommentSection>
    </>
  );
};

export default HomeCommentSection;
