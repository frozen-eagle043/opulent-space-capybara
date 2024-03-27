import * as React from "react";
// import Card from "@mui/material/Card";
// import CardActions from "@mui/material/CardActions";
// import CardContent from "@mui/material/CardContent";
// import CardMedia from "@mui/material/CardMedia";
// import Button from "@mui/material/Button";
// import Typography from "@mui/material/Typography";
import CardBox from "./CardBox";
import userPic from "../assets/images/committee/user.jpg";
import director from "../assets/images/committee/director.jpg";
import iaa from "../assets/images/committee/IAA.png";
import vp from "../assets/images/committee/vp.jpg";
import bp from "../assets/images/committee/Binod_photo.jpg";
import gs from "../assets/images/committee/Gaurav_Image.jpg";
import ga from "../assets/images/committee/gauravagrawal.jpg";
import pb from "../assets/images/committee/punit-photo-231x300.jpg";
import sp from "../assets/images/committee/spradhan.jpg";

import ak from "../assets/images/committee/asutosh.jpg";
import rk from "../assets/images/committee/ravi.kant_photo.jpg";
import ds from "../assets/images/committee/debanjan.JPG";
import dd from "../assets/images/committee/deepak_dewangan.png";
import mpg from "../assets/images/committee/manishapattanaik.jpg";
import mb from "../assets/images/committee/mahuabhatt.jpg";
import bj from "../assets/images/committee/Biswabandhu Jana.jpg";
// import nsp from "../assets/images/committee/nsp.jpg";
import jeeva from "../assets/images/committee/jeevaraj.jpg";
import msg from "../assets/images/committee/Mahendra K. Shukla.jpg";
import bm from "../assets/images/committee/dr_bilal.jpg";
import mgc from "../assets/images/committee/mads_chris.jpg";
// import rkm from "../assets/images/committee/ranjan_malik.JPG";
import vtg from "../assets/images/committee/vivek_tiwari jpeg.jpg";
import opv from "../assets/images/committee/om_prakash.jpg";
import jt from "../assets/images/committee/joset.jpg";
import dps from "../assets/images/committee/Dr. Dip Prakash Samajdar.jpg";
import mfhw from "../assets/images/committee/mohammad_farukh.jpg";
import pkg from "../assets/images/committee/pinku_ranjan.jpg";
import vasw from "../assets/images/committee/vasundhra.jpg";
import mkbgu from "../assets/images/committee/mk_bhuyan.JPG";
import nvgga from "../assets/images/committee/nithin.jpg";
import jrjd from "../assets/images/committee/Jesper Rindom Jensen.jpg";
import asyg from "../assets/images/committee/amarendra.jpg";
import pmg from "../assets/images/committee/purnendu.jpg";
import kvag from "../assets/images/committee/kva.jpg";
import rsg from "../assets/images/committee/rajendra_sahu.jpg";
import cwak from "../assets/images/committee/ChangWookAhn.jpg";
import jcu from "../assets/images/committee/jordan_cheer.jpeg";
import akg from "../assets/images/committee/AvadhKishor.jpg";
import mcau from "../assets/images/committee/Michael_chesnaye.jpg";

