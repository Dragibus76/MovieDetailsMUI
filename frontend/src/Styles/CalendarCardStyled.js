import styled from "styled-components";

export const StyledCardWrapper = styled.div`
  margin-top: 2rem;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  border-radius: 8px;
  max-height: 400px; 
  overflow-y: auto; 
  margin-bottom: 2rem; 
  ::-webkit-scrollbar {
    display: none;
  }
`;

export const StyledTitle = styled.div`
  text-align: left;
  padding: 1rem;
`;

export const StyledTitleCalendar = styled.div`
  text-align: left;
  padding-top: 3rem;
`;

export const StyledList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

export const StyledListItem = styled.li`
  display: flex;
  align-items: center;
  padding: 1rem;
  border-bottom: 1px solid #e0e0e0;

  &:last-child {
    border-bottom: none;
  }
`;

export const StyledImage = styled.img`
  width: 60px;
  height: 80px;
  object-fit: cover;
  margin-right: 1rem;
  border-radius:3px;
`;

export const StyledContent = styled.div`
  flex: 1;
text-align:left;
  h3 {
    margin:0;
    font-size: 1rem;
  }

  p {
    margin: 0;
    font-size: 0.9rem;
    color: #777;
  }
`;
