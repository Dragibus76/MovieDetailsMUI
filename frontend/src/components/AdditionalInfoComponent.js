import React, { useEffect, useState } from "react";
import { fetchRegions } from "../utils/tmdbApi"; 
import { TypographyWeightSection, TypographyNormalSection, AdditionalInfoContainer } from "../Styles/AdditionalInfoComponentStyled";

const AdditionalInfoComponent = ({ mediaDetails }) => {
  const [regions, setRegions] = useState([]);

  useEffect(() => {
    fetchRegions()
      .then((data) => setRegions(data))
      .catch((error) => console.error("Error fetching regions:", error));
  }, []);

  const getRegionName = (iso) => {
    const region = regions.find((region) => region.iso_3166_1 === iso);
    return region ? region.native_name : null;
  };

  const infoPairs = [
    { label: "Budget :", value: `${mediaDetails.budget}$` },
    { label: "Revenue :", value: `${mediaDetails.revenue}$` },
    { label: "Nombre d'avis :", value: "A FAIRE PLUS TARD" },
    { label: "Titre Original :", value: mediaDetails.original_title },
    { 
      label: "Pays de production :", 
      value: mediaDetails.production_countries
        .map((country) => getRegionName(country.iso_3166_1) || country.name)
        .join(", ")
    }
  ];

  return (
    <AdditionalInfoContainer>
      {infoPairs.map((pair, index) => (
        <div key={index}>
          <TypographyWeightSection variant="h7">{pair.label}</TypographyWeightSection>
          <TypographyNormalSection>{pair.value}</TypographyNormalSection>
        </div>
      ))}
    </AdditionalInfoContainer>
  );
};

export default AdditionalInfoComponent;
