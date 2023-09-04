import React, { useState } from "react";
import { Grid, useMediaQuery } from "@mui/material";
import { StyledGridContainer, StyledCardMedia, StyledModal, StyledModalContent, StyledCloseIconButton, StyledCloseIcon } from '../Styles/PosterComponentStyled';

const PosterComponent = ({ posters }) => {
  const [openModal, setOpenModal] = useState(false);
  const [selectedImage, setSelectedImage] = useState("");
  const isMobile = useMediaQuery("(max-width: 600px)");

  const handleOpenModal = (image) => {
    setSelectedImage(image);
    setOpenModal(true);
  };
  const handleCloseModal = () => {
    setOpenModal(false);
  };
  const imageWidth = isMobile ? "45vh" : "auto";
  const imageHeight = isMobile ? "65vh" : "90vh";

  return (
    <StyledGridContainer>
      <Grid container spacing={2}>
        {posters.map((poster, index) => (
          <Grid item xs={6} md={2} sm={3} key={index}>
            <StyledCardMedia
              component="img"
              alt={`Poster ${index + 1}`}
              image={`https://image.tmdb.org/t/p/original${poster.file_path}`}
              onClick={() =>
                handleOpenModal(
                  `https://image.tmdb.org/t/p/original${poster.file_path}`
                )
              }
            />
          </Grid>
        ))}
      </Grid>
      <StyledModal
        open={openModal}
        onClose={handleCloseModal}
        aria-labelledby="image-modal"
        aria-describedby="image-modal-description"
      >
        <StyledModalContent>
          <StyledCloseIconButton
            onClick={handleCloseModal}
            aria-label="close"
          >
            <StyledCloseIcon />
          </StyledCloseIconButton>
          <img
            src={selectedImage}
            alt="Full Screen"
            style={{ width: imageWidth, height: imageHeight }}
          />
        </StyledModalContent>
      </StyledModal>
    </StyledGridContainer>
  );
};

export default PosterComponent;