const Committee = () => {
  return (
    <div>
      <div style={{ margin: "5px", padding: "10px" }}>
        <h1 style={{ padding: "10px" }}>Patron</h1>
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
      </div>
      <div style={{ margin: "5px", padding: "10px" }}>
        <h1 style={{ padding: "10px" }}>General Chairs</h1>
      </div>
      <div
        style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}
      >
        <CardBox
          name="Prof. Chang Wook Ahn"
          designation="GIST, South Korea"
          img={cwak}
          link="https://aieng.gist.ac.kr/prog/gsPerson/aieng/P/view.do;jsessionid=CC657C00E75779BB223A05F5D0548C7B"
        />
        <CardBox
          name="Prof. Jordan Cheer"
          designation="University of Southampton, UK"
          img={jcu}
          link="https://www.southampton.ac.uk/people/5x8fvs/professor-jordan-cheer"
        />
        <CardBox
          name="Prof. M. K. Bhuyan"
          designation="IIT Guwahati, India"
          img={mkbgu}
          link="https://www.iitg.ac.in/mkb/"
        />
      </div>
      <div style={{ margin: "5px", padding: "10px" }}>
        <h1 style={{ padding: "10px" }}>General Co-chairs </h1>
      </div>
      <div
        style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}
      >
        <CardBox
          name="Dr. Jesper Rindom Jensen"
          designation="Aalborg University, Denmark"
          img={jrjd}
          link="https://jesperrj.blog.aau.dk/"
        />
        <CardBox
          name="Dr. Nithin V George"
          designation="IIT Gandhinagar, India"
          img={nvgga}
          link="https://iitgn.ac.in/faculty/ee/fac-nithin"
        />
      </div>
      <div style={{ margin: "5px", padding: "10px" }}>
        <h1 style={{ padding: "10px" }}>Organizing Chair </h1>
      </div>
      <div
        style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}
      >
        <CardBox
          name="Prof. Manisha Pattanaik

          "
          designation="ABV-IIITM, India"
          img={mpg}
          link="https://www.iiitm.ac.in/index.php/en/component/splms/teacher/Dr.ManishaPattanaik"
        />
        <CardBox
          name="Prof. Mahua Bhattacharya

          "
          designation="ABV-IIITM, India"
          img={mb}
          link="https://www.iiitm.ac.in/index.php/en/component/splms/teacher/Dr.Mahua"
        />
      </div>
      <div style={{ margin: "5px", padding: "10px" }}>
        <h1 style={{ padding: "10px" }}>Advisory Committee </h1>
      </div>
      <div style={{ margin: "auto", width: "80%", padding: "10px" }}>
        <ul
          style={{
            listStyle: "square",
            fontSize: "18px",
            color: "purple",
            fontWeight: "500",
            display: "flex",
            flexWrap: "wrap",
          }}
        >
          <div style={{ marginRight: "auto" }}>
            <li>Prof. Boris Andrievsky, Russian Academy of Science, Russia</li>
            <li>Prof. Geetam Tomar, MP Section Chair</li>
            <li>
              Professor José Luis Hernandez-Caceres, Cuban Center for
              Neurosciences, Cuba
            </li>
            <li>Prof. K. K. Pattanaik, ABV-IIITM Gwalior, India</li>
            <li>Prof. Manisha Pattnaik, ABV-IIITM, India</li>
            <li>
              Dr. Michael Chesnaye, National Acoustic Laboratories, Australia
            </li>
            <li>
              Dr Mohamed Fareq Abdul Malek, University of Wollongong, Dubai
            </li>
            <li>Dr. Neeraj Kumar Mishra, Lucknow University</li>
            <li>Dr. Neeraj Prakash Mishra, CamGraphic SRL Italy</li>
            <li>Prof. Prabin Kumar Padhy, PDPM IIITMJ Jabalpur</li>
            <li>
              Dr. Satyendra Kumar Mishra, Centre Tecnològic de Telecomunicacions
              de Catalunya, Spain
            </li>
            <li>Prof. Subramaniam Ganesan, Oakland University, USA</li>
            <li>Dr. Vivek Tiwari, ABV-IIITM, India</li>
            <li>Prof V. K. Gupta, PDPM IIITDMJ Jabalpur</li>

            <li>Dr. Wilfred Godfrey, ABV-IIITM Gwalior, India</li>
          </div>
        </ul>
      </div>

      <div style={{ margin: "5px", padding: "10px" }}>
        <h1 style={{ padding: "10px" }}>Technical Program Committee </h1>
      </div>
      <div style={{ margin: "auto", width: "80%", padding: "10px" }}>
        <ul
          style={{
            listStyle: "square",
            fontSize: "18px",
            color: "purple",
            fontWeight: "500",
            display: "flex",
            flexWrap: "wrap",
          }}
        >
          <div style={{ marginRight: "auto" }}>
            <li>Dr. A. R. Jac Fredo, IIT (BHU) Varanasi, India</li>
            <li>Dr. Abhishek Sarkhel, NIT Meghalaya</li>
            <li>Dr. Anil Kumar, PDPM IIITDMJ</li>
            <li>Dr. Anjali, ABV-IIITM Gwalior, India</li>
            <li>Dr. Arijit Bhattacharjee, NUS Singapore</li>
            <li>Dr. Arvind Kumar, VNIT Nagpur, India</li>
            <li>Dr. Ashwin Kothari, VNIT Nagpur, India</li>
            <li>Dr. Atul Kumar, NIT Bhopal, India</li>
            <li>Dr. Bilal, UTSW, USA</li>
            <li>Dr. Binod Prasad, ABV-IIITM, India</li>
            <li>Dr. Biswajeet Mukhurjee, Delhi University</li>
            <li>Dr. Deep Prakash Samajhdar, PDPM IIITDMJ</li>
            <li>Dr. Deepesh Kumar Verma, IIT (BHU) Varanasi, India</li>
            <li>Dr. Dhananjoy Bhakta, IIIT Ranchi</li>
            <li>Dr. Ekta Goyal, NIT Warangal</li>
            <li>Dr. Gaurav Kaushal, ABV-IIITM Gwalior, India</li>
            <li>Dr. Gaurav Verma, NIT Kurukhetra</li>
            <li>Dr. ILA Sharma, MANIT, NIT Jaipur</li>
            <li>Mr. Jagdish Prajapati, SAMEER R&D DIT, Government of India</li>
            <li>Dr. Jawar Singh, IIT Patna</li>
            <li>Dr. Joydeep Sengupta, VNIT Nagpur, India</li>
            <li>Dr. Jose Thankachan, NIT Tiruchirappalli</li>
            <li>Dr. Kamal K Garg, PDEU Gandhinagar, India</li>
            <li>Dr. Kapil Gupta, UPES Dehradun</li>
            <li>Dr. Mahendra Shukla, ABV-IIITM, India</li>
            <li>Dr. Manish Mandoli, PDEU Gandhinagar, India</li>
            <li>Dr. Michael Chesnaye, NAL, Australia</li>
            <li>Dr. Mohammad Farukh Hashmi, NIT Warangal</li>
            <li>Dr. Mussart Ali, King Faisal University, Saudi Arabia</li>
            <li>Dr. Nalin Kumar Sharma, IIT Jammu</li>
          </div>
          <div>
            <li>Dr. Om Jee Pandey, IIT (BHU) Varanasi, India</li>
            <li>Dr. Om Prakash Verma, NIT Jalandhar</li>
            <li>Dr. Pinku Ranjan, ABV-IIITM Gwalior</li>
            <li>Dr. Pragya Swami, ABV-IIITM, India</li>
            <li>Dr. Prateek Rathore, LNMIIT Jaipur</li>
            <li>Dr. Praveen Singya, ABV-IIITM Gwalior</li>
            <li>Dr. Punit Kumar Bhavsar, NIT Nagpur, India</li>
            <li>Dr. Ravi Kant, PDEU Gandhinagar, India</li>
            <li>Dr. Ripudaman Singh, IIIT Guwahati</li>
            <li>Dr. Rishi Sinhal, BGI Bhopal</li>
            <li>Dr. Sachin Taran, DTU Delhi</li>
            <li>Dr. Sandesh Jain, ABV-IIITM Gwalior</li>
            <li>Dr. Sankalita Vishwas, NIT Hamirpur</li>
            <li>Dr. Santosh Singh Rathore, ABV-IIITM Gwalior</li>
            <li>Dr. Sanjeev Sharma, IIT (BHU) Varanasi</li>
            <li>Dr. Satyendra Singh Chouhan, NIT Jaipur</li>
            <li>Dr. Satyendra Singh Yadav, NIT Meghalaya</li>

            <li>Dr. Shravan Kumar Bandari, NIT Meghalaya</li>
            <li>Dr. Shashi Kant Sharma, IIIT Ranchi</li>
            <li>Dr. Shikha Maurya, NIT Agartala</li>
            <li>Dr. Shivendra Kumar Pandey, NIT Silchar</li>
            <li>Dr. Siddharth Bhalerao, GGIST Jabalpur</li>
            <li>Dr. SK Jain, IIITDM Jabalpur</li>
            <li>Dr. Somanath Pradhan, IIT Patna, India</li>
            <li>Dr. Sunil Kumar Jauhar, IIM Kashipur</li>
            <li>Dr. Varun Bajaj, NIT Bhopal, India</li>
            <li>Dr. Vashundra, NIT Warangal</li>
            <li>Dr. Vinay Bankey, NIT Rourkela</li>
            <li>Dr. Yashpal Singh Katariya, PDPM IIITDMJ</li>
          </div>
        </ul>
      </div>

      <div style={{ margin: "5px", padding: "10px" }}>
        <h1 style={{ padding: "10px" }}>Publication Chairs </h1>
      </div>
      <div
        style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}
      >
        <CardBox
          name="Dr. Mahendra Shukla"
          designation="ABV-IIITM, India"
          img={msg}
          link="https://www.iiitm.ac.in/index.php/en/component/splms/teacher/Dr.Mahendra"
        />
        <CardBox
          name="Dr. Deepak Dewangan"
          designation="ABV-IIITM, India"
          img={dd}
          link="https://www.iiitm.ac.in/index.php/en/component/splms/teacher/Dr.DeepakKumar"
        />
        <CardBox
          name="Dr. Asutosh Kar"
          designation="NIT Jahandar, India"
          img={ak}
          link="https://departments.nitj.ac.in/dept/ece/Faculty/6430447238bff038a7808d7e"
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
          name="Dr. Michael Chesnaye"
          designation="NAL, Australia "
          img={mcau}
          link="https://www.nal.gov.au/team_members/4504/"
        />
        <CardBox
          name="Dr. Ravi Kant"
          designation="PDEU Gandhinagar, India"
          img={rk}
          link="https://orsp.pdpu.ac.in/adminfacviewprofile.aspx?facid=ravi.kant"
        />
      </div>
      <div style={{ margin: "5px", padding: "10px" }}>
        <h1 style={{ padding: "10px" }}>Hospitality & Facility Chairs </h1>
      </div>

      <div
        style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}
      >
        <CardBox
          name="Dr. Amrendra Singh Yadav"
          designation="ABV-IIITM, India"
          img={asyg}
          link="https://www.iiitm.ac.in/index.php/en/component/splms/teacher/Dr.AmrendraSingh"
        />
        <CardBox
          name="Dr. Gaurav Pandey"
          designation="ABV-IIITM, India"
          img={userPic}
          link=""
        />
        <CardBox
          name="Dr. Purnendu Mishra"
          designation="ABV-IIITM, India"
          img={pmg}
          link="https://www.iiitm.ac.in/index.php/en/component/splms/teacher/Dr.Purnedu"
        />
        <CardBox
          name="Prof. K V Arya"
          designation="ABV-IIITM, India"
          img={kvag}
          link="https://www.iiitm.ac.in/index.php/en/component/splms/teacher/Dr.KVArya"
        />
        <CardBox
          name="Prof. Rajendra Sahu"
          designation="ABV-IIITM, India"
          img={rsg}
          link="https://www.iiitm.ac.in/index.php/en/component/splms/teacher/Prof.Rajendra"
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
        <h1 style={{ padding: "10px" }}>Technical Program Co-chair </h1>
      </div>

      <div
        style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}
      >
        <CardBox
          name="Dr. Mahendra Shukla"
          designation="ABV-IIITM, India"
          img={msg}
          link="https://www.iiitm.ac.in/index.php/en/component/splms/teacher/Dr.Mahendra"
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
          name="Dr. Avadh Kishor"
          designation="ABV-IIITM, India"
          img={akg}
          link="https://www.iiitm.ac.in/index.php/en/component/splms/teacher/Dr.Awadh"
        />
        <CardBox
          name="Dr. Gaurav Agarwal"
          designation="ABV-IIITM, India"
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
          name="Dr. I. A. Ansari"
          designation="ABV-IIITM, India"
          img={iaa}
          link="https://www.iiitm.ac.in/index.php/en/component/splms/teacher/Dr.IrshadAhmad"
        />
      </div>
    </div>
  );
};

export default Committee;
