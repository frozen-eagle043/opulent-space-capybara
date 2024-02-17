import "./App.css";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Submission from "./components/Submission";
import Registration from "./components/Registration";
import OrganizingCommittee from "./components/OrganizingCommittee";
import AdvisoryCommittee from "./components/AdvisoryCommittee";
import CallForPapers from "./components/CallForPapers";
import Awards from "./components/Awards";
import Footer from "./components/Footer";
import Dates from "./components/Dates";
import AuthGuidelines from "./components/AuthGuidelines";
// import HeaderComponent from "./components/HeaderComponent/HeaderComponent";
// import { useState, useEffect } from "react";
function App() {
  return (
    // <Router>
    //   <div>
    //     {/* {<Navbar />} */}
    //     <Home/>
    //     {/* Define your routes and components here */}
    //   </div>
    // </Router>
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/submission" element={<Submission />} />
        <Route path="/registration" element={<Registration />} />
        <Route path="/speaker1" element={<OrganizingCommittee />} />
        <Route path="/speaker2" element={<AdvisoryCommittee />} />
        <Route path="/award" element={<Awards />} />
        <Route path="/call-for-paper" element={<CallForPapers />} />
        <Route path="/dates" element={<Dates />} />
        <Route path="/author-guidelines" element={<AuthGuidelines />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
