import React from "react";
import { Paper, Typography, Button, Grid } from "@mui/material";

const Banner = () => {
  const handleUploadPaper = () => {
    // Add your logic for handling paper uploads here
    console.log("Upload Paper clicked");
  };

  return (
    <Paper
      elevation={3}
      style={{ padding: "5px", textAlign: "center", marginTop: "5px" }}
    >
      <Grid container spacing={1} justify="center" alignItems="center">
        <Grid item xs={12} sm={4}>
          <Typography variant="body1">Email: example@email.com</Typography>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Typography variant="body1">Mobile Number: +1234567890</Typography>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Button
            variant="contained"
            color="primary"
            onClick={handleUploadPaper}
          >
            Upload Paper
          </Button>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default Banner;
