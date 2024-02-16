import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import director from "../assets/images/committee/director.jpg";

const AdvisoryCommittee = () => {
  return (
    <div>
      <div style={{ margin: "5px", padding: "10px" }}>
        <h1 style={{ padding: "10px" }}>Advisory Committee</h1>
      </div>
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        <Card
          sx={{
            maxWidth: 345,
            margin: "15px",
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
        <Card sx={{ maxWidth: 345, margin: "15px", padding: "25px" }}>
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
        <Card sx={{ maxWidth: 345, margin: "15px", padding: "25px" }}>
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
        <Card sx={{ maxWidth: 345, margin: "15px", padding: "25px" }}>
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
        <Card sx={{ maxWidth: 345, margin: "15px", padding: "25px" }}>
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
      </div>
    </div>
  );
};

export default AdvisoryCommittee;
