import Navbar from "@/Components/Navbar";
import TalentDescription from "@/Components/TalentDescription";
import React from "react";
import LandingPageLayout from "@/Layouts/LandingPageLayout";

export default function Talent() {
  return (
    <div>
      <Navbar user={props.auth.user} />
      <TalentDescription />
    </div>
  );
}
