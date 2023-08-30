import React from "react";
import ReleaseDateCard from "./ReleaseDateCard"; // Assurez-vous de mettre le bon chemin d'importation vers votre composant de liste
import {
  StyledCalendarWrapper,
  StyledTitleCalendar
} from "../Styles/ReleaseDateStyled";

const ReleaseDate = () => {
  return (
    <>
      <StyledTitleCalendar textAlign="left">
        Les prochaines sorties en dates
      </StyledTitleCalendar>
      <StyledCalendarWrapper>
        {/* Affichez votre composant de liste */}
        <ReleaseDateCard />
      </StyledCalendarWrapper>
    </>
  );
};

export default ReleaseDate;
