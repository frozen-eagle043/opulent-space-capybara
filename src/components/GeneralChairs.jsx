import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import director from "../assets/images/committee/director.jpg";
import mgc from "../assets/images/committee/mads_chris.jpg";
import rkm from "../assets/images/committee/ranjan_malik.JPG";
import userPic from "../assets/images/committee/user.jpg";
const GeneralChairs = () => {
  return (
    <div>
      <div style={{ marginTop: "5px", padding: "10px" }}>
        <h1 style={{ padding: "10px" }}>Patron & General Chairs</h1>
      </div>
      <div
        style={{
          margin: "60px",
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >
        <Card
          sx={{
            borderRadius: "10px",
            boxShadow: "4px 4px #888888",
            maxWidth: 345,
            margin: "25px",
            padding: "25px",
          }}
        >
          <CardMedia
            component="img"
            alt="Prof. S. N. Singh"
            height="300"
            image={director}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div" center>
              Prof. S. N. Singh
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Director, ABV-IIITM Gwalior, India
            </Typography>
          </CardContent>
          <CardActions>
            <Button
              size="small"
              onClick={() => {
                window.open(
                  "https://www.iiitm.ac.in/index.php/en/component/splms/teacher/prof-sri-niwas"
                );
              }}
            >
              Read More
            </Button>
          </CardActions>
        </Card>
        <Card
          sx={{
            borderRadius: "10px",
            boxShadow: "4px 4px #888888",
            maxWidth: 345,
            margin: "25px",
            padding: "25px",
          }}
        >
          <CardMedia
            component="img"
            alt="Prof. Mads Græsbøll Christensen"
            height="300"
            image={mgc}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div" center>
              Prof. Mads Græsbøll Christensen
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Aalborg University, Denmark
            </Typography>
          </CardContent>
          <CardActions>
            <Button
              size="small"
              onClick={() => {
                window.open("https://vbn.aau.dk/en/persons/109164");
              }}
            >
              Read More
            </Button>
          </CardActions>
        </Card>
        <Card
          sx={{
            borderRadius: "10px",
            boxShadow: "4px 4px #888888",
            maxWidth: 345,
            margin: "25px",
            padding: "25px",
          }}
        >
          <CardMedia
            component="img"
            alt="Prof. XYZ"
            height="300"
            image={userPic}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div" center>
              Prof. XYZ
            </Typography>
            <Typography variant="body2" color="text.secondary">
              India
            </Typography>
          </CardContent>
          <CardActions>
            <Button
              size="small"
              onClick={() => {
                window.open("");
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

export default GeneralChairs;
