import React from "react";
import "../styls/homepage.css"
import Navbar from "../components/navbar"
import ReportsChart from "../components/analysis_rime";

export default function Graphs() {
    return (
      <div>
        <Navbar />
        <ReportsChart />
      </div>
  )
}