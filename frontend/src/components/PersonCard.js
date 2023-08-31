import React, { useEffect, useState } from "react";
import {
  ScrollablePersonBox,
  StyledPersonCard,
  StyledPersonCardMedia,
  StyledPersonName,
  StyledCharacterName
} from "../Styles/PersonCardStyled";
import { fetchMediaCast } from "../utils/tmdbApi";

const PersonCard = ({ movieId, mediaType }) => {
  const [cast, setCast] = useState([]);

  useEffect(() => {
    fetchMediaCast(movieId, mediaType)
      .then((castData) => {
        setCast(castData);
      })
      .catch((error) => {
        console.error("Error fetching cast details:", error);
      });
  }, [movieId, mediaType]);

  return (
    <ScrollablePersonBox>
      {cast.map((actor) => (
        <StyledPersonCard key={actor.id}>
          <StyledPersonCardMedia
            image={
              actor.profile_path
                ? `https://image.tmdb.org/t/p/w200${actor.profile_path}`
                : "https://unitedhealthcentres.com/wp-content/uploads/2021/11/default-avatar-photo-placeholder-profile-picture-vector-21806614.jpeg"
            }
          />
          <StyledPersonName>{actor.name}</StyledPersonName>
          <StyledCharacterName>{actor.character}</StyledCharacterName>
        </StyledPersonCard>
      ))}
    </ScrollablePersonBox>
  );
};

export default PersonCard;
