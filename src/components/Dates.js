import * as React from "react";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@material-ui/lab/TabContext";
import TabList from "@material-ui/lab/TabList";
import TabPanel from "@material-ui/lab/TabPanel";
import "../App.css";
import { fontWeight } from "@mui/system";
import "./Dates.css"; // Import the external CSS file

export default function Dates() {
  const [value, setValue] = React.useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className="dates-container">
      <div className="dates-header">
        <h1>Important Dates</h1>
        <div className="marquee">
          <marquee scrollamount="18">
            The INSPECT-2024 (Intelligent Signal Processing and Effective
            Communication Technologies) conference will be held at ABV-IIITM,
            Gwalior during 7th and 8th December 2024.
          </marquee>
        </div>
      </div>
      <Box className="dates-tabs-container">
        <TabContext value={value}>
          <TabList onChange={handleChange} aria-label="important date tabs">
            <Tab label="Submission & Decision Dates" value="1" />
            {/* <Tab label="Second Round Submission" value="2" /> */}
            <Tab label="Registration and Camera Ready" value="3" />
          </TabList>
          <TabPanel value="1" className="tab-panel-background">
            <div className="tab-body">
              <div className="tablist-inner-div">
                <div className="tab-body-content">
                  Submission Deadline: June 30, 2024
                </div>
                <div className="tab-body-content">
                  Notification of Acceptance: Aug 15, 2024
                </div>
              </div>
            </div>
          </TabPanel>
          {/* <TabPanel value="2" className="tab-panel-background">
            <div className="tab-body">
              <div className="tablist-inner-div">
                <div className="tab-body-content">
                  Submission Deadline: July 15, 2024
                </div>
                <div className="tab-body-content">
                  Notification of Acceptance: October 15, 2024
                </div>
              </div>
            </div>
          </TabPanel> */}
          <TabPanel value="3" className="tab-panel-background">
            <div className="tab-body">
              <div className="tablist-inner-div">
                <div className="tab-body-content">
                  Camera Ready Submission Deadline: October 30, 2024
                </div>
                <div className="tab-body-content">
                  Early Bird Registration: November 15, 2024
                </div>
                <div className="tab-body-content">
                  Late Registration Deadline: November 30, 2024
                </div>
              </div>
            </div>
          </TabPanel>
        </TabContext>
      </Box>
    </div>
  );
}
