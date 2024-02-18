import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const CardBox = (props) => {
  return (
    <div>
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        <Card
          sx={{
            borderRadius: "10px",
            boxShadow: "4px 4px #888888",
            minHeight: 520,
            maxHeight: 520,
            minWidth: 330,
            maxWidth: 330,
            margin: "25px",
            padding: "25px",
          }}
        >
          <CardMedia
            component="img"
            alt={props.name}
            height="300"
            image={props.img}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div" center>
              {props.name}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {props.designation}
            </Typography>
          </CardContent>
          <CardActions>
            <Button
              size="small"
              onClick={() => {
                window.open(props.link);
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

export default CardBox;
