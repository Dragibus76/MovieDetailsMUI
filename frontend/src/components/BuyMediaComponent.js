import React from "react";
import { Grid, Typography } from "@mui/material";
import {ScrollableDiv, StyledProvider } from '../Styles/BuyMediaComponentStyled'

const BuyMediaComponent = ({ watchProviders }) => {
  if (!watchProviders) {
    return <div>Aucune option disponible</div>;
  }

  const renderProviders = (providers) => {
    return providers.map((provider) => (
      <Grid item xs={6} key={provider.provider_id}>
        <StyledProvider>
          <img src={`https://image.tmdb.org/t/p/original${provider.logo_path}`} alt={provider.provider_name} />
          <Typography variant="subtitle2">{provider.provider_name}</Typography>
        </StyledProvider>
      </Grid>
    ));
  };

  return (
    <div>
      <ScrollableDiv>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Typography variant="h6">Location</Typography>
        </Grid>
        {watchProviders.rent && watchProviders.rent.length > 0 ? (
          renderProviders(watchProviders.rent)
        ) : (
          <Grid item xs={12}>
            <Typography variant="body2">Aucune option disponible</Typography>
          </Grid>
        )}
        <Grid item xs={12}>
          <Typography variant="h6">Achat</Typography>
        </Grid>
        {watchProviders.buy && watchProviders.buy.length > 0 ? (
          renderProviders(watchProviders.buy)
        ) : (
          <Grid item xs={12}>
            <Typography variant="body2">Aucune option disponible</Typography>
          </Grid>
        )}
        <Grid item xs={12}>
          <Typography variant="h6">Inclus avec abonnement</Typography>
        </Grid>
        {watchProviders.flatrate && watchProviders.flatrate.length > 0 ? (
          renderProviders(watchProviders.flatrate)
        ) : (
          <Grid item xs={12}>
            <Typography variant="body2">Aucune option disponible</Typography>
          </Grid>
        )}
      </Grid>
      </ScrollableDiv>
    </div>
  );
};

export default BuyMediaComponent;
