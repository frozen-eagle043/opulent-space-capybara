import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import CardBox from "./CardBox";
import userPic from "../assets/images/committee/user.jpg";
import director from "../assets/images/committee/director.jpg";
import secChair from "../assets/images/committee/geetam.png";
import mp from "../assets/images/committee/manishapattanaik.jpg";
import iaa from "../assets/images/committee/IAA.png";
import vp from "../assets/images/committee/vp.jpg";
import bp from "../assets/images/committee/Binod_photo.jpg";
import gs from "../assets/images/committee/Gaurav_Image.jpg";
import ga from "../assets/images/committee/gauravagrawal.jpg";
import pb from "../assets/images/committee/punit-photo-231x300.jpg";
import sp from "../assets/images/committee/spradhan.jpg";
import dkv from "../assets/images/committee/deepesh.jpg";
import arj from "../assets/images/committee/arj.jpg";
import ms from "../assets/images/committee/murli.jpg";
import ak from "../assets/images/committee/asutosh.jpg";
import ps from "../assets/images/committee/PragyaSwami.jpeg";
import vb from "../assets/images/committee/varun bajaj.png";
import akb from "../assets/images/committee/Dr Atul Kumar.gif";
import ysk from "../assets/images/committee/1487051401.jpg";
import ashwin from "../assets/images/committee/Kothari-Sir-1-230x300.jpg";
import jsn from "../assets/images/committee/jsenguptaSir-234x300.jpg";
import arvind from "../assets/images/committee/arvind_kumar.jpg";
import mm from "../assets/images/committee/manish.mandloi_photo.jpg";
import kkg from "../assets/images/committee/kamal.garg_photo.jpg";
import rk from "../assets/images/committee/ravi.kant_photo.jpg";
import at from "../assets/images/committee/atrivedi.jpg";
import kkp from "../assets/images/committee/KKPattanaik (2).jpg";
import ds from "../assets/images/committee/debanjan.JPG";
import dd from "../assets/images/committee/deepak_dewangan.png";
import mb from "../assets/images/committee/mahuabhatt.jpg";
import bj from "../assets/images/committee/Biswabandhu Jana.jpg";
import nsp from "../assets/images/committee/nsp.jpg";
import jeeva from "../assets/images/committee/jeevaraj.jpg";
import msg from "../assets/images/committee/Mahendra K. Shukla.jpg";
import bm from "../assets/images/committee/dr_bilal.jpg";
import mgc from "../assets/images/committee/mads_chris.jpg";
import rkm from "../assets/images/committee/ranjan_malik.JPG";
import vtg from "../assets/images/committee/vivek_tiwari jpeg.jpg";
import opv from "../assets/images/committee/om_prakash.jpg";
import jt from "../assets/images/committee/joset.jpg";
import dps from "../assets/images/committee/Dr. Dip Prakash Samajdar.jpg";
const Committee = () => {
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
          name="Prof. Mads Græsbøll Christensen"
          designation="Aalborg University, Denmark"
          img={mgc}
          link="https://vbn.aau.dk/en/persons/109164"
        />
        <CardBox name="Prof. XYZ" designation="India" img={userPic} link="" />
      </div>
      <div style={{ margin: "5px", padding: "10px" }}>
        <h1 style={{ padding: "10px" }}>Advisory Committee </h1>
      </div>
      <div
        style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}
      >
        <CardBox
          name="Prof. Geetam Tomar"
          designation="MP Section Chair"
          img={secChair}
          link="http://recsonbhadra.ac.in/college/directorprofile"
        />
        <CardBox
          name="Prof. Manisha Pattnaik"
          designation="ABV-IIITM, India"
          img={mp}
          link="https://www.iiitm.ac.in/index.php/en/component/splms/teacher/Dr.ManishaPattanaik"
        />
        <CardBox
          name="Dr. Vivek Tiwari"
          designation="ABV-IIITM, India"
          img={vtg}
          link="https://www.iiitm.ac.in/index.php/en/component/splms/teacher/Dr.Vivek"
        />
      </div>

      <div style={{ margin: "5px", padding: "10px" }}>
        <h1 style={{ padding: "10px" }}>Technical Program Committee </h1>
      </div>

      <div
        style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}
      >
        <CardBox
          name="Dr. Binod Prasad"
          designation="ABV-IIITM, India"
          img={bp}
          link="https://www.iiitm.ac.in/index.php/en/component/splms/teacher/Dr.BinodKumar"
        />
        <CardBox
          name="Dr. Punit Kumar Bhavsar"
          designation="NIT Nagpur, India"
          img={pb}
          link=""
        />
        <CardBox
          name="Dr. Somanath Pradhan"
          designation="IIT Patna, India"
          img={sp}
          link="https://www.iitp.ac.in/index.php/people-2/ee-faculty/2-uncategorised/1435-dr-somanath-pradhan"
        />
        <CardBox
          name="Dr. Deepesh Kumar Verma"
          designation="IIT (BHU) Varanasi, India"
          img={dkv}
          link="https://www.iitbhu.ac.in/dept/bme/people/deepeshbme"
        />
        <CardBox
          name="Dr. A. R. Jac Fredo"
          designation="IIT (BHU) Varanasi, India
          "
          img={arj}
          link="https://www.iitbhu.ac.in/dept/bme/people/jackbme"
        />
        <CardBox
          name="Dr. Pragya Swami"
          designation=" ABV-IIITM, India"
          img={ps}
          link="https://www.iiitm.ac.in/index.php/en/component/splms/teacher/Dr.Pragya"
        />
        <CardBox
          name="Dr. Varun Bajaj"
          designation="NIT Bhopal, India"
          img={vb}
          link="https://www.manit.ac.in/content/dr-varun-bajaj"
        />
        <CardBox
          name="Dr. Atul Kumar"
          designation="NIT Bhopal, India"
          img={akb}
          link="https://www.manit.ac.in/content/dr-atul-kumar"
        />{" "}
        <CardBox
          name="Dr. Yashpal Singh Katariya"
          designation="PDPM IIITDMJ"
          img={ysk}
          link="http://faculty.iiitdmj.ac.in/faculty/yashpalk"
        />{" "}
        <CardBox
          name="Dr. Bilal Mirza
          "
          designation="UTSW, USA"
          img={bm}
          link="https://www.researchgate.net/profile/Bilal-Mirza-4"
        />
        <CardBox
          name="Dr. Arvind Kumar"
          designation="VNIT Nagpur, India"
          img={arvind}
          link="https://ece.vnit.ac.in/people/arvindkumar/"
        />
        <CardBox
          name="Dr. Joydeep  Sengupta"
          designation="VNIT Nagpur, India"
          img={jsn}
          link="https://ece.vnit.ac.in/people/jsengupta/"
        />
        <CardBox
          name="Dr. Ashwin Kothari"
          designation="VNIT Nagpur, India"
          img={ashwin}
          link="https://ece.vnit.ac.in/people/ashwinkothari/"
        />
        <CardBox
          name="Dr. Manish Mandoli"
          designation="PDEU Gandhinagar, India"
          img={mm}
          link="https://orsp.pdpu.ac.in/adminfacviewprofile.aspx?facid=manish.mandloi"
        />
        <CardBox
          name="Dr. Kamal K Garg"
          designation="PDEU Gandhinagar, India"
          img={kkg}
          link="https://orsp.pdpu.ac.in/adminfacviewprofile.aspx?facid=kamal.garg"
        />
        <CardBox
          name="Dr. Om Prakash Verma"
          designation="NIT Jalandhar, India"
          img={opv}
          link="https://departments.nitj.ac.in/dept/ice/Faculty/6430446638bff038a7807a2f"
        />
        <CardBox
          name="Dr. Jose Thankachan"
          designation="NIT Tiruchirappalli, India"
          img={jt}
          link="https://www.nitt.edu/home/academics/departments/eee/people/faculty/joset/"
        />
        <CardBox
          name="Dr. Deep Prakash Samajhdar"
          designation="PDPM IIITDMJ, India"
          img={dps}
          link="http://faculty.iiitdmj.ac.in/faculty/dip.samajdar"
        />
      </div>
      <div style={{ margin: "5px", padding: "10px" }}>
        <h1 style={{ padding: "10px" }}>Publication Chairs </h1>
      </div>
      <div
        style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}
      >
        <CardBox
          name="Dr. Deepak Dewangan"
          designation="ABV-IIITM, India"
          img={dd}
          link="https://www.iiitm.ac.in/index.php/en/component/splms/teacher/Dr.DeepakKumar"
        />

        <CardBox
          name="Dr. Debanjan Sadhya"
          designation="ABV-IIITM, India"
          img={ds}
          link="https://www.iiitm.ac.in/index.php/en/component/splms/teacher/Dr.Devanjan"
        />
        <CardBox
          name="Dr. Punit Kumar Bhavsar"
          designation="NIT Nagpur, India"
          img={pb}
          link=""
        />
      </div>

      <div style={{ margin: "5px", padding: "10px" }}>
        <h1 style={{ padding: "10px" }}>Web Chairs </h1>
      </div>
      <div
        style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}
      >
        <CardBox
          name="Dr. Debanjan Sadhya"
          designation="ABV-IIITM, India"
          img={ds}
          link="https://www.iiitm.ac.in/index.php/en/component/splms/teacher/Dr.Devanjan"
        />

        <CardBox
          name="Dr. Biswabandhu Jana"
          designation="ABV-IIITM, India"
          img={bj}
          link="https://www.iiitm.ac.in/index.php/en/component/splms/teacher/Dr.Biswabandhu"
        />
      </div>

      <div style={{ margin: "5px", padding: "10px" }}>
        <h1 style={{ padding: "10px" }}>Publicity Chairs </h1>
      </div>
      <div
        style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}
      >
        <CardBox
          name="Dr. Somanath Pradhan"
          designation="IIT Patna, India"
          img={sp}
          link="https://www.iitp.ac.in/index.php/people-2/ee-faculty/2-uncategorised/1435-dr-somanath-pradhan"
        />

        <CardBox
          name="Dr. Jeevaraj"
          designation="ABV-IIITM, India"
          img={jeeva}
          link="https://www.iiitm.ac.in/index.php/en/component/splms/teacher/Dr.JeevarajS"
        />

        <CardBox
          name="Dr. Mahendra Shukla"
          designation="ABV-IIITM, India"
          img={msg}
          link="https://www.iiitm.ac.in/index.php/en/component/splms/teacher/Dr.Mahendra"
        />
        <CardBox
          name="Dr. Ravi Kant"
          designation="PDEU Gandhinagar, India"
          img={rk}
          link="https://orsp.pdpu.ac.in/adminfacviewprofile.aspx?facid=ravi.kant"
        />
      </div>

      <div style={{ margin: "5px", padding: "10px" }}>
        <h1 style={{ padding: "10px" }}>Special Session Chairs </h1>
      </div>

      <div
        style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}
      >
        <CardBox
          name="Dr. Vinal Patel"
          designation="ABV-IIITM, India"
          img={vp}
          link="https://www.iiitm.ac.in/index.php/en/component/splms/teacher/Dr.VinalPatel"
        />
        <CardBox
          name="Dr. Punit Kumar Bhavsar"
          designation="NIT Nagpur, India"
          img={pb}
          link=""
        />
      </div>
      <div style={{ margin: "5px", padding: "10px" }}>
        <h1 style={{ padding: "10px" }}>Technical Program Chair</h1>
      </div>

      <div
        style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}
      >
        <CardBox
          name="Dr. Binod Prasad"
          designation="ABV-IIITM, India"
          img={bp}
          link="https://www.iiitm.ac.in/index.php/en/component/splms/teacher/Dr.BinodKumar"
        />
      </div>

      <div style={{ margin: "5px", padding: "10px" }}>
        <h1 style={{ padding: "10px" }}>Finance Chair </h1>
      </div>

      <div
        style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}
      >
        <CardBox
          name=" Dr. Gaurav Sharma"
          designation="ABV-IIITM, India"
          img={gs}
          link="https://www.iiitm.ac.in/index.php/en/component/splms/teacher/Dr.Gaurav"
        />
      </div>

      <div style={{ margin: "5px", padding: "10px" }}>
        <h1 style={{ padding: "10px" }}>Finance Co-chair </h1>
      </div>

      <div
        style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}
      >
        <CardBox
          name="Dr. Gaurav Agarwal"
          designation="Professor, ABV-IIITM, India"
          img={ga}
          link="https://www.iiitm.ac.in/index.php/en/component/splms/teacher/Dr.GauravAgrawal"
        />
      </div>
      <div style={{ margin: "5px", padding: "10px" }}>
        <h1 style={{ padding: "10px" }}>Conference/Organizing Secretary </h1>
      </div>

      <div
        style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}
      >
        <CardBox
          name="Dr. Vinal Patel"
          designation="ABV-IIITM, India"
          img={vp}
          link="https://www.iiitm.ac.in/index.php/en/component/splms/teacher/Dr.VinalPatel"
        />
      </div>
      <div style={{ margin: "5px", padding: "10px" }}>
        <h1 style={{ padding: "10px" }}>Conference Chair </h1>
      </div>

      <div
        style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}
      >
        <CardBox
          name=" Dr. Irshad Ahmad Ansari"
          designation="ABV-IIITM, India"
          img={iaa}
          link="https://www.iiitm.ac.in/index.php/en/component/splms/teacher/Dr.IrshadAhmad"
        />
      </div>
    </div>
  );
};

export default Committee;
