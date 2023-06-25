import React from "react";
import LandingPageLayout from "@/Layouts/LandingPageLayout";
import Hero from "@/Components/Hero";
import { Head } from "@inertiajs/react";
import Content from "@/Components/Content";
import AboutUs from "@/Components/AboutUs";
import FAQ from "@/Components/faq";

export default function Landing(props) {
  return (
    <div>
      <Head title={props.title} />
      <LandingPageLayout>
        <Hero />

        <Content />

        <AboutUs />

        <FAQ />
      </LandingPageLayout>
    </div>
  );
}
