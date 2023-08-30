import React from "react";
import { StyledProductionDetails, ProductionCompanyCard, LogoWrapper, LogoImage } from "../Styles/ProductionCompanyComponentStyled";

const ProductionCompanyComponent = ({ productionCompanies }) => {
  return (
    <StyledProductionDetails>
      {productionCompanies.map((company) => (
        <ProductionCompanyCard key={company.id}>
          <LogoWrapper>
            <LogoImage src={`https://image.tmdb.org/t/p/w200/${company.logo_path}`} alt={company.name} />
          </LogoWrapper>
          <p>{company.name}</p>
        </ProductionCompanyCard>
      ))}
    </StyledProductionDetails>
  );
};

export default ProductionCompanyComponent;
