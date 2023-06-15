import React from "react";
import LandingPageLayout from "@/Layouts/LandingPageLayout";
import Hero from "@/Components/Hero";
import Navbar from "@/Components/Navbar";
import { Head } from "@inertiajs/react";

export default function Landing(props) {
  return (
    <div>
      <Head title={props.title} />
      <LandingPageLayout>
        <Hero />
      </LandingPageLayout>
    </div>
  );
}
