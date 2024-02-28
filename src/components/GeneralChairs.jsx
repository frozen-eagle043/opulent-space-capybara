import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import CardBox from "./CardBox";
import director from "../assets/images/committee/director.jpg";
import mkbgu from "../assets/images/committee/mk_bhuyan.JPG";
import nvgga from "../assets/images/committee/nithin.jpg";
import jrjd from "../assets/images/committee/Jesper Rindom Jensen.jpg";
import userPic from "../assets/images/committee/user.jpg";
import cwak from "../assets/images/committee/ChangWookAhn.jpg";
import mpr from "../assets/images/committee/millie_pant.jpg";

const GeneralChairs = () => {
  return (
    <div>
      <div style={{ margin: "5px", padding: "10px" }}>
        <h1 style={{ padding: "10px" }}>Patron & General Chairs </h1>
      </div>
      <div
        style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}
      >
        <CardBox
          name="Prof. S. N. Singh"
          designation="Director, ABV-IIITM, India"
          img={director}
          link="https://www.iiitm.ac.in/index.php/en/component/splms/teacher/prof-sri-niwas"
        />

        <CardBox
          name="Prof. Chang Wook Ahn"
          designation="GIST, South Korea"
          img={cwak}
          link="https://aieng.gist.ac.kr/prog/gsPerson/aieng/P/view.do;jsessionid=CC657C00E75779BB223A05F5D0548C7B"
        />

        <CardBox
          name="Dr. M. K. Bhuyan"
          designation="IIT Guwahati, India"
          img={mkbgu}
          link="https://www.iitg.ac.in/mkb/"
        />
        <CardBox
          name="Prof. Millie Pant"
          designation="IIT Roorkee, India"
          img={mpr}
          link="https://www.iitr.ac.in/~ASE/millifpt"
        />
      </div>
    </div>
  );
};

export default GeneralChairs;
