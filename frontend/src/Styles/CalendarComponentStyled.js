import styled from "styled-components";
import Calendar from "react-calendar";
import { Divider } from "@mui/material";
import "react-calendar/dist/Calendar.css";

export const StyledCalendarWrapper = styled.div`
  
  margin-top:2rem;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  border-radius: 8px;
`;

export const StyledCalendar = styled(Calendar)`
  max-width: 100%;

  .today-marker {
    background-color: blue;
    border-radius: 50%!important;
    padding: 5px;

    .today-content {
      color: white;
    }
  }

  .upcoming-marker {
    color: gray;
  }
`;

export const StyledTitleCalendar = styled(Divider)`
  padding-top:3rem;
`;
