import React from "react";
import { StyledProductionDetails, ProductionCompanyCard, LogoWrapper, LogoImage } from "../Styles/ProductionCompanyComponentStyled";

const ProductionCompanyComponent = ({ productionCompanies }) => {
  const defaultLogoUrl = "https://cibe.fr/wp-content/uploads/2017/01/logo-google.png"; 

  return (
    <StyledProductionDetails>
      {productionCompanies.map((company) => (
        <ProductionCompanyCard key={company.id}>
          <LogoWrapper>
            {company.logo_path ? (
              <LogoImage src={`https://image.tmdb.org/t/p/w200/${company.logo_path}`} alt={company.name} />
            ) : (
              <LogoImage src={defaultLogoUrl} alt="Default Logo" />
            )}
          </LogoWrapper>
          <p>{company.name}</p>
        </ProductionCompanyCard>
      ))}
    </StyledProductionDetails>
  );
};

export default ProductionCompanyComponent;
