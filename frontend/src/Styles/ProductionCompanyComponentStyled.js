import styled from "styled-components";

export const StyledProductionDetails = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  align-items: flex-start;
  justify-content:center;
  padding-top: 1rem;
  @media (min-width: 769px) {
       justify-content:start;
    }
`;

export const ProductionCompanyCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  max-width: 150px;
`;

export const LogoWrapper = styled.div`
  height: 50px; 
  display: flex;
  justify-content: center;
  align-items: flex-start;
`;

export const LogoImage = styled.img`
  max-width: 100%;
  max-height: 100%;
`;
