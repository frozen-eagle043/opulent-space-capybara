import * as React from "react";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@material-ui/lab/TabContext";
import TabList from "@material-ui/lab/TabList";
import TabPanel from "@material-ui/lab/TabPanel";
import "../App.css";
import { fontWeight } from "@mui/system";

export default function Dates() {
  const [value, setValue] = React.useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div>
      <div style={{ margin: "5px", padding: "20px" }}>
        <h1 style={{ padding: "10px" }}>Important Dates</h1>
        <div
          style={{
            fontSize: "25px",
            fontWeight: "bold",
            color: "red",
            textAlign: "center",
            margin: "2px",
            padding: "8px",
          }}
        >
          Conference Dates: December 07-09,2024
        </div>
      </div>
      <Box
        sx={{
          width: "100%",
          typography: "body1",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          padding: "2px",
        }}
      >
        <TabContext value={value}>
          <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
            <TabList
              onChange={handleChange}
              aria-label="important date tabs"
              style={{ display: "flex" }}
              centered
            >
              <Tab
                label="First Round Submission"
                value="1"
                style={{ fontWeight: "bold", fontSize: "17px" }}
              />
              <Tab
                label="Second Round Submission"
                value="2"
                style={{ fontWeight: "bold", fontSize: "17px" }}
              />
              <Tab
                label="Registration and Camera Ready"
                value="3"
                style={{ fontWeight: "bold", fontSize: "17px" }}
              />
            </TabList>
          </Box>
          <TabPanel value="1" style={{ width: "100%" }}>
            <div
              class="row"
              className="tab-body"
              // style={{ width: "100%", display: "flex", alignItems: "center" }}
              // className="tablist-outer-div"
            >
              <div
                class="col-md-12"
                className="tablist-inner-div"
                //   style={{
                //     width: "100%",
                //     display: "flex",
                //     alignItems: "center",
                //     flexDirection: "column",
                //   }}
              >
                <div
                  className="tab-body-content"
                  // style={{ width: "100%", textAlign: "center" }}
                >
                  Submission Deadline: June 15, 2024
                </div>
                <div
                  className="tab-body-content"
                  style={{
                    width: "100%",
                    textAlign: "center",
                    background: "rgb(255,255,255)",
                    background:
                      "linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(224,227,230,1) 50%, rgba(255,255,255,1) 100%)",
                  }}
                >
                  Notification of Acceptance: July 15, 2024
                </div>
              </div>
            </div>
          </TabPanel>
          <TabPanel value="2" style={{ width: "100%" }}>
            <div class="row" className="tab-body">
              <div class="col-md-12" className="tablist-inner-div">
                <div className="tab-body-content">
                  Submission Deadline: August 15, 2024
                </div>
                <div
                  className="tab-body-content"
                  style={{
                    width: "100%",
                    textAlign: "center",
                    background: "rgb(255,255,255)",
                    background:
                      "linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(224,227,230,1) 50%, rgba(255,255,255,1) 100%)",
                  }}
                >
                  Notification of Acceptance: October 15, 2024
                </div>
              </div>
            </div>
          </TabPanel>
          <TabPanel value="3" style={{ width: "100%" }}>
            <div class="row" className="tab-body">
              <div class="col-md-12" className="tablist-inner-div">
                <div className="tab-body-content">
                  Camera Ready Submission Deadline: October 30, 2024
                </div>
                <div
                  className="tab-body-content"
                  style={{
                    width: "100%",
                    textAlign: "center",
                    background: "rgb(255,255,255)",
                    background:
                      "linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(224,227,230,1) 50%, rgba(255,255,255,1) 100%)",
                  }}
                >
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
