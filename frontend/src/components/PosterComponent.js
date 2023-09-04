import React from "react";
import { Card, CardContent, CardMedia, Typography, Grid } from "@mui/material";

const PosterComponent = ({ posters }) => {
  return (
    <Grid container spacing={2}>
      {posters.map((poster, index) => (
        <Grid item xs={12} sm={6} md={4} key={index}>
          <Card>
            <CardMedia
              component="img"
              alt={`Poster ${index + 1}`}
              height="300"
              image={`https://image.tmdb.org/t/p/original${poster.file_path}`}
            />
            <CardContent>
              <Typography variant="subtitle1">
                Poster {index + 1}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default PosterComponent;
