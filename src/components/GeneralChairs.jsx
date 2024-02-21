import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import director from "../assets/images/committee/director.jpg";
import mkbgu from "../assets/images/committee/mk_bhuyan.JPG";
import nvgga from "../assets/images/committee/nithin.jpg";
import jrjd from "../assets/images/committee/Jesper Rindom Jensen.jpg";
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
            alt="Dr. M. K. Bhuyan"
            height="300"
            image={mkbgu}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div" center>
              Dr. M. K. Bhuyan
            </Typography>
            <Typography variant="body2" color="text.secondary">
              IIT Guwahati, India
            </Typography>
          </CardContent>
          <CardActions>
            <Button
              size="small"
              onClick={() => {
                window.open("https://www.iitg.ac.in/mkb/");
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
            alt="Dr. Nithin V George"
            height="300"
            image={nvgga}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div" center>
              Dr. Nithin V George
            </Typography>
            <Typography variant="body2" color="text.secondary">
              IIT Gandhinagar, India
            </Typography>
          </CardContent>
          <CardActions>
            <Button
              size="small"
              onClick={() => {
                window.open("https://iitgn.ac.in/faculty/ee/fac-nithin");
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
            alt="Dr. Jesper Rindom Jensen"
            height="300"
            image={jrjd}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div" center>
              Dr. Jesper Rindom Jensen
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Aalborg University, Denmark
            </Typography>
          </CardContent>
          <CardActions>
            <Button
              size="small"
              onClick={() => {
                window.open("https://jesperrj.blog.aau.dk/");
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
