import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import iaa from "../assets/images/committee/IAA.png";
import vp from "../assets/images/committee/vp.jpg";

const OrganizingCommittee = () => {
  return (
    <div>
      <div style={{ margin: "5px", padding: "20px" }}>
        <h1 style={{ padding: "10px" }}>Organizing Committee</h1>
      </div>
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        <Card sx={{ maxWidth: 345, margin: "15px", padding: "25px" }}>
          <CardMedia
            component="img"
            alt="Dr. Vinal Patel"
            height="300"
            image={vp}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div" center>
              Dr. Vinal Patel
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Associate Professor, ABV-IIITM Gwalior, India
            </Typography>
          </CardContent>
          <CardActions>
            <Button
              size="small"
              onClick={() => {
                window.open(
                  "https://www.iiitm.ac.in/index.php/en/component/splms/teacher/Dr.VinalPatel"
                );
              }}
            >
              Read More
            </Button>
          </CardActions>
        </Card>
        <Card sx={{ maxWidth: 345, margin: "15px", padding: "25px" }}>
          <CardMedia
            component="img"
            alt="Dr. Irshad Ahmad Ansari"
            height="300"
            image={iaa}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div" center>
              Dr. Irshad Ahmad Ansari
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Assistant Professor, ABV-IIITM Gwalior, India
            </Typography>
          </CardContent>
          <CardActions>
            <Button
              size="small"
              onClick={() => {
                window.open(
                  "https://www.iiitm.ac.in/index.php/en/component/splms/teacher/Dr.IrshadAhmad"
                );
              }}
            >
              Read More
            </Button>
          </CardActions>
        </Card>
        <Card sx={{ maxWidth: 345, margin: "15px", padding: "25px" }}>
          <CardMedia
            component="img"
            alt="Dr. Vinal Patel"
            height="300"
            image={vp}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div" center>
              Dr. Vinal Patel
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Associate Professor, ABV-IIITM Gwalior, India
            </Typography>
          </CardContent>
          <CardActions>
            <Button
              size="small"
              onClick={() => {
                window.open(
                  "https://www.iiitm.ac.in/index.php/en/component/splms/teacher/Dr.VinalPatel"
                );
              }}
            >
              Read More
            </Button>
          </CardActions>
        </Card>
        <Card sx={{ maxWidth: 345, margin: "15px", padding: "25px" }}>
          <CardMedia
            component="img"
            alt="Dr. Irshad Ahmad Ansari"
            height="300"
            image={iaa}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div" center>
              Dr. Irshad Ahmad Ansari
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Assistant Professor, ABV-IIITM Gwalior, India
            </Typography>
          </CardContent>
          <CardActions>
            <Button
              size="small"
              onClick={() => {
                window.open(
                  "https://www.iiitm.ac.in/index.php/en/component/splms/teacher/Dr.IrshadAhmad"
                );
              }}
            >
              Read More
            </Button>
          </CardActions>
        </Card>
        <Card sx={{ maxWidth: 345, margin: "15px", padding: "25px" }}>
          <CardMedia
            component="img"
            alt="Dr. Vinal Patel"
            height="300"
            image={vp}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div" center>
              Dr. Vinal Patel
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Associate Professor, ABV-IIITM Gwalior, India
            </Typography>
          </CardContent>
          <CardActions>
            <Button
              size="small"
              onClick={() => {
                window.open(
                  "https://www.iiitm.ac.in/index.php/en/component/splms/teacher/Dr.VinalPatel"
                );
              }}
            >
              Read More
            </Button>
          </CardActions>
        </Card>
        <Card sx={{ maxWidth: 345, margin: "15px", padding: "25px" }}>
          <CardMedia
            component="img"
            alt="Dr. Irshad Ahmad Ansari"
            height="300"
            image={iaa}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div" center>
              Dr. Irshad Ahmad Ansari
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Assistant Professor, ABV-IIITM Gwalior, India
            </Typography>
          </CardContent>
          <CardActions>
            <Button
              size="small"
              onClick={() => {
                window.open(
                  "https://www.iiitm.ac.in/index.php/en/component/splms/teacher/Dr.IrshadAhmad"
                );
              }}
            >
              Read More
            </Button>
          </CardActions>
        </Card>
      </div>
    </div>
  );
};

export default OrganizingCommittee;
