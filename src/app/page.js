"use client"

import { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Reviews from "@/components/Reviews";
import Pricing from "@/components/Pricing";
import Blogs from "@/components/Blogs";

export default function Home() {
  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 600,
      easing: "ease-in-sine",
      delay: 100,
    })
    AOS.refresh()
  }, [])
  return (
    <div>
      <Hero />
      <About />
      <Reviews />
      <Pricing />
      <Blogs />
    </div>
  );
}
