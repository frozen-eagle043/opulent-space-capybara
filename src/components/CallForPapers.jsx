import { fontWeight } from "@mui/system";
import React from "react";

const CallForPapers = () => {
  return (
    <div
      style={{
        background: "rgb(255,255,255)",
        background:
          "linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(224,222,222,0.6475840336134453) 0%, rgba(255,255,255,1) 0%, rgba(98,151,204,0.4739145658263305) 100%)",
      }}
    >
      <div style={{ margin: "5px", padding: "20px" }}>
        <h1 style={{ padding: "10px" }}>Call For Papers</h1>
        <div
          style={{
            fontSize: "18px",

            margin: "2px",
            padding: "8px",
          }}
        >
          INSPECT-2024 will serve as a dynamic platform, facilitating the
          convergence of researchers, academics, and industry practitioners.
          This event aims to foster the exchange of ideas and the sharing of
          recent research breakthroughs across a multitude of domains.
        </div>
        <div
          style={{
            fontSize: "20px",
            color: "black",
            margin: "2px",
            padding: "8px",
          }}
        >
          <div>
            <h2 style={{ fontWeight: "bold" }}>
              Track 1: Signal and Image Processing
            </h2>
            <ul>
              Digital Signal Processing (DSP) Image Enhancement and Restoration,
              Image Compression Pattern Recognition, Computer Vision, Medical
              Image Processing, Biomedical Signal Processing, Remote Sensing,
              Speech Processing, Multimedia Signal Processing, Sparse Signal
              Processing, Hyperspectral Imaging, Geospatial Image Processing,
              Biometric Signal and Image Processing, Deep Learning for Signal
              and Image Processing, Real-Time Signal and Image Processing,
              Sensor Array Processing, Nonlinear Signal Processing, Adaptive
              Signal Processing.
            </ul>
          </div>
          <div>
            <h2 style={{ fontWeight: "bold" }}>
              Track 2: Communication Systems & Networking
            </h2>
            <ul>
              Wireless Communication Systems, Mobile Networking, 5G and Beyond,
              Satellite Communication Systems, Network Security, Cognitive Radio
              Networks, Software-Defined Networking (SDN), Information Theory,
              Cloud Computing, Network Protocols, Communication Hardware Design,
              Social Networks Analysis, Multimedia Communication Systems, Edge
              Computing, Network Virtualization, Quantum Communication, Network
              Performance Optimization, Green Networking Technologies, Deep
              Learning for communication
            </ul>
          </div>
          <div>
            <h2 style={{ fontWeight: "bold" }}>
              Track 3: IoT, Smart Grid, Robotics & Control Systems
            </h2>
            <ul>
              Internet of Things (IoT), Smart Grid Technologies, Industrial
              Automation, Robotics and Automation, Control Systems Engineering,
              Cyber-Physical Systems, Energy Management Systems, Sensor
              Networks, Autonomous Vehicles, Human-Robot Interaction,
              Distributed Control Systems, Embedded Systems Design, Renewable
              Energy Integration, Smart Cities Infrastructure, Home Automation,
              Intelligent Transportation Systems, Swarm Robotics, Wearable
              Technology, Teleoperation and Telepresence, Adaptive Control
              Algorithms, Intelligent Robotics and Control
            </ul>
          </div>
          <div>
            <h2 style={{ fontWeight: "bold" }}>
              Track 4: RF, Microwave & Optical Communication
            </h2>
            <ul>
              Smart Radio Frequency (RF) Engineering, Microwave Engineering,
              Antenna Design, Radar Systems, Wireless Sensor Networks,
              Millimeter-Wave Communication, Optical Fiber Communication,
              Free-Space Optical Communication, Microwave Photonics, RF MEMS
              (Microelectromechanical Systems), Radio Wave Propagation, RF
              Circuit Design, Optical Networks, Microwave Remote Sensing,
              Terahertz Communication, RF Power Amplifiers, Photonic Integrated
              Circuits, Waveguide Components, RF Filters and Duplexers, Optical
              Switching and Routing.
            </ul>
          </div>
          <div>
            <h2 style={{ fontWeight: "bold" }}>
              Track 5: VLSI for Signal Processing & Communication
            </h2>
            <ul>
              Digital VLSI Design, Analog VLSI Design, Mixed-Signal VLSI Design,
              RF Circuit Design, Low-Power VLSI Design, ASIC
              (Application-Specific Integrated Circuit) Design, FPGA
              (Field-Programmable Gate Array) Design, VLSI Testing and
              Verification, SoC (System-on-Chip) Design, Hardware Security,
              Reconfigurable Computing, VLSI CAD (Computer-Aided Design),
              High-Level Synthesis, Hardware Acceleration for Signal Processing
              Algorithms, Clock and Power Distribution Network Design, VLSI
              Architectures for Communication Systems, RF Front-End Design,
              Advanced CMOS Technologies, VLSI Design for Wireless
              Communication, Neuromorphic Engineering.
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CallForPapers;
