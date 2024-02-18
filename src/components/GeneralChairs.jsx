import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import director from "../assets/images/committee/director.jpg";
import secChair from "../assets/images/committee/geetam.png";
import mp from "../assets/images/committee/manishapattanaik.jpg";

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
            maxWidth: 300,
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
            maxWidth: 300,
            margin: "25px",
            padding: "25px",
          }}
        >
          <CardMedia
            component="img"
            alt="Prof. Geetam Tomar"
            height="300"
            image={secChair}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div" center>
              Prof. Geetam Tomar
            </Typography>
            <Typography variant="body2" color="text.secondary">
              MP Section Chair
            </Typography>
          </CardContent>
          <CardActions>
            <Button
              size="small"
              onClick={() => {
                window.open(
                  "http://recsonbhadra.ac.in/college/directorprofile"
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
            maxWidth: 300,
            margin: "25px",
            padding: "25px",
          }}
        >
          <CardMedia
            component="img"
            alt="Prof. Manisha Pattnaik"
            height="300"
            image={mp}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div" center>
              Prof. Manisha Pattnaik
            </Typography>
            <Typography variant="body2" color="text.secondary">
              ABV-IIITM, India
            </Typography>
          </CardContent>
          <CardActions>
            <Button
              size="small"
              onClick={() => {
                window.open(
                  "https://www.iiitm.ac.in/index.php/en/component/splms/teacher/Dr.ManishaPattanaik"
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

export default GeneralChairs;
